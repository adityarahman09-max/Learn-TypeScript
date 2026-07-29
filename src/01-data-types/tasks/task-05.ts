/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type attendanceInfo = {
    employeeID: number,
    employeeName: String,
    date: Date, 
    checkIn: String,
    checkOut: String
    totalWorking: number,
    present: boolean
}

const attendance: attendanceInfo[] = [
    {
        employeeID: 7878,
        employeeName: "Supri",
        date: new Date ("2026-07-26"),
        checkIn: "12.00",
        checkOut: "17.35",
        totalWorking: 5,
        present: true
    },{
        employeeID: 9696,
        employeeName: "Samid",
        date: new Date ("2026-07-26"),
        checkIn: "07.00",
        checkOut: "17.36",
        totalWorking: 10,
        present: true
    },{
        employeeID: 6363,
        employeeName: "Anjar",
        date: new Date ("2026-07-26"),
        checkIn: "10.00",
        checkOut: "19.01",
        totalWorking: 9,
        present: true
    }
]

console.log(attendance)