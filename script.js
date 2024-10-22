const roundsInput = document.getElementById('rounds');
const startButton = document.getElementById('start');
const gameContainer = document.getElementById('game-container');

startButton.addEventListener('click', () => {
    const rounds = parseInt(roundsInput.value);
    generateNumbers(rounds);
});

function generateNumbers(rounds) {
    gameContainer.innerHTML = '';
    for (let i = 1; i <= rounds; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = i;
        box.addEventListener('click', () => {
            box.classList.add('crossed');
        });
        gameContainer.appendChild(box);
    }
}
// ==========
