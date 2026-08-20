/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */

function showBonusStatus(score : number): string {
    if(score>=85){
        return "Bonus Approved";
    }else{
        return "Bonus Not Approved";
    }
}

const employeeData = [
    {employee: "John Cena", score: 92},
    {employee: "Undertaker", score: 76},
    {employee: "Rey Mysterio", score: 88}
]

for (let index = 0; index < employeeData.length; index++) {
    
    const bonus = showBonusStatus(employeeData[index].score);
    console.log(`Employee Name : ${employeeData[index].employee}`);
    console.log(`Score : ${employeeData[index].score}`);
    console.log(`Has A Bonus : ${bonus}`);
    console.log(` `);
    
}
