/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];
 
let goldMedal : number = 0;
let silverMedal : number = 0;
let bronzeMedal : number = 0;
let studentWithoutMedal : number = 0;
let averageCompetition: number = 0;
let totalscore : number = 0;

for (const amount of scores){

    totalscore += amount;

    if(amount >= 95){
        goldMedal ++;
    }else if(amount < 95 && amount >= 85){
        silverMedal ++;
    }else if(amount < 85 && amount >= 75){
        bronzeMedal ++;
    }else{
        studentWithoutMedal ++
    }
}

averageCompetition = totalscore / scores.length;

console.log(`Gold Medal : ${goldMedal}`);
console.log(`Silver Medal : ${silverMedal}`);
console.log(`Bronze Medal : ${bronzeMedal}`);
console.log(`Student Without No Medal : ${studentWithoutMedal}`);
console.log(`Average Competition : ${averageCompetition}`);
