/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks 
 * the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

function finalGrade(assignment: number, midterm: number, final: number): number {
    const result = (assignment * 0.3) + (midterm + 0.3) + (final * 0.4);
    return result;
}

const students = [
    { student: `Alya`, assignment: 85, midterm: 80, final: 92 },
    { student: `Budi`, assignment: 78, midterm: 75, final: 81 },
    { student: `Citra`, assignment: 90, midterm: 88, final: 95 },
]

for (let index = 0; index < students.length; index++) {
    const finalScore = finalGrade(students[index].assignment,students[index].midterm,students[index].final);
    console.log(`Final Score of ${students[index].student}: ${finalScore}`); ;
}