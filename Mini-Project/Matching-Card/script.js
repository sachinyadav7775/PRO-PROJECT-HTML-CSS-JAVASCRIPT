const button = document.querySelectorAll('.btns');
const times = document.getElementById('set-time');
const playButton = document.getElementById('play-btn');
const resetButton = document.getElementById('rst-btn');

const icons = [
    "fa-node",
    "fa-java",
    "fa-react",
    "fa-linux",
    "fa-figma",
    "fa-github",
    "fa-python",
    "fa-angular",
];

let gameIcons = [...icons , ...icons]
.sort(() => 0.5 * Math.random());

// Assign each button a random icon from gameIcons
button.forEach((btns, index) => {
    btns.dataset.icon = gameIcons[index]; // store icon in data attribute
});

// Add click event to show icon
button.forEach((btns) => {
    btns.addEventListener("click", () => {
        // Flip the card visually
        btns.classList.add('flipped');

        // Show the icon using Font Awesome
        btns.innerHTML = `<i class="fa-brands ${btns.dataset.icon}"></i>`;
    });
});