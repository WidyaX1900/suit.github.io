const playerAtkBtnEl = document.getElementsByClassName("player-attack-button");
const playerAtkBtnArr = Array.from(playerAtkBtnEl);
const playerSelect = document.getElementById("playerSelect");
const enemySelect = document.getElementById("enemySelect");
const playerReady = document.getElementById("playerReady");
const gameResultTxt = document.getElementById("gameResult");
const playerScoreTxt = document.getElementById("playerScore");
const enemyScoreTxt = document.getElementById("enemyScore");
const replayButton = document.getElementById("replayButton");
const replayContainer = document.getElementById("replayContainer");

let playerChoice = 0;
let enemyChoice = 0;
let playerScore = 0;
let enemyScore = 0;
let gameResult = '';

/* 
  ROCK, PAPER, SCISSOR NUMBER LABEL:
  1 = Paper
  2 = Rock
  3 = Scissor 
*/

const enemyChoiceImg = [
  "img/player2-paper.png", 
  "img/player2-rock.png", 
  "img/player2-scissor.png", 
];

playerAtkBtnArr.forEach((playerAtkBtn, index) => {
  playerAtkBtn.addEventListener("click", (event) => {
    playerSelect.parentElement.classList.remove("hidden");
    playerReady.classList.add("hidden");
    replayContainer.classList.remove("hidden");

    enemySelect.classList.remove("hidden");
    enemySelect.parentElement.classList.remove("opening");
    enemySelect.nextElementSibling.classList.add("hidden");

    let btnImage = playerAtkBtn.getElementsByTagName("img")[0];
    playerSelect.setAttribute("src", btnImage.src);

    const selectAttribute = playerSelect.getAttribute("src").split("/");
    const fileName = selectAttribute[4];

    if (fileName == "player1-rock.png") {
      playerSelect.classList.add("img-rock");
    } else {
      if (playerSelect.classList.contains("img-rock")) {
        playerSelect.classList.remove("img-rock");
      }
    }

    playerChoice = index + 1;
    enemyChoice = Math.floor((Math.random() * 3) + 1);

    if(playerChoice === enemyChoice) {
      gameResult = "draw";
    } else if
    (
      enemyChoice == 1 && playerChoice == 2 ||
      enemyChoice == 2 && playerChoice == 3 ||
      enemyChoice == 3 && playerChoice == 1
    ) {
      gameResult = "lose"
      enemyScore++;
    } else {
      gameResult = "win";
      playerScore++;
    }
    
    enemySelect.setAttribute("src", enemyChoiceImg[enemyChoice - 1]);
    playerScoreTxt.innerText = playerScore;
    enemyScoreTxt.innerText = enemyScore;
    gameResultTxt.innerText = gameResult.toUpperCase();
  });
});

replayButton.addEventListener("click", (event) => {
  playerSelect.parentElement.classList.add("hidden");
  playerReady.classList.remove("hidden");
  replayContainer.classList.add("hidden");

  enemySelect.classList.add("hidden");
  enemySelect.parentElement.classList.add("opening");
  enemySelect.nextElementSibling.classList.remove("hidden");

  gameResultTxt.innerText = "R E A D Y";
})
