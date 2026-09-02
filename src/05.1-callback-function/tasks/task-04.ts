import { log } from "node:console";
import { isDataView } from "node:util/types";

/**
 * An LMS stores assignment scores:
 */
const scores: number[] = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function processingScore(
    scores: number[],
    callback: (score: number) => void
): void {
    for (const item of scores) {
        const newScore = item + 5
        callback(newScore)

    }

}

function isPassed(score: number): void {
    if (score >= 70) {
        console.log(`Score : ${score.toString().padEnd(4)} : Passed `);

    }
}

function convertToGrade(score: number): void {
    if (score >= 90) {
        console.log(`Score : ${score.toString().padEnd(4)} | Grade : A`);
    } else if (score >= 80) {
        console.log(`Score : ${score.toString().padEnd(4)} | Grade : B`);
    } else if (score >= 70) {
        console.log(`Score : ${score.toString().padEnd(4)} | Grade : C`);
    } else {
        console.log(`Score : ${score.toString().padEnd(4)} | Grade : D`);
    }
}

function addBonusScore(score: number): void {
    const bonusScore = score + 5;
    console.log(`Original: ${score.toString().padEnd(4)} | Bonus (+5): ${bonusScore}`);
}

function checkPredicate(score: number): void {
    const category = score > 90 ? "Excellent" : "Reguler";
    console.log(`Score: ${score.toString().padEnd(4)} | Category: ${category}`);
}

console.log("=== 1. Check Passing Status ===");
processingScore(scores, isPassed);

console.log("\n=== 2. Convert to Grade ===");
processingScore(scores, convertToGrade);

console.log("\n=== 3. Add 5 Bonus Points ===");
processingScore(scores, addBonusScore);

console.log("\n=== 4. Check Predicate ===");
processingScore(scores, checkPredicate);