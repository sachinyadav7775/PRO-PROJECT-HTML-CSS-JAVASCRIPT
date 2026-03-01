let gameDraw = 0;
let Humanscore = 0;
let Compuscore = 0;

const msg = document.querySelector("#message");
const Choices = document.querySelectorAll(".circle");
const Restart = document.querySelector("#restart-btn");
const Drawscoreboard = document.querySelector("#draw-score");
const Humanscoreboard = document.querySelector("#user-score");
const Computerscoreboard = document.querySelector("#comp-score");

// Corrected computer choice generator
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]; 
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

// Draw message
const drawGame = () => {
    // console.log("Game Was Draw.");
    msg.innerHTML = "Game Was Draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
    gameDraw++;
    Drawscoreboard.innerHTML = gameDraw;
}

// Show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        // console.log("You Win");
        msg.innerHTML = `You Winner! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "springgreen";
        msg.style.color = "black";
        Humanscore++;
        Humanscoreboard.innerHTML = Humanscore;
    } else {
        // console.log("You Lose");
        msg.innerHTML = `You Lose ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "#fff";
        Compuscore++;
        Computerscoreboard.innerHTML = Compuscore;
    }
}

// Main game logic
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else if(userChoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Event listeners
Choices.forEach((circle) => {
    circle.addEventListener("click", () => {
        const userChoice = circle.getAttribute("id").toLowerCase(); // make sure it's lowercase
        playGame(userChoice);
    });
});

const Restartgame = () => {
    // Reset scores
    gameDraw = 0;
    Humanscore = 0;
    Compuscore = 0;
    Drawscoreboard.innerHTML = gameDraw;
    Humanscoreboard.innerHTML = Humanscore;
    Computerscoreboard.innerHTML = Compuscore;

    // Reset message
    msg.innerHTML = "Play your move";
    msg.style.backgroundColor = "#252729";
    msg.style.color = "#fff";

};

Restart.addEventListener("click", Restartgame);