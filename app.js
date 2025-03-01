function Game_Winner(S) {
    let countA = 0, countD = 0;
    for (let char of S) {
        if (char === 'A') countA++;
        else if (char === 'D') countD++;
    }
    if (countA > countD) return "Aditya";
    else if (countD > countA) return "Danish";
    return "Draw";
}