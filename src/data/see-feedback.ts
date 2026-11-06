export type FeedbackMarks = { cie: number; see: number; total: number; grade: string | null };
export type SubjectFeedback = FeedbackMarks & { reason: string };

// Explicit source-name mapping: the Python image supplies names rather than USNs.
export const pythonStudentUsns: Record<string, string> = {
  "Bollineni Aswini": "3BR25MC022",
  "Fariya Fathima": "3BR25MC027",
  "Ganesh B": "3BR25MC032",
  "K Mohammed Khizar": "3BR25MC041",
  "Samuel U": "3BR25MC081",
  "Shaik Jeelan K": "3BR25MC085",
  "Sharanu": "3BR25MC086",
  "Shashi Kumar M": "3BR25MC087",
  "Usha": "3BR25MC100",
  "Usha Rani HK": "3BR25MC101",
  "Y Rasamma": "3BR25MC107",
};

// DSA source lists Samuel U as 3BR25MC80; name and all marks match workbook USN 3BR25MC081.
// Reported feedback has no specified examination sitting. Workbook results remain separate.
export const subjectFeedback: Record<string, Record<string, SubjectFeedback>> = {
  "3BR25MC108": {
    MMC203: { cie: 33, see: 18, total: 51, grade: "F", reason: "Had difficulty recalling concepts during the examination." },
  },
  "3BR25MC073": {
    MMC203: { cie: 40, see: 12, total: 52, grade: "F", reason: "Did not prepare well for the programming component." },
  },
  "3BR25MC003": {
    MMC203: { cie: 44, see: 15, total: 59, grade: "F", reason: "Did not prepare well for the programming component." },
  },
  "3BR25MC022": {
    MMC201: { cie: 41, see: 17, total: 58, grade: "F", reason: "Did not prepare well." },
  },
  "3BR25MC027": {
    MMC203: { cie: 38, see: 9, total: 47, grade: "F", reason: "Family health circumstances affected concentration." },
    MMC201: { cie: 38, see: 7, total: 45, grade: "F", reason: "Reads the material but experiences confusion and difficulty recalling it during the examination." },
    MMC202: { cie: 34, see: 17, total: 51, grade: null, reason: "Family health circumstances affected concentration." },
    MMC205: { cie: 37, see: 12, total: 49, grade: "F", reason: "Family health circumstances affected concentration." },
  },
  "3BR25MC032": {
    MMC203: { cie: 38, see: 11, total: 49, grade: "F", reason: "Did not prepare well." },
    MMC201: { cie: 38, see: 15, total: 53, grade: "F", reason: "Faced difficulty in learning programming." },
    MMC202: { cie: 35, see: 13, total: 48, grade: "F", reason: "Did not prepare well." },
    MMC204: { cie: 39, see: 8, total: 47, grade: "F", reason: "Did not prepare well." },
  },
  "3BR25MC041": {
    MMC201: { cie: 44, see: 16, total: 60, grade: "F", reason: "Reported writing well, but the answer script contained insufficient content." },
  },
  "3BR25MC081": {
    MMC203: { cie: 40, see: 14, total: 54, grade: "F", reason: "Certification course commitments affected examination preparation." },
    MMC201: { cie: 39, see: 17, total: 56, grade: "F", reason: "Did not prepare well." },
  },
  "3BR25MC085": {
    MMC203: { cie: 37, see: 12, total: 49, grade: "F", reason: "Family bereavement during the examination period affected performance." },
    MMC201: { cie: 35, see: 8, total: 43, grade: "F", reason: "Family bereavement and responsibilities affected preparation." },
    MMC205: { cie: 34, see: 11, total: 45, grade: "F", reason: "Family bereavement during the examination period affected performance." },
  },
  "3BR25MC086": {
    MMC201: { cie: 40, see: 18, total: 58, grade: "F", reason: "Did not prepare programs." },
  },
  "3BR25MC087": {
    MMC203: { cie: 42, see: 17, total: 59, grade: "F", reason: "Did not attend classes regularly." },
    MMC201: { cie: 37, see: 13, total: 50, grade: "F", reason: "Was unable to answer questions completely." },
    MMC204: { cie: 38, see: 3, total: 41, grade: "F", reason: "Did not prepare well." },
  },
  "3BR25MC100": {
    MMC203: { cie: 39, see: 18, total: 57, grade: "F", reason: "An urgent commitment affected examination performance." },
    MMC201: { cie: 38, see: 13, total: 51, grade: "F", reason: "Did not prepare well." },
  },
  "3BR25MC101": {
    MMC203: { cie: 39, see: 18, total: 57, grade: "F", reason: "Health-related circumstances affected preparation." },
    MMC201: { cie: 38, see: 4, total: 42, grade: "F", reason: "Health-related circumstances affected class attendance." },
  },
  "3BR25MC107": {
    MMC203: { cie: 37, see: 18, total: 55, grade: "F", reason: "Health-related issues affected examination performance." },
    MMC201: { cie: 38, see: 6, total: 44, grade: "F", reason: "Did not prepare well." },
  },
};

export function getSubjectFeedback(usn: string) {
  return Object.entries(subjectFeedback[usn] ?? {});
}

export function differingFeedbackFields(feedback: FeedbackMarks, workbook?: { cie: number | null; see: number | string | null; total: number | null; grade: string }) {
  if (!workbook) return [];
  return (["cie", "see", "total", "grade"] as const).filter(field =>
    feedback[field] !== null && workbook[field] !== null && feedback[field] !== workbook[field],
  );
}
