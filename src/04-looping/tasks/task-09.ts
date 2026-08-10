/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

type student = {
    name: string;
    score: number;
}

const students : student[] = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let aStudent : number = 0;
let bStudent : number = 0;
let cStudent : number = 0;
let dStudent : number = 0;
let highestScore : number = 0;
let lowestScore : number = 0;
let averageScore : number = 0;
let totalScore : number = 0;


for (const amount of students){
    
    totalScore += amount.score;

    if(amount.score <= 100 && amount.score >= 90){
        aStudent++;
    }else if(amount.score < 90 && amount.score >= 80){
        bStudent++;
    }else if(amount.score < 80 && amount.score >=70){
        cStudent++;
    }else{
        dStudent++;
    }

    if(amount.score > highestScore){
        highestScore = amount.score;
    }

    if(amount.score < lowestScore){
        lowestScore = amount.score;
    }
}

averageScore = totalScore / students.length;

console.log(`Number A Student : ${aStudent}`);
console.log(`Number B Student : ${bStudent}`);
console.log(`Number C Student : ${cStudent}`);
console.log(`Number D Student : ${dStudent}`);
console.log(`Highest Score : ${highestScore}`);
console.log(`Lowest Score : ${lowestScore}`);
console.log(`Average Score : ${averageScore}`);

