/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

import { count } from "node:console";

type patient = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
}
const patients: patient[] = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function admittedPatients(listPatient: patient[]): number {
    let countAdmittedPatients: number = 0;;

    for (const list of listPatient) {
        if (list.admitted) {
            countAdmittedPatients++
        }
    }

    return countAdmittedPatients;
}

function dischargedPatients(listPatient: patient[]): number {
    let countDischargedPatients: number = 0;

    for (const list of listPatient) {
        if (!list.admitted) {
            countDischargedPatients++
        }
    }

    return countDischargedPatients;
}

function patientByDepartment(listPatient: patient[], dept: string): number {
    let countByDept: number = 0;

    for (const list of listPatient) {
        if (list.department === dept) {
            countByDept++
        }
    }

    return countByDept;
}

function highestBill(listPatient: patient[]): number {
    let highestBill: number = listPatient[0].bill;

    for (const list of listPatient) {
        if (list.bill > highestBill) {
            highestBill = list.bill;
        }
    }

    return highestBill;
}

function lowestBill(listPatient: patient[]): number {
    let lowestBill: number = listPatient[0].bill;

    for (const list of listPatient) {
        if (list.bill < lowestBill) {
            lowestBill = list.bill;
        }
    }

    return lowestBill;
}

function averageBill(listPatient: patient[]): number {
    let average: number = 0;
    let totalBill: number = 0;

    for (const list of listPatient) {
        totalBill += list.bill;
    }

    average = totalBill / listPatient.length

    return average;
}

function totalHospitalRevenue(listPatient: patient[]): number {
    let totalRevenue: number = 0;

    for(const list of listPatient){
        totalRevenue += list.bill
    }

    return totalRevenue;
}

function nameAdmittedPatients(listPatient: patient[]): string[] {
    let nameAdmitted: string[]=[];

    for(const list of listPatient){
        if(list.admitted){
            nameAdmitted.push(list.name)
        }
    }

    return nameAdmitted;
}

function printHospitalReport(listPatient: patient[]){

    console.log(`--- Hospital Report ---`);
    console.log(`Total Patients : ${patients.length}`);
    console.log(`Total Admitted Patients : ${admittedPatients(patients)}`);
    console.log(`Total Discharged Patients : ${dischargedPatients(patients)}`);

    console.log(`--- Patients in Each Departments ---`);
    console.log(`Pediatrics Dept : ${patientByDepartment(patients,"Pediatrics")}`);
    console.log(`Cardiology Dept : ${patientByDepartment(patients,"Cardiology")}`);
    console.log(`Orthopedics Dept : ${patientByDepartment(patients,"Orthopedics")}`);

    console.log(`Highest Hospital Bill : ${highestBill(patients)}`);
    console.log(`Lowest Hospital Bill : ${lowestBill(patients)}`);
    console.log(`Average Hospital Bill : ${averageBill(patients)}`);
    console.log(`Total Hospital Revenue : ${totalHospitalRevenue(patients)}`);
    console.log(`Names of Admitted Patients : ${nameAdmittedPatients(patients)}`);
}

printHospitalReport(patients);