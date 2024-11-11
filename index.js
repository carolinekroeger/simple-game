const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset");
let currentPlayer = "X";
let board = Array(9).fill(null);
let gameActive = true;


    if (checkWin()) {
        alert(`${currentPlayer} wins!`);
        gameActive = false;
    } else if (board.every(cell => cell)) {
        alert("It's a draw!");
        gameActive = false;
    } else {
        // Switch to the other player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }


// Function to check if there’s a winner
function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board = Array(9).fill(null);
    cells.forEach(cell => (cell.textContent = ""));
    currentPlayer = "X";
    gameActive = true;
}


cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);
