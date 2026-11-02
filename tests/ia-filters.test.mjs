import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { matchesPerformance } from '../src/lib/ia-filters.ts';

const highAttLowMarks = 'goodAttendancePoorPerformance';
const lowAttHighMarks = 'poorAttendanceGoodPerformance';
const lowAttLowMarks = 'poorAttendancePoorPerformance';

test('strict attendance and marks boundaries', () => {
  assert.equal(matchesPerformance({ att: 70, marks: 24 }, highAttLowMarks), false);
  assert.equal(matchesPerformance({ att: 71, marks: 24 }, highAttLowMarks), true);
  assert.equal(matchesPerformance({ att: 71, marks: 25 }, highAttLowMarks), false);
  assert.equal(matchesPerformance({ att: 50, marks: 30 }, lowAttHighMarks), false);
  assert.equal(matchesPerformance({ att: 49, marks: 30 }, lowAttHighMarks), true);
  assert.equal(matchesPerformance({ att: 49, marks: 29 }, lowAttHighMarks), false);
  assert.equal(matchesPerformance({ att: 49, marks: 24 }, lowAttLowMarks), true);
  assert.equal(matchesPerformance({ att: 50, marks: 24 }, lowAttLowMarks), false);
  assert.equal(matchesPerformance({ att: 49, marks: 25 }, lowAttLowMarks), false);
});

test('zero is valid; absences and missing values are not numeric marks', () => {
  assert.equal(matchesPerformance({ att: 0, marks: 0 }, lowAttLowMarks), true);
  for (const filter of [highAttLowMarks, lowAttHighMarks, lowAttLowMarks]) {
    for (const record of [{ att: 0, marks: 'AB' }, { att: 90, marks: 'AB' }, { att: 0 }, { marks: 10 }, {}]) {
      assert.equal(matchesPerformance(record, filter), false);
    }
  }
});

test('filters require a matching pair within one subject', () => {
  const subjects = [{ att: 90, marks: 40 }, { att: 40, marks: 20 }];
  assert.equal(subjects.some((record) => matchesPerformance(record, highAttLowMarks)), false);
});

test('complete rosters and subject distributions reconcile', () => {
  const data = JSON.parse(readFileSync(new URL('../src/data/ia-analysis.json', import.meta.url)));
  assert.equal(data.students.length, 110);
  assert.equal(new Set(data.students.map((s) => s.usn)).size, 110);
  assert.equal(data.students.filter((s) => s.specialisation === 'AI/ML').length, 64);
  assert.equal(data.students.filter((s) => s.specialisation === 'DataScience').length, 46);
  for (const subject of data.subjects) {
    assert.equal(subject.marks.reduce((a, b) => a + b, 0) + subject.missingMarks, subject.total);
    assert.equal(subject.attendance.reduce((a, b) => a + b, 0) + subject.missingAttendance, subject.total);
  }
  assert.deepEqual(data.students.find((s) => s.usn === '3BR25MC053').subjects.dmdw, { marks: 38, att: 0 });
  assert.equal(data.students.find((s) => s.usn === '3BR25MC108').subjects.ml.marks, 'AB');
});
