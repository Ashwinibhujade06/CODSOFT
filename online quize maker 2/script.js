(function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            answers: {
                a: "Berlin",
                b: "Madrid",
                c: "Paris"
            },
            correctAnswer: "c"
        },
        {
            question: "Which language is used for web development?",
            answers: {
                a: "Python",
                b: "JavaScript",
                c: "C++"
            },
            correctAnswer: "b"
        },
        {
            question: "What does CSS stand for?",
            answers: {
                a: "Cascading Style Sheets",
                b: "Creative Style Sheets",
                c: "Computer Style Sheets"
            },
            correctAnswer: "a"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizData.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label><br>`
                );
            }

            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizData.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();
