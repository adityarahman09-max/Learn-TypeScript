/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

type AttendanceRecord = {
  name: string;
  present: boolean;
};

const attendances: AttendanceRecord[] = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount: number = 0;
let absentCount: number = 0;
const absentStudentNames: string[] = [];

for (const student of attendances) {
  if (student.present) {
    presentCount++;
  } else {
    absentCount++;
    absentStudentNames.push(student.name);
  }
}

const totalStudents: number = attendances.length;
const attendancePercentage: number = (presentCount / totalStudents) * 100;

console.log(`Present Students Count : ${presentCount}`);
console.log(`Absent Students Count  : ${absentCount}`);
console.log(`Absent Students Names  : ${absentStudentNames}`);
console.log(`Attendance Percentage  : ${attendancePercentage}%`);


