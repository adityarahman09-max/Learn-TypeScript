/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

const Applicant: string = "Andi Wijaya";
const monthlyIncome: number = 10000000;
const creditScore: number = 725;
const existingDebt: number = 2500000;
const permanentEmployee: boolean = true;
const existingDebtRatio = existingDebt / monthlyIncome * 100;

console.log("Applicant : ", Applicant);
console.log("Monthly Income : ", monthlyIncome);
console.log("Credit Score : ", creditScore);
console.log("Existing Debt : ", existingDebt);
console.log("Permanent Employee : ", permanentEmployee);
console.log("EB Ratio : ", existingDebtRatio);

if (monthlyIncome >= 8000000 && creditScore >= 700){
    if(existingDebtRatio < 30 && permanentEmployee){
        console.log("Loan Approved");
    }else{
        console.log("Manual Review");
    }
}else{
    console.log("Loan Rejected");
}