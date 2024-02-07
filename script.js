let ansUser = 0;
let a = document.querySelector("#ans1");
let ansComp = 0;
let b = document.querySelector("#ans2");
let userWin = true;

const choices = document.querySelectorAll(".choice");
let ans = document.querySelector("#msgg");

const playGame = (userChoice) => {
    console.log(`Your choice was ${userChoice}`);

    let array = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    let compChoice = array[idx];

    if (userChoice === compChoice) {
        ans.innerText = `It was a draw ${compChoice} and ${userChoice} are same`;
        console.log("It was a draw");
    } else {
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        if (userWin) {
            ans.innerText = `You Win, Your ${userChoice} beats Computer's ${compChoice}`;
            ansUser++;  // Corrected: Increment ansUser for user win
            a.innerText = ansUser;  // Corrected: Update the display for user wins
        } else {
            ans.innerText = `You lose Computers ${compChoice} beats your ${userChoice}`;
            ansComp++;  // Corrected: Increment ansComp for computer win
            b.innerText = ansComp;  // Corrected: Update the display for computer wins
        }
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
