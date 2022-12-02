import fs from 'fs/promises';
const data = await fs.readFile('day2-input.txt', 'utf-8');
const games = data.split('\n');
const isAGame = (game) => {
    if (game.length == 3 && game[1] == ' ') {
        const [player1, player2] = game.split(' ');
        return (['A', 'B', 'C'].includes(player1) && ['X', 'Y', 'Z'].includes(player2));
    }
    return false;
};
const outcomesWrongStrategy = {
    'A X': 3,
    'A Y': 6,
    'A Z': 0,
    'B X': 0,
    'B Y': 3,
    'B Z': 6,
    'C X': 6,
    'C Y': 0,
    'C Z': 3,
};
const outcomesCorrectStrategy = {
    'A X': 3,
    'A Y': 1,
    'A Z': 2,
    'B X': 1,
    'B Y': 2,
    'B Z': 3,
    'C X': 2,
    'C Y': 3,
    'C Z': 1,
};
const winOutcome = {
    X: 0,
    Y: 3,
    Z: 6,
};
const getGameScoreWrongStrategy = (game) => {
    if (isAGame(game)) {
        let score = 0;
        if (game in outcomesWrongStrategy) {
            score = score + game.charCodeAt(2) - 87;
            score = score + outcomesWrongStrategy[game];
        }
        return score;
    }
    return 0;
};
const getGameScoreCorrectStrategy = (game) => {
    if (isAGame(game)) {
        let score = 0;
        if (game in outcomesCorrectStrategy) {
            if (game[2] in winOutcome) {
                score = score + winOutcome[game[2]];
            }
            score = score + outcomesCorrectStrategy[game];
        }
        return score;
    }
    return 0;
};
const totalScoreWrongStrategy = games.reduce((acc, game) => {
    return acc + getGameScoreWrongStrategy(game);
}, 0);
const totalScoreCorrectStrategy = games.reduce((acc, game) => {
    return acc + getGameScoreCorrectStrategy(game);
}, 0);
console.log(totalScoreCorrectStrategy);
