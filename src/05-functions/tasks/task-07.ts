import { count } from "node:console";

/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */
type studentList = {
  name: string;
  major: string;
  active: boolean;
}
const students: studentList[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(listStudent: studentList[]) {
  let countActive: number = 0;

  for (const list of listStudent) {
    if (list.active) {
      countActive++
    }
  }

  return countActive;
}

function countInactiveStudents(listStudent: studentList[]) {
  let countInactive: number = 0;

  for (const list of listStudent) {
    if (!list.active) {
      countInactive++
    }
  }

  return countInactive;
}

function countStudentsByMajor(listStudent: studentList[], Major: string) {
  let countMajor: number = 0;

  for (const list of listStudent) {
    if (list.major === Major) {
      countMajor++
    }
  }

  return countMajor;
}

function printEnrollmentReport(listStudent: studentList[]): void {

  console.log(`----- ENROLLMENT REPORT -----`);
  console.log(`Total Student : ${students.length}`);
  console.log(`Active Student : ${countActiveStudents(students)}`);
  console.log(`Innactive Student : ${countInactiveStudents(students)}`);

  console.log('----- Student By Major -----');
  console.log(`Software Engineering : ${countStudentsByMajor(students, "Software Engineering")}`);
  console.log(`Multimedia : ${countStudentsByMajor(students, "Multimedia")}`)
  console.log(`Networking : ${countStudentsByMajor(students, "Networking")}`)
}

printEnrollmentReport(students);

