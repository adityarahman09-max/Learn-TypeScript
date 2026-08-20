/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let highestScore: number = 0;

  for (const score of scores) {
    if (score > highestScore) {
      highestScore = score;
    } else {
      highestScore;
    }
  }

  return highestScore
}

function findLowestScore(scores: number[]): number {
  let lowestScore: number = scores[0];

  for (const score of scores) {
    if (score < lowestScore)
      lowestScore = score;
  }

  return lowestScore;
}

function calculateAverage(scores: number[]): number {
  let averageScore: number = 0;
  let totalScore = 0;

  for(const score of scores){
    totalScore += score;
  }

  averageScore = totalScore * scores.length;

  return averageScore;
}

function countPassedStudents(scores: number[]): number {
  let countPassed : number = 0;

  for(const score of scores){
    if(score >75){
      countPassed ++
    }
  }

  return countPassed;
}

findHighestScore(scores);
findLowestScore(scores);
calculateAverage(scores);
countPassedStudents(scores);

