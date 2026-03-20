let questions = [];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionEls = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

// Fetch questions from Python backend
fetch('http://127.0.0.1:5000/questions')
.then(res => res.json())
.then(data => {
    questions = data;
    loadQuestion();
});

function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.innerText = q.question;

    optionEls.forEach((btn, index) => {
        btn.innerText = q.options[index];
    });
}

optionEls.forEach(button => {
    button.addEventListener("click", () => {
        let selected = button.innerText;
        let correct = questions[currentQuestion].answer;

        if (selected === correct) {
            score++;
        }

        scoreEl.innerText = "Score: " + score;
    });
});

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Finished!";
        nextBtn.style.display = "none";
    }
});
