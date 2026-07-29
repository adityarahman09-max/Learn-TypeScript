/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */
const studentName: String="Alya Putri";
const GPA: number=3.89;
const familyIncome: number=4200000;
const competitionCount: number=4;
const disciplinaryRecord: boolean=false;
const documentsComplete: boolean= true;
let scholarshipAmount: number = 0;

const scholarshipBudget: number= 500000000;

const scholarshipCondition: boolean=(GPA>=3.75 && familyIncome<=5000000 && competitionCount>=3 && disciplinaryRecord==false && documentsComplete==true)
const isSchoolarship = scholarshipCondition == true ? "Schoolarship has Approved" : "Schoolarship has not Approved";
const resultScholarship = scholarshipCondition == true ? scholarshipAmount=12000000 : scholarshipAmount=0;

console.log("Student Name : " , studentName);
console.log("GPA : ", GPA);
console.log("Family Income : ", familyIncome);
console.log("Competition Count : ", competitionCount);
console.log("Disciplinary Records : ", disciplinaryRecord);
console.log("Documents Complete : ", documentsComplete);
console.log("Schoolarship : ", isSchoolarship);
console.log("Schoolarship Amount : ", scholarshipAmount);

console.log("Schoolarship Budget : ", scholarshipBudget - scholarshipAmount);



