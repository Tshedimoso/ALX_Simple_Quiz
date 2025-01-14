
function checkAnswer() {
    
    const correctAnswer = "4";

    
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    
    const feedback = document.getElementById('feedback');


    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green"; // Set feedback color to green for correct answers
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red"; // Set feedback color to red for incorrect answers
    }
}


document.getElementById('submit-answer').addEventListener('click', checkAnswer);
