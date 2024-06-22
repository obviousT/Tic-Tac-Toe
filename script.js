let boxes = document.querySelectorAll('.btn');
let resetButton = document.querySelector('.reset');
let turn0 = true; 
let boxState = new Array(9).fill(null);

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (boxState[a] && boxState[a] === boxState[b] && boxState[a] === boxState[c]) {
            return boxState[a];
        }
    }
    if (boxState.every(box => box !== null)) {
        return 'Draw';
    }
    return null;
}

boxes.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (btn.innerText === "" && !checkWinner()) {
            if (turn0) {
                btn.innerText = "O";
                boxState[index] = 'O';
            } else {
                btn.innerText = "X";
                boxState[index] = 'X';
            }
            turn0 = !turn0;

            const winner = checkWinner();
            if (winner) {
                if (winner === 'Draw') {
                    document.getElementById('message').innerText = "It's a Draw";
                } else {
                    document.getElementById('message').innerText = `${winner} Won`;
                }
            }
        }
    });
});

resetButton.addEventListener('click', () => {
    boxState.fill(null);
    boxes.forEach(btn => btn.innerText = "");
    document.getElementById('message').innerText = "";
    turn0 = true;
});
