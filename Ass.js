// Count occurrences of 'A' and 'D' in a string
function countCharacters(S) {
    let countA = 0;
    let countD = 0;
    
    for (let char of S) {
        if (char === 'A') countA++;
        if (char === 'D') countD++;
    }
    
    return [countA, countD];
}

// Example usage
let S = "ADADaaDdAA";
console.log(countCharacters(S));
