import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const data = JSON.parse(readFileSync(new URL('../src/data/see-results.json', import.meta.url), 'utf8'));

test('section counts reconcile to the full cohort summary', () => {
  assert.equal(data.summary.appeared, 108);
  for (const key of ['students', 'appeared', 'fcd', 'fc', 'failed']) {
    assert.equal(data.sections.reduce((sum, section) => sum + section[key], 0), data.summary[key]);
  }
  assert.equal(data.summary.fcd + data.summary.fc + data.summary.failed, 108);
  assert.equal(data.summary.failed, 16);
});

test('original and makeup records are separate snapshots of the same 19 students', () => {
  assert.equal(data.original.length, 19);
  assert.equal(data.makeup.length, 19);
  assert.deepEqual(data.original.map(row => row.usn), data.makeup.map(row => row.usn));
  const counts = rows => data.subjects.map(subject => rows.filter(row => ['F', 'X'].includes(row.subjects[subject.code]?.grade)).length);
  assert.deepEqual(counts(data.original), [13, 2, 13, 2, 2, 2, 4]);
  assert.deepEqual(counts(data.makeup), [12, 2, 11, 2, 2, 2, 3]);
  assert.equal(data.makeup.filter(row => Object.values(row.subjects).some(subject => subject.grade === 'F')).length, 16);
});

test('absences, missing subjects, backlog notes, and makeup changes retain source meaning', () => {
  const absent = data.makeup.find(row => row.usn === '3BR25MC089');
  assert.equal(absent.subjects.MMCL206.see, 'AB');
  assert.equal(absent.subjects.MMC201, undefined);
  assert.equal(data.original.find(row => row.usn === '3BR25MC078').subjects.MMC201.grade, 'X');
  assert.equal(data.makeup.find(row => row.usn === '3BR25MC078').subjects.MMC201.grade, 'B+');
  assert.equal(data.makeup.find(row => row.usn === '3BR25MC027').reportedFailedSubjects, '4 + 1 (1st SEM - DMS)');
});

test('Section B source formula discrepancy remains explicit', () => {
  const section = data.sections.find(row => row.label === 'Section B');
  assert.equal(section.appeared, 57);
  assert.equal(section.reportedRate, 47 / 56);
  assert.equal(((section.fcd + section.fc) / section.appeared * 100).toFixed(2), '82.46');
});
