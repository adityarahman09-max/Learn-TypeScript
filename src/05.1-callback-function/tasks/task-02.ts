/**
 * Teacher has list of student score:
 */
const scores: number[] = [85, 72, 91, 64, 88];

/**
 * The teacher wants to process the scores in different ways.
 * One report should simply display each score:
 * 
 * Score: 85
 * Score: 72
 * Score: 91
 * ...
 * 
 * Second report should determine whether each student passed.
 * Third report should determine grade of score with rules below.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |

 * Instead of creating different looping functions, create one reusable 
 * function that receives the processing logic as a callback.
 */

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    for (const item of scores) {
        callback(item)

    }

}

function printScore(score: number) {
    console.log(`Score : ${score}`)
}

function checkPass(score: number): void {
    const status = score >= 70 ? "Passed" : "Failed";
    console.log(`Score ${score} is ${status}`);
}

function showGrade(score: number): void {

    let grade: string;

    if (score >= 90) {
        grade = "A"
    } else if (score >= 80) {
        grade = "B"
    } else if (score >= 70) {
        grade = "C"
    } else {
        grade = "D"
    }

    console.log(`Your Grade is ${grade}`)
}


// implementation of callback function
processScores(scores, printScore)
processScores(scores, showGrade)
processScores(scores, checkPass)

