/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const employeeName: string= "Dimas";
const basicSalary: number= 5000000;
const overtimeHours: number= 12;
const overtimeRate: number=50000;
const overtimePay: number= 300000;
let bonus: number= 0;
const overtimeCondition= overtimeHours>10? bonus+=300000 : 0;

console.log("---SALARY INFORMATION---");
console.log("Name : ", employeeName)
console.log("Over Time Pay : ", overtimeHours * overtimeRate)
console.log(`Bonus : ${bonus}`)
console.log("Final Salary : ", basicSalary+(overtimeHours * overtimeRate)+bonus);

