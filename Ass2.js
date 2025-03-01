function Count_Vowel(S) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    
    for (let char of S) {
        if (vowels.has(char)) {
            count++;
        }
    }
    
    return count;
}

// Example Usage
let S = "Hello World";
console.log(Count_Vowel(S)); // Output: 3