let msg = document.querySelector('.msg');
let buttons = document.querySelectorAll('.btn');
let newButton = document.querySelector('.btn-game');
let restartButton = document.querySelector('.btn-reset');

let turn = true; // O ki turn

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Button click
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn) {
            btn.innerText = "O";
            btn.style.backgroundColor = "#4c5c68";
            btn.style.color = "#fff";
            turn = false;
        } else {
            btn.innerText = "X";
            btn.style.backgroundColor = "#9db4c0";
            btn.style.color = "#000";
            turn = true;
        }
        btn.disabled = true;

        checkWinner();
    });
});

// Disable all buttons
const disableButtons = () => {
    buttons.forEach((btn) =>
        btn.disabled = true
    );
};

// Enable + Reset buttons
const enableButtons = () => {
    buttons.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
        btn.style.backgroundColor = "";  // color reset
        btn.style.color = "";
    });
};

// Show Winner
const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations Winner is ${winner}`;
    msg.classList.remove("hide");
    disableButtons();
};

// Check Winner
const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

// Reset Game
const resetGame = () => {
    turn = true;
    enableButtons();
    msg.classList.add("hide");
    msg.innerText = "";

};

restartButton.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);