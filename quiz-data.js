// Quiz problem sets for each shape
const quizProblems = {
    drachen: [
        { e: 12, f: 8, answer: 48 },
        { e: 10, f: 6, answer: 30 },
        { e: 14, f: 10, answer: 70 },
        { e: 16, f: 12, answer: 96 },
        { e: 8, f: 10, answer: 40 },
        { e: 18, f: 6, answer: 54 },
        { e: 20, f: 8, answer: 80 },
        { e: 15, f: 10, answer: 75 },
        { e: 12, f: 14, answer: 84 },
        { e: 10, f: 16, answer: 80 }
    ],
    
    parallelogramm: [
        { a: 15, h: 6, answer: 90 },
        { a: 12, h: 5, answer: 60 },
        { a: 10, h: 8, answer: 80 },
        { a: 18, h: 4, answer: 72 },
        { a: 20, h: 7, answer: 140 },
        { a: 14, h: 6, answer: 84 },
        { a: 16, h: 5, answer: 80 },
        { a: 12, h: 9, answer: 108 },
        { a: 25, h: 4, answer: 100 },
        { a: 8, h: 10, answer: 80 }
    ],
    
    rhombus: [
        { e: 10, f: 14, answer: 70 },
        { e: 8, f: 12, answer: 48 },
        { e: 12, f: 10, answer: 60 },
        { e: 16, f: 8, answer: 64 },
        { e: 14, f: 12, answer: 84 },
        { e: 6, f: 16, answer: 48 },
        { e: 18, f: 10, answer: 90 },
        { e: 10, f: 18, answer: 90 },
        { e: 20, f: 6, answer: 60 },
        { e: 12, f: 16, answer: 96 }
    ]
};

// Current problem indices
let currentProblems = {
    drachen: 0,
    parallelogramm: 0,
    rhombus: 0
};

// Get current problem for a shape
function getCurrentProblem(shape) {
    return quizProblems[shape][currentProblems[shape]];
}

// Get next problem for a shape
function getNextProblem(shape) {
    currentProblems[shape] = (currentProblems[shape] + 1) % quizProblems[shape].length;
    return getCurrentProblem(shape);
}
