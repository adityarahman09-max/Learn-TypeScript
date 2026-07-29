/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type student= {
    studentID: String,
    fullName: String,
    age: number,
    activeAsStudent: boolean
}

const newStudent: student[] =[
    {
        studentID: "0123",
        fullName: "Muhammad Javier Praba",
        age: 17,
        activeAsStudent: true  
    },{
        studentID: "0147",
        fullName: "Muhammad Ilham Daniswara",
        age: 16,
        activeAsStudent: true
    },{
        studentID: "0159",
        fullName: "Muhammad Akhdan",
        age:17,
        activeAsStudent: true
    }
] 

console.log(newStudent)