function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }
  resetGameStatus();
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function resetGameStatus() {
  gameIsOver = false;
  activePlayer = 0;
  currentRound = 1;
  gameOverElement.firstElementChild.innerHTML =
    'You won! <span id="winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;

  // console.log(gameData);
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver === true) {
    return;
  }

  const selectField = event.target;
  const selectedColumn = selectField.dataset.col - 1;
  const selectedRow = selectField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerID = checkForGameOver();

  if (winnerID !== 0) {
    endGame(winnerID);
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  //checking rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][0] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //checking columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //Diagonal: Top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[0][0] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  //Diagonal: Bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[2][0] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerID) {
  gameIsOver = true;
  gameOverElement.style.display = "block";

  if (winnerID > 0) {
    const winnerName = players[winnerID - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.classList.add("disabled");
      gameBoardIndex++;
    }
  }
}
