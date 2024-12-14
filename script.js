const player1Section = document.getElementById("player1-section");
const player2Section = document.getElementById("player2-section");
const player1Img = document.getElementById("player1-img");
const player2Img = document.getElementById("player2-img");
const player1ScoreEl = document.getElementById("player1-score");
const player2ScoreEl = document.getElementById("player2-score");
const turnIndicator = document.getElementById("turn-indicator");
const roundBg1 = document.getElementById("round-cir-1");
const roundBg2 = document.getElementById("round-cir-2");
const btnReset = document.getElementById("btn-reset");

let playerScores = [0, 0];
let currentPlayer = 0;
let rounds = 3;
let currentRound = 0;

        function roll() {
            let randomNum = Math.floor(Math.random() * 6) + 1;

            if (currentPlayer === 0) {
                player1Img.setAttribute("src", `Assets/${randomNum}.png`);
                playerScores[0] += randomNum;
                player1ScoreEl.textContent = `Score: ${playerScores[0]}`;
                
                currentPlayer = 1;
                turnIndicator.textContent = "Player 2's Turn";
                highlightPlayer();
            } else {
                player2Img.setAttribute("src", `Assets/${randomNum}.png`);
                playerScores[1] += randomNum;
                player2ScoreEl.textContent = `Score: ${playerScores[1]}`;            
                currentPlayer = 0;
                turnIndicator.textContent = "Player 1's Turn";
                highlightPlayer();
                currentRound++;
            }

            if (currentRound === 1){
                roundBg1.classList.add("bg-round");
            } else if(currentRound ===2){
                roundBg2.classList.add("bg-round");
            }

            if (currentRound === rounds) {
                declareWinner();
            }
        }

        function animation() {
            if (currentPlayer === 0) {
                player1Img.setAttribute("src", "Assets/dice-game.gif");
            } else {
                player2Img.setAttribute("src", "Assets/dice-game.gif");
            }
            setTimeout(roll, 500);
        }


        function declareWinner() {
            let winnerText;
            if (playerScores[0] > playerScores[1]) {
                winnerText = "Player 1 Wins!";
            } else if (playerScores[1] > playerScores[0]) {
                winnerText = "Player 2 Wins!";
            } else {
                winnerText = "It's a Tie!";
            }

            turnIndicator.textContent = `${winnerText}`;

            // hide button after the game ends
            document.getElementById("btn-roll").style.display= "none";

            // Show reset button
            btnReset.style.display = "block";
        }

        function resetGame() {
            playerScores = [0, 0];
            currentPlayer = 0;
            currentRound = 0;
            player1Img.setAttribute("src", "Assets/1.png");
            player2Img.setAttribute("src", "Assets/1.png");
            player1ScoreEl.textContent = "Score: 0";
            player2ScoreEl.textContent = "Score: 0";
            turnIndicator.textContent = "Player 1's Turn";
            document.getElementById("btn-roll").style.display= "block";
            btnReset.style.display = "none";
            highlightPlayer();
            roundBg1.classList.remove("bg-round");
            roundBg2.classList.remove("bg-round");
        }

        function highlightPlayer() {
            if (currentPlayer === 0) {
                player1Section.classList.add("active");
                player2Section.classList.remove("active");

            } else {
                player2Section.classList.add("active");
                player1Section.classList.remove("active");
            }
        }

        highlightPlayer();