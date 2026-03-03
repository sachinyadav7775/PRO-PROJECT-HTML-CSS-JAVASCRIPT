const button = document.querySelectorAll('.btns');
const times = document.getElementById('#set-time');
const playButton = document.getElementById('#play-btn');
const resetButton = document.getElementById('#rst-btn');

const icons = [
    "fa-node",
    "fa-java",
    "fa-react",
    "fa-linux",
    "fa-figma",
    "fa-github",
    "fa-angular",
    "fa-database",
];

let gameIcons = [...icons , ...icons]