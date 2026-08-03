/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

const studentName: string = "Fajar Hidayat";
const GPA: number = 3.86;
const familyIncome: number = 4200000;
const competiitonCount: number = 4;
const hasDisciplinaryRecord:  boolean = false;
const documentsComplete: boolean = true;

console.log("Student Name : ", studentName);
console.log("GPA : ", GPA);
console.log("Family Income : ", familyIncome);
console.log("Competition Count : ", competiitonCount);
console.log("Disciplinary Record : ", hasDisciplinaryRecord);
console.log("Documents Complete : ", documentsComplete);

if(GPA >= 3.75 && familyIncome < 5000000){
    if(competiitonCount >= 3 && hasDisciplinaryRecord == false && documentsComplete == true){
        console.log("Schoolarship Approved")
    } else {
        console.log("Passed First Screening, but Failed Second Screening")
    }
}else{
    console.log("Failed First Screening")
}