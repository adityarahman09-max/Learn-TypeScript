/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

const studentName : string = "Nadia Putri";
const activeStudent : boolean = true;
const tuitionPaid : boolean = true;
const passedProgrammingFundamentals : boolean = true;
const passedDatabaseSystem : boolean = true;
const GPA : number = 3.45;
const seatsAvailable : boolean = false;

console.log(`Student Name : ${studentName}`);
console.log(`Active Student : ${activeStudent}`);
console.log(`Tuition Paid : ${tuitionPaid}`);
console.log(`Passed Programmin Fundamentals : ${passedProgrammingFundamentals}`);
console.log(`Passed Database System : ${passedDatabaseSystem}`);
console.log(`GPA : ${GPA}`);
console.log(`Seats Available : ${seatsAvailable}`);

if (activeStudent && tuitionPaid){
    if(passedDatabaseSystem && passedProgrammingFundamentals && GPA>= 3.20){
        if(seatsAvailable){
            console.log("Registration Successful");
        }else{
            console.log("You are Added to Waiting List");
        }
    }else{
        console.log("Academic Requirements Not Met")
    }
}else{
    console.log("Registration Rejected")
}