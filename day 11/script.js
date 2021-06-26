const questionsArray = [{
        que: "Question 1: For which of the following disciplines is Nobel Prize awarded?",
        option1: "A. Physics and Chemistry",
        option2: "B. Physiology or Medicine",
        option3: "C. Literature, Peace and Economics",
        option4: "D. All of the above",
        ans: "D. All of the above",
    },
    {
        que: "Question 2: Galileo was an Italian astronomer who",
        option1: "A. developed the telescope",
        option2: "B. discovered four satellites of Jupiter",
        option3: "C. discovered that the movement of pendulum produces a regular time measurement",
        option4: "D. All of the above",
        ans: "D. All of the above",
    },
    {
        que: "Question 3: Fire temple is the place of worship of which of the following religion?",
        option1: "A. Hinduism",
        option2: "B. Judaism",
        option3: "C. Zoroastrianism (Parsi Religion)",
        option4: "D. Shintoism",
        ans: "C. Zoroastrianism (Parsi Religion)",
    },
    {
        que: "Question 4: Guru Gobind Singh was",
        option1: "A. the 10th Guru of the Sikhs",
        option2: "B. founder of Khalsa, the inner council of the Sikhs in 1699",
        option3: "C. author of Dasam Granth",
        option4: "D. All the above",
        ans: "D. All the above",
    }
];
const quesLen = questionsArray.length;
const question = document.querySelector(".question-h1");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const options = document.querySelectorAll(".options");

let questionsCount = -1;
let validAnswer = "";
let score = 0;
let currentQuestion = {};

let render = () => {
    questionsCount++;
    currentQuestion = questionsArray[questionsCount];
    question.innerHTML = currentQuestion.que;
    option1.innerHTML = currentQuestion.option1;
    option2.innerHTML = currentQuestion.option2;
    option3.innerHTML = currentQuestion.option3;
    option4.innerHTML = currentQuestion.option4;
};
let flag = false;
options.forEach((option) => {
    option.addEventListener("click", (e) => {
        if (!flag) {
            if (e.target.innerHTML === currentQuestion.ans) {
                e.target.classList.add("correct");
                score++;
            } else {
                if (!e.target.classList.contains("correct")) {
                    e.target.classList.add("wrong");
                }
            }
            flag = true;
        }
    });
});
render();
let submitClicked = 1;
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", () => {
    flag = false;
    submitClicked++;
    if (submitClicked > quesLen) {
        alert(`You scored ${score} right answers.`);
        location.reload();
    }
    options.forEach((option) => {
        option.classList.remove("correct");
        option.classList.remove("wrong");
    });
    render();
});