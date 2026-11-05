import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { subjectFeedback, pythonStudentUsns, getSubjectFeedback, differingFeedbackFields } from '../src/data/see-feedback.ts';

const source = JSON.parse(readFileSync(new URL('../src/data/see-results.json', import.meta.url), 'utf8'));

test('all 17 image entries retain supplied marks and known student/subject keys', () => {
  const expected = [
    ['022', 'MMC201', 41, 17, 58, 'F'],
    ['027', 'MMC201', 38, 7, 45, 'F'], ['027', 'MMC202', 34, 17, 51, null], ['027', 'MMC205', 37, 12, 49, 'F'],
    ['032', 'MMC201', 38, 15, 53, 'F'], ['032', 'MMC202', 35, 13, 48, 'F'], ['032', 'MMC204', 39, 8, 47, 'F'],
    ['041', 'MMC201', 44, 16, 60, 'F'], ['081', 'MMC201', 39, 17, 56, 'F'],
    ['085', 'MMC201', 35, 8, 43, 'F'], ['085', 'MMC205', 34, 11, 45, 'F'],
    ['086', 'MMC201', 40, 18, 58, 'F'],
    ['087', 'MMC201', 37, 13, 50, 'F'], ['087', 'MMC204', 38, 3, 41, 'F'],
    ['100', 'MMC201', 38, 13, 51, 'F'], ['101', 'MMC201', 38, 4, 42, 'F'], ['107', 'MMC201', 38, 6, 44, 'F'],
  ];
  const actual = Object.entries(subjectFeedback).flatMap(([usn, subjects]) => Object.entries(subjects).map(([code, note]) => {
    assert.ok(source.original.some(student => student.usn === usn));
    assert.ok(source.makeup.some(student => student.usn === usn));
    assert.ok(source.subjects.some(subject => subject.code === code));
    assert.ok(note.reason.length > 0);
    return [usn.slice(-3), code, note.cie, note.see, note.total, note.grade];
  }));
  assert.deepEqual(actual, expected);
  assert.equal(Object.keys(subjectFeedback).length, 11);
});

test('Python names map explicitly to workbook students, including Usha Rani HK', () => {
  assert.equal(Object.keys(pythonStudentUsns).length, 11);
  for (const [name, usn] of Object.entries(pythonStudentUsns)) {
    const student = source.original.find(student => student.usn === usn);
    assert.equal(student.name.replaceAll(' ', '').toLowerCase(), name.replaceAll(' ', '').toLowerCase());
    assert.ok(subjectFeedback[usn].MMC201);
  }
  assert.equal(pythonStudentUsns['Usha Rani HK'], '3BR25MC101');
  assert.notEqual(pythonStudentUsns.Usha, pythonStudentUsns['Usha Rani HK']);
});

test('corrected Java feedback matches both workbook sittings without changing workbook marks', () => {
  const note = subjectFeedback['3BR25MC032'].MMC202;
  for (const records of [source.original, source.makeup]) {
    const marks = records.find(student => student.usn === '3BR25MC032').subjects.MMC202;
    const before = structuredClone(marks);
    assert.deepEqual(differingFeedbackFields(note, marks), []);
    assert.deepEqual(marks, before);
    assert.deepEqual([marks.cie, marks.see, marks.total], [35, 13, 48]);
  }
});

test('missing grade stays missing and missing notes stay empty', () => {
  const note = subjectFeedback['3BR25MC027'].MMC202;
  assert.equal(note.grade, null);
  assert.deepEqual(differingFeedbackFields(note, { ...note, grade: 'F' }), []);
  assert.deepEqual(getSubjectFeedback('3BR25MC039'), []);
  assert.deepEqual(getSubjectFeedback('unknown'), []);
  assert.equal(source.original.filter(student => !getSubjectFeedback(student.usn).length).length, 8);
});

test('personal circumstances are generalized', () => {
  const reasons = Object.values(subjectFeedback).flatMap(subjects => Object.values(subjects).map(note => note.reason)).join(' ');
  assert.doesNotMatch(reasons, /cancer|pregnan|mother|father|dad/i);
  assert.match(subjectFeedback['3BR25MC101'].MMC201.reason, /Health-related circumstances/);
});
