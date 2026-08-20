/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
}
const enrollments: enrollment[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

// Completion Statistic

function getTotalEnrollments(list: enrollment[]): number {
    return list.length;
}

function getCompletedEnrollments(list: enrollment[]): number {
    let count: number = 0;

    for (const item of list) {
        if (item.completed) {
            count++;
        }
    }

    return count;
}

function getIncompletedEnrollments(list: enrollment[]): number {

    return getTotalEnrollments(enrollments) - getCompletedEnrollments(enrollments);

}

function getCompletionPercentage(list: enrollment[]): number {

    return getCompletedEnrollments(enrollments) / getTotalEnrollments(enrollments) * 100;

}

// Academic Statistic

function getHighestScore(list: enrollment[]): number {
    let highest: number = list[0].score;

    for (const item of list) {
        if (item.score > highest) {
            highest = item.score;
        }
    }

    return highest;
}

function getLowestScore(list: enrollment[]): number {
    let lowest: number = list[0].score;

    for (const item of list) {
        if (item.score < lowest) {
            lowest = item.score;
        }
    }

    return lowest;
}

function getAverageScore(list: enrollment[]): number {
    let totalScore: number = 0;
    let average: number = 0;

    for (const item of list) {
        totalScore += item.score;
    }

    return average = totalScore / list.length;
}

function getStudentWithPassingScore(list: enrollment[]): number {
    let count: number = 0;

    for (const item of list) {
        if (item.score >= 75) {
            count++
        }
    }

    return count;
}

// Course Statistic

function getUniqueCourses(list: enrollment[]): string[] {
    return Array.from(new Set(list.map(item => item.course)));
}

function getEnrollmentsByCourse(list: enrollment[], courseName: string): enrollment[] {
    return list.filter(item => item.course === courseName);
}

function getNumberStudentEachCourse(list: enrollment[], courseName: string): number {
    return getTotalEnrollments(getEnrollmentsByCourse(list, courseName));
}

function getAverageInEachCourse(list: enrollment[], course: string): number {
    let totalScore: number = 0;
    let count: number = 0;

    for (const item of list) {
        if (item.course === course) {
            count++
            totalScore += item.score;
        }
    }

    let average: number = totalScore / count;
    return average;
}

// Learning Statistic

function getTotalLearningDuration(list: enrollment[]): number {
    let total: number = 0;

    for (const item of list) {
        total += item.duration
    }

    return total;
}

function getAverageLearningDuration(list: enrollment[]): number {

    return getTotalLearningDuration(enrollments) / list.length;

}

function printCourse(list: enrollment[]): void {
    const courses = getUniqueCourses(list);

    for (const course of courses) {
        const studentCount = getNumberStudentEachCourse(list, course);
        const averageCourse = getAverageInEachCourse(list, course);

        console.log(`Course : ${course}`);
        console.log(`Number of Student : ${studentCount}`);
        console.log(`Average : ${averageCourse.toFixed(2)}`);
        console.log(``)

    }
}

/**
 * VOID FUNCTION 2:
 * Mencetak keseluruhan dashboard statistik ke konsol
 */
function printDashboard(list: enrollment[]): void {
    console.log("=========================================");
    console.log("       ACADEMY DIRECTOR DASHBOARD        ");
    console.log("=========================================\n");

    console.log("=== COMPLETION STATISTICS ===");
    console.log(`Total Enrollments      : ${getTotalEnrollments(list)}`);
    console.log(`Completed Enrollments  : ${getCompletedEnrollments(list)}`);
    console.log(`Incomplete Enrollments : ${getIncompletedEnrollments(list)}`);
    console.log(`Completion Rate        : ${getCompletionPercentage(list).toFixed(2)}%\n`);

    console.log("=== ACADEMIC STATISTICS ===");
    console.log(`Highest Score          : ${getHighestScore(list)}`);
    console.log(`Lowest Score           : ${getLowestScore(list)}`);
    console.log(`Average Score          : ${getAverageScore(list).toFixed(2)}`);
    console.log(`Passing Students (>=75): ${getStudentWithPassingScore(list)}\n`);

    console.log("=== COURSE STATISTICS ===");
    printCourse(list);

    console.log("=== LEARNING STATISTICS ===");
    console.log(`Total Learning Hours   : ${getTotalLearningDuration(list)} hours`);
    console.log(`Average Learning Time  : ${getAverageLearningDuration(list).toFixed(2)} hours`);
    console.log("=========================================");
}

printDashboard(enrollments);