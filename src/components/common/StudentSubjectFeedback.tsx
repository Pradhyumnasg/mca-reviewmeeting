import { differingFeedbackFields, getSubjectFeedback } from "@/data/see-feedback";
import source from "@/data/see-results.json";

type WorkbookResult = { cie: number | null; see: number | string | null; total: number | null; grade: string };

export default function StudentSubjectFeedback({ usn, subjects }: { usn: string; subjects: Record<string, WorkbookResult> }) {
  const entries = getSubjectFeedback(usn);
  if (!entries.length) return <p className="text-sm text-muted-foreground">No feedback provided</p>;

  return <div className="w-72 space-y-2 whitespace-normal">
    {entries.map(([code, feedback]) => {
      const workbook = subjects[code];
      const differences = differingFeedbackFields(feedback, workbook);
      return <details key={code} className="rounded-lg border bg-card p-3">
        <summary className="cursor-pointer text-sm font-medium rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
          {source.subjects.find(subject => subject.code === code)?.name ?? code}
          {differences.length > 0 && <span className="block mt-1 text-xs text-[hsl(var(--tone-amber))]">Marks differ from workbook</span>}
        </summary>
        <div className="mt-3 space-y-3 text-sm">
          <p className="text-xs font-semibold text-muted-foreground">Reported feedback · {code}</p>
          <p>{feedback.reason}</p>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Feedback image marks</p>
            <dl className="grid grid-cols-2 gap-2">
              {(["cie", "see", "total", "grade"] as const).map(field => <div key={field}>
                <dt className="text-xs uppercase text-muted-foreground">{field}</dt>
                <dd className="font-medium">{feedback[field] ?? "Not provided"}</dd>
              </div>)}
            </dl>
          </div>
          {differences.length > 0 && <p className="text-xs leading-relaxed border-t pt-2">
            Source discrepancy: {differences.map(field => `${field.toUpperCase()} ${feedback[field]} in feedback / ${workbook[field]} in workbook`).join("; ")}. Workbook marks are unchanged.
          </p>}
          <p className="text-xs text-muted-foreground">Examination sitting unspecified.</p>
        </div>
      </details>;
    })}
  </div>;
}
