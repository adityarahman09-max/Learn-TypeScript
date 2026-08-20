/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

type submision = {
    student: string;
    submitted: boolean;
    score: number;
}

const submissions: submision[] = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedAsignment: number = 0;
let didNotSubmitted: number = 0;
let studentPassed: number = 0;
let studentRevise: number = 0;
let nameDidNotSubmitted: string[] = [];
let nameMustRevise: string[] = [];

for (const submission of submissions) {

    if (submission.submitted) {
        submittedAsignment++
    } else {
        didNotSubmitted++
        nameDidNotSubmitted.push(submission.student);
    }

    if (submission.score >= 75) {
        studentPassed++;
    } else if (submission.score < 75) {
        studentRevise++
        nameMustRevise.push(submission.student);
    }
}

console.log(`Number Submitted : ${submittedAsignment}`);
console.log(`Did Not Submitted : ${didNotSubmitted}`);
console.log(`Number Student Passed : ${studentPassed}`);
console.log(`Number Must Revise : ${studentRevise}`);
console.log(`Name Did Not Submitted : ${nameDidNotSubmitted}`);
console.log(`Name Must Revise Assigment : ${nameMustRevise}`)
