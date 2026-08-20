/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

import { count } from "node:console";


type submmission = {
    student: string;
    submitted: boolean;
    score: number;
}

const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countSubmittedStudent(listStudent: submmission[]): number {
    let submittedStudent: number = 0;

    for (const list of listStudent) {
        if (list.submitted) {
            submittedStudent++
        }
    }

    return submittedStudent;
}

function countMiissingStudent(listStudent: submmission[]): number {
    let missingStudent: number = 0;

    for (const list of listStudent) {
        if (!list.submitted) {
            missingStudent++
        }
    }

    return missingStudent;
}

function countPassedStudent(listStudent: submmission[]): number {
    let passedStudent: number = 0;

    for (const list of listStudent) {
        if (list.score >= 75) {
            passedStudent++
        }
    }

    return passedStudent;
}

function countStudentRequiringRevision(listStudent: submmission[]): number {
    let requiringRevision: number = 0;

    for (const list of listStudent) {
        if (list.submitted && list.score < 75) {
            requiringRevision++
        }
    }

    return requiringRevision;
}

function averageScore(listStudent: submmission[]): number {
    let average: number = 0;
    let totalScore: number = 0;

    for (const list of listStudent) {
        totalScore += list.score;
    }

    average = totalScore / listStudent.length;

    return average;
}

function highestScore(listStudent: submmission[]): number {
    let highestScore: number = listStudent[0].score;

    for (const list of listStudent) {
        if (list.score > highestScore) {
            highestScore = list.score;
        }
    }

    return highestScore;
}

function lowestScore(listStudent: submmission[]): number {
    let lowestScore: number = listStudent[0].score;

    for (const list of listStudent) {
        if (list.score < lowestScore) {
            lowestScore = list.score;
        }
    }

    return lowestScore;
}

function displayReports(listStudent: submmission[]): void {

    console.log(`----- Report Display -----`);
    console.log(`Total Student : ${submissions.length}`);
    console.log(`Subbmitted Assignments : ${countSubmittedStudent(submissions)}`);
    console.log(`Missing Assignments : ${countMiissingStudent(submissions)}`);
    console.log(`Passed Student : ${countPassedStudent(submissions)}`);
    console.log(`Student Requiring Revise : ${countStudentRequiringRevision(submissions)}`);
    console.log(`Average Score : ${averageScore(submissions)}`);
    console.log(`Highest Score : ${highestScore(submissions)}`);
    console.log(`Lowest Score : ${lowestScore(submissions)}`)
}

displayReports(submissions);