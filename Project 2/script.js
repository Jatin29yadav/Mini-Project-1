let msg = document.querySelector(".randomText");
let inputArea = document.querySelector("#inputArea");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let result = document.querySelector(".result");
let wpm = document.querySelector(".wpm");
let accuracy = document.querySelector(".accuracy");

let sentence = "Typing is a skill which improves with practice";

let startTime;

startBtn.addEventListener("click", () => {
  msg.innerText = sentence;
  inputArea.value = "";
  inputArea.disabled = false;
  inputArea.focus();

  startTime = new Date().getTime();
});
stopBtn.addEventListener("click", () => {
  let endTime = new Date().getTime();
  let totalTimeInSec = (endTime - startTime) / 1000;

  let typedText = inputArea.value.trim();
  let wordCount = typedText.split(" ").filter((word) => word !== "").length;
  let speed = Math.round(wordCount / (totalTimeInSec / 60));
  wpm.innerText = `🚀 Typing speed: ${speed} words per minute`;

  let originalWords = sentence.split(" ");
  let typedWords = typedText.split(" ");

  let correct = 0;

  for (let i = 0; i < typedWords.length; i++) {
    if (typedWords === originalWords) {
      correct++;
    }
  }
  let accuracyPercentage = Math.round((correct / originalWords.length) * 100);
  accuracy.innerText = `🎯 Accuracy: ${accuracyPercentage}%`;

  inputArea.disabled = true;
});
