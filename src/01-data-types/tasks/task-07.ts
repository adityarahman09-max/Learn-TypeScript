/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student ={
    studentID: String,
    fullName: String,
    gradeLevel: String
}

type Course ={
    courseID:String,
    courseTitle: String,
    instructorName: String,
    learningHours: number
}

type regis ={
    student: Student,
    course: Course,
    dateRegistration: Date,
    isComplete: boolean
}

const registrationInformation: regis[]=[
    {
        student: {
            studentID: "2536",
            fullName: "Rajendra Daniswara",
            gradeLevel: "A"
        },

        course: {
            courseID: "6352",
            courseTitle: "Mathematics",
            instructorName: "Ilham Budi",
            learningHours: 10
        },

        dateRegistration: new Date("2026-07-26"),
        isComplete: true
    },
    {
        student: {
            studentID: "9685",
            fullName: "Irkham",
            gradeLevel: "A"
        },

        course: {
            courseID: "8852",
            courseTitle: "English",
            instructorName: "Ando Kim",
            learningHours: 12
        },

        dateRegistration: new Date("2026-07-26"),
        isComplete: true
    },
    {
        student: {
            studentID: "5521",
            fullName: "Kim Kim",
            gradeLevel: "A"
        },

        course: {
            courseID: "5241",
            courseTitle: "Sciene",
            instructorName: "Fajar Akbar",
            learningHours: 15
        },

        dateRegistration: new Date("2026-07-26"),
        isComplete: true
    }
]

console.log(registrationInformation)


