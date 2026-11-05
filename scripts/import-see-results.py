"""Extract the supplied SEE workbook without changing its values or formulas.

Usage: python3 scripts/import-see-results.py /path/to/workbook.xlsx
The AVERAGE sheet's source values and cached rates remain available for auditing.
"""

import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path
from zipfile import ZipFile


NS = {"s": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


def read_cells(archive, path, strings):
    cells = {}
    for cell in ET.fromstring(archive.read(path)).findall(".//s:sheetData/s:row/s:c", NS):
        value = cell.find("s:v", NS)
        if value is None:
            continue
        raw = value.text
        if cell.get("t") == "s":
            parsed = strings[int(raw)]
        elif cell.get("t") in ("str", "e"):
            parsed = raw
        else:
            number = float(raw)
            parsed = int(number) if number.is_integer() else number
        cells[cell.get("r")] = parsed
    return cells


def extract(source):
    with ZipFile(source) as archive:
        strings = ["".join(item.itertext()) for item in ET.fromstring(archive.read("xl/sharedStrings.xml"))]
        result = read_cells(archive, "xl/worksheets/sheet1.xml", strings)
        average = read_cells(archive, "xl/worksheets/sheet2.xml", strings)

    assert result["A2"] == "2ND SEM RESULT ANALYSIS - AUG 2026", "Unexpected workbook period"
    groups = [("C", "D", "E", "F"), ("G", "H", "I", "J"), ("K", "L", "M", "N"),
              ("O", "P", "Q", "R"), ("S", "T", "U", "V"), ("W", "X", "Y", "Z"), ("AA", "AB", "AC", "AD")]
    subjects = [{"name": result[f"{cols[0]}4"], "code": result[f"{cols[0]}5"].split(" - ")[0]}
                for cols in groups]

    def records(start, end):
        rows = []
        for row in range(start, end + 1):
            usn = result.get(f"A{row}")
            if not usn:
                continue
            subjects_for_student = {}
            for subject, columns in zip(subjects, groups):
                if f"{columns[3]}{row}" in result:
                    subjects_for_student[subject["code"]] = {
                        field: result.get(f"{column}{row}")
                        for field, column in zip(("cie", "see", "total", "grade"), columns)
                    }
            rows.append({"usn": usn, "name": re.sub(r"\s+", " ", result[f"B{row}"]).strip(),
                         "reportedFailedSubjects": result[f"AE{row}"], "subjects": subjects_for_student})
        return rows

    def summary(label, row, columns):
        return {"label": label, **{key: average[f"{column}{row}"] for key, column in zip(
            ("students", "appeared", "fcd", "fc", "failed", "reportedRate"), columns)}}

    data = {"source": source.name, "period": "August 2026", "subjects": subjects,
            "summary": summary("Overall", 6, ("B", "C", "D", "E", "F", "G")),
            "sections": [summary("Section A", 13, ("B", "C", "D", "E", "F", "G")),
                         summary("Section B", 13, ("J", "K", "L", "M", "N", "O"))],
            "original": records(7, 25), "makeup": records(38, 56)}
    assert len(data["original"]) == len(data["makeup"]) == 19
    assert {row["usn"] for row in data["original"]} == {row["usn"] for row in data["makeup"]}
    for entry in [data["summary"], *data["sections"]]:
        assert entry["fcd"] + entry["fc"] + entry["failed"] == entry["appeared"]
    for key in ("students", "appeared", "fcd", "fc", "failed"):
        assert sum(section[key] for section in data["sections"]) == data["summary"][key]
    assert sum(any(s["grade"] == "F" for s in row["subjects"].values()) for row in data["makeup"]) == data["summary"]["failed"]
    return data


if __name__ == "__main__":
    source = Path(sys.argv[1])
    data = extract(source)
    destination = Path(__file__).resolve().parents[1] / "src/data/see-results.json"
    destination.write_text(json.dumps(data, indent=2) + "\n")
    print("Imported 19 original and 19 makeup records; all section totals reconcile.")
