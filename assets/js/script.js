// Variables
let numberOfTurns;
let gamesNumberOfTurn;
let gameOrder = [];
let playerOrder = [];
let isGood;
let gamesGo = true;
let pause;
let hasWon;
let runHiScore = 0;
let savedHiScore = localStorage.getItem("hiScore");
let darkRed = "#b83f34";
let darkGreen = "#47a645";
let darkBlue = "#3d6dbc";
let darkYellow = "#b9bc31";
let lightRed = "#ff1500";
let lightGreen = "#3cff38";
let lightBlue = "#00a4ff";
let lightYellow = "#faff2b";
let speed = 800;

//Constants
const topLeft = document.getElementById("top-left");
const bottomLeft = document.getElementById("bottom-left");
const topRight = document.getElementById("top-right");
const bottomRight = document.getElementById("bottom-right");
const startButton = document.getElementById("start");
const hiScore = document.getElementById("hi-score-box");
const counter = document.getElementById("count");
const soundOne = new Audio("assets/sounds/1.mp3"); 
const soundTwo = new Audio("assets/sounds/2.mp3"); 
const soundThree = new Audio("assets/sounds/3.mp3"); 
const soundFour = new Audio("assets/sounds/4.mp3"); 
const soundEnd = new Audio("assets/sounds/end.mp3"); 
const soundWin = new Audio("assets/sounds/win.mp3"); 
const easyLevel = document.getElementById("easy");
const normalLevel = document.getElementById("normal");
const hardLevel = document.getElementById("hard");

//Event handlers
startButton.addEventListener("click", startGame);

easyLevel.addEventListener('click', (event) => {
  speed = 800;
  easyLevel.style.backgroundColor = "#4db74a";
  easyLevel.style.color = "#000";
  normalLevel.style.backgroundColor = "#000";
  normalLevel.style.color = "#ff9800";
  hardLevel.style.backgroundColor = "#000";
  hardLevel.style.color = "#f44336";
});

normalLevel.addEventListener('click', (event) => {
  speed = 400;
  easyLevel.style.backgroundColor = "#000";
  easyLevel.style.color = "#4db74a";
  normalLevel.style.backgroundColor = "#ff9800";
  normalLevel.style.color = "#000";
  hardLevel.style.backgroundColor = "#000";
  hardLevel.style.color = "#f44336";
});

hardLevel.addEventListener('click', (event) => {
  speed = 300;
  easyLevel.style.backgroundColor = "#000";
  easyLevel.style.color = "#4db74a";
  normalLevel.style.backgroundColor = "#000";
  normalLevel.style.color = "#ff9800";
  hardLevel.style.backgroundColor = "#f44336";
  hardLevel.style.color = "#000";
});

topLeft.addEventListener('click', (event) => {
  if(!gamesGo) {
    playerOrder.push(1);
    check();
    red();
    if(hasWon == false) {
      setTimeout(() => {
      resetColors();
      }, 300);
    }
  }
})

topRight.addEventListener('click', (event) => {
  if(!gamesGo) {
    playerOrder.push(2);
    check();
    green();
    if(hasWon == false) {
      setTimeout(() => {
      resetColors();
      }, 300);
    }
  }
})

bottomLeft.addEventListener('click', (event) => {
  if(!gamesGo) {
    playerOrder.push(3);
    check();
    blue();
    if(hasWon == false) {
      setTimeout(() => {
      resetColors();
      }, 300);
    }
  }
})

bottomRight.addEventListener('click', (event) => {
  if(!gamesGo) {
    playerOrder.push(4);
    check();
    yellow();
    if(hasWon == false) {
      setTimeout(() => {
      resetColors();
      }, 300);
    }
  }
  })

//Functions
function startGame() {
  gameOrder = [];
  playerOrder = [];
  numberOfTurns = 0;
  hasWon = false;
  pause = 0;
  gamesNumberOfTurn = 1;
  counter.innerHTML = gamesNumberOfTurn;
  isGood = true;
  for (var i = 0; i < 20; i++)   {
    gameOrder.push(Math.floor(Math.random() * 4) + 1);
  }
  gamesGo = true;
  speed = 800;
  pause = setInterval(gameTurn, 800);
  easyLevel.style.backgroundColor = "#4db74a";
  easyLevel.style.color = "#000";
  normalLevel.style.backgroundColor = "#000";
  normalLevel.style.color = "#ff9800";
  hardLevel.style.backgroundColor = "#000";
  hardLevel.style.color = "#f44336";
  if (savedHiScore)  {
    runHiScore = savedHiScore;
  }
  setHiScore();
}

function gameTurn() {
  if (numberOfTurns == gamesNumberOfTurn)   {
    clearInterval(pause);
    resetColors();
    gamesGo = false;
  }
  if (gamesGo)   {
    resetColors();
    setTimeout(() => {
      if (gameOrder[numberOfTurns] == 1) 
        red();
      if (gameOrder[numberOfTurns] == 2) 
        green();
      if (gameOrder[numberOfTurns] == 3) 
        blue();
      if (gameOrder[numberOfTurns] == 4) 
        yellow();
      numberOfTurns++;
      }, 200);
  }
  setHiScore();
}

function red() {
  topLeft.style.backgroundColor = lightRed;
  soundOne.play();
}

function green() {
  topRight.style.backgroundColor = lightGreen;
  soundTwo.play();
}

function blue() {
  bottomLeft.style.backgroundColor = lightBlue;
  soundThree.play();
}

function yellow() {
  bottomRight.style.backgroundColor = lightYellow;
  soundFour.play();
}

function resetColors() {
  topLeft.style.backgroundColor = darkRed;
  topRight.style.backgroundColor = darkGreen;
  bottomLeft.style.backgroundColor = darkBlue;
  bottomRight.style.backgroundColor = darkYellow;
}

function flashColors() {
  topLeft.style.backgroundColor = lightRed;
  topRight.style.backgroundColor = lightGreen;
  bottomLeft.style.backgroundColor = lightBlue;
  bottomRight.style.backgroundColor = lightYellow;
  soundEnd.play();
}

function check() {
  if (playerOrder[playerOrder.length - 1] !== gameOrder[playerOrder.length - 1])  {
    isGood = false;
  }
  if (isGood && playerOrder.length == 20)   {
    winGame();
  }
  if (isGood == false)  {
    flashColors();
    setHiScore();
    if (confirm( "Would you like to play again?" )) {
      startGame();
    } else {
      flashColors();
      gamesGo = true;
    }
  }
  if (gamesNumberOfTurn == playerOrder.length && !hasWon && isGood)   {
    gamesNumberOfTurn++;
    playerOrder = [];
    gamesGo = true;
    numberOfTurns = 0;
    counter.innerHTML = gamesNumberOfTurn;
    pause = setInterval(gameTurn, speed);  
  }
}

function winGame() {
  flashColors();
  hasWon = true;
  setHiScore();
}

function setHiScore() {
  if (gamesNumberOfTurn > runHiScore) {
    runHiScore = gamesNumberOfTurn;
    hiScore.innerHTML = runHiScore;
    savedHiScore = runHiScore;
    localStorage.setItem("hiScore", runHiScore);
  }
  else {
    hiScore.innerHTML = runHiScore;
  }
}