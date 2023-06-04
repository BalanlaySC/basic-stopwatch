const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let current = 0;
let paused = true;
let intervalId;
let millis = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
