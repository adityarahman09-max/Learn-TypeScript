/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */

type attendance = {
    name: string,
    present: boolean
}

const attendances: attendance[] = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(present: attendance[]): void {

    let totalPresent: number = 0;
    let totalAbsent: number = 0;
    let namesAbsent: string[] = [];

    for (const attend of present) {

        if (attend.present) {
            totalPresent++;
        } else {
            totalAbsent++;
            namesAbsent.push(attend.name);
        }
    }

    console.log(`Total Present : ${totalPresent}`);
    console.log(`Total Absent : ${totalAbsent}`);
    console.log(`Absent Student : `);

    if (present.length > 0) {
        for (const name of namesAbsent) {
            console.log(`- ${name}`);
        }
    }else{
        console.log(`- None`);
        
    }
}

printAttendanceReport(attendances);