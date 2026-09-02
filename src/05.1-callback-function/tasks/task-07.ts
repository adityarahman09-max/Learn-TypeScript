/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */
type student = {
    name: string,
    score: number,
    attendance: number
}

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

type RECOMENDATION = "EXCELLENT" | "GOOD" | "IMPROVE ATTENDANCE" | "IMPROVE ACADEMIC PERFORMANCE"
type STUDENT_PASSFAIL = student & { status: string }
type ACADEMIC_PERFORMANCE = student & { perform: string }
type ATTENDANCE_STATUS = student & { attend: string }
type FINAL_RECOMENDATION = student & {recomendation : RECOMENDATION}

function processStudent<T>(
    arr: student[],
    callback: (students: student) => T
): T[] {
    return arr.map(callback)
}

function statusPassFail(selectedStudent: student): STUDENT_PASSFAIL {
    let status: string
    if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90) {
        status = "PASS"
    } else {
        status = "FAIl"
    }

    return {
        ...selectedStudent,
        status
    }

}

function academicPerformance(selectedStudent: student): ACADEMIC_PERFORMANCE {
    let perform: string

    if (selectedStudent.score >= 90) {
        perform = "Excellent"
    } else if (selectedStudent.score >= 80) {
        perform = "Good"
    } else if (selectedStudent.score >= 70) {
        perform = "Need Improve"
    } else {
        perform = "Need More Conseling"
    }

    return {
        ...selectedStudent,
        perform
    }
}

function attendaceStatus(selectedStudent: student): ATTENDANCE_STATUS{
    let attend : string

    if(selectedStudent.attendance>=  90){
        attend = "Excellent"
    }else if(selectedStudent.attendance >= 80){
        attend = "Better"
    }else if(selectedStudent.attendance >= 70){
        attend = "Need Conseling"
    }else{
        attend = "Fail A Grade"
    }

    return{
        ...selectedStudent,
        attend
    }
}

function finalRecomendation(selectedStudent:student): FINAL_RECOMENDATION{
    let recomendation: RECOMENDATION = "EXCELLENT"

    if(selectedStudent.score >= 90 && selectedStudent.attendance >= 90){
        recomendation = "EXCELLENT"
    }else if(selectedStudent.score >= 75 && selectedStudent.attendance >= 90){
        recomendation = "GOOD"
    }else if(selectedStudent.score >= 75 && selectedStudent.attendance < 90){
        recomendation = "IMPROVE ACADEMIC PERFORMANCE"
    }else if(selectedStudent.score<75){
        recomendation = "IMPROVE ATTENDANCE"
    }

    return{
        ...selectedStudent,
        recomendation
    }
}

const studentPassOrFail = processStudent(students, statusPassFail)
const studentAcademicPerformaceReport = processStudent(students, academicPerformance)
const studentAttendanceStatusReport = processStudent(students, academicPerformance)
const studentFinalRecomendationReport = processStudent(students, finalRecomendation)

console.log(`--- STUDENT PASS RECORD ---`);
console.log({students : studentPassOrFail});
console.log(`--- STUDENT ACADEMIC PERFORMANCE REPORT ---`);
console.log({students : studentAcademicPerformaceReport});
console.log(`--- STUDENT ATTENDANCE STATUS REPORT ---`);
console.log({students : studentAttendanceStatusReport});
console.log(`--- STUDENT FINAL RECOMENDATION ---`);
console.log({students : studentFinalRecomendationReport});


