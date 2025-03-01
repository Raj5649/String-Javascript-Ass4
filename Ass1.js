// Example usage
let S = "ADADaaDdAA";
console.log(countCharacters(S));

// Count the heads function
function countHeads(S) {
    let freq = {};
    for (let char of S) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    let result = Object.keys(freq).sort().map(char => freq[char] > 1 ? char + freq[char] : char).join("");
    return result;
}

// Example usage
let inputStr = "aabbccddeeffgghh";
console.log(countHeads(inputStr));
