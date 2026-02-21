const questions = [
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Null", "Undefined", "Number", "Float"],
        answer: 3, // Index 3: "Float"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyper Tabular Markup Language",
            "None of these"
        ],
        answer: 0,
    },
    {
        question: "Which CSS property is used to control the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: 2,
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: 3,
    },
    {
        question: "What is the correct way to link an external CSS file?",
        options: [
            "<style src='style.css'>",
            "<link rel='stylesheet' href='style.css'>",
            "<css link='style.css'>",
            "<script src='style.css'>"
        ],
        answer: 1,
    }
];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next");
const scoreDisplay = document.getElementById("score-display");
const quizArea = document.getElementById("quiz-area");
const resultArea = document.getElementById("result-area");
const finalScoreText = document.getElementById("final-score");
const restartButton = document.getElementById("restart");

let currentQuestionIndex = 0;
let score = 0;
let hasAnsweredSelected = false;

function loadQuestion() {
    // Reset state
    hasAnsweredSelected = false;
    nextButton.style.display = "none";
    optionsContainer.innerHTML = "";

    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = option;
        button.addEventListener("click", () => selectAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex, selectedButton) {
    if (hasAnsweredSelected) return; // Prevent multiple clicks

    hasAnsweredSelected = true;
    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".btn");

    if (selectedIndex === currentQuestion.answer) {
        selectedButton.classList.add("correct");
        score++;
        scoreDisplay.innerText = `Score: ${score}`;
    } else {
        selectedButton.classList.add("wrong");
        // Highlight correct answer
        optionButtons[currentQuestion.answer].classList.add("correct");
    }

    // Disable all buttons
    optionButtons.forEach(btn => btn.disabled = true);

    // Show next button
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizArea.style.display = "none";
    resultArea.style.display = "flex";
    finalScoreText.innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = `Score: 0`;
    quizArea.style.display = "block";
    resultArea.style.display = "none";
    loadQuestion();
}

// Event Listeners
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

// Initialize Quiz
loadQuestion();