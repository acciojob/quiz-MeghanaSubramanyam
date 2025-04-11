//your JS code here. If required.
const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Lisbon",
    correct: "c"
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Earth",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "b"
  },
  {
    question: "What is 10 + 5?",
    a: "13",
    b: "14",
    c: "15",
    d: "16",
    correct: "c"
  },
  {
    question: "Who wrote 'Hamlet'?",
    a: "Charles Dickens",
    b: "William Shakespeare",
    c: "Jane Austen",
    d: "Mark Twain",
    correct: "b"
  }
];

let currentQuiz = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll("input[name='answer']");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentData = quizData[currentQuiz];
  questionEl.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach(el => el.checked = false);
}

submitBtn.addEventListener("click", () => {
  const selected = getSelected();

  if (selected) {
    if (selected === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Reload Quiz</button>
      `;
    }
  } else {
    alert("Please select an answer before submitting.");
  }
});
