export type SubjectRecord = { marks?: number | "AB"; att?: number };
export const performanceFilters = {
  goodAttendancePoorPerformance: "Good Attendance & Poor Performance",
  poorAttendanceGoodPerformance: "Poor Attendance & Good Performance",
  poorAttendancePoorPerformance: "Poor Attendance & Poor Performance",
};
export function matchesPerformance(record: SubjectRecord, filter: string, maxMarks = 50): boolean {
  if (typeof record.marks !== "number" || typeof record.att !== "number" || maxMarks <= 0) return false;
  const marksPercent = record.marks / maxMarks * 100;
  if (filter === "goodAttendancePoorPerformance") return record.att > 70 && marksPercent < 50;
  if (filter === "poorAttendanceGoodPerformance") return record.att < 50 && marksPercent >= 60;
  if (filter === "poorAttendancePoorPerformance") return record.att < 50 && marksPercent < 50;
  return false;
}
