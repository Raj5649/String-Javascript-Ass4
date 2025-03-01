// Q10. Match the Strings
function String_Match(S1, S2) {
    return S1 === S2 ? "YES" : "NO";
}

// Q11. String Replace
function Replace(S, pattern, text) {
    return S.replace(new RegExp(pattern, 'g'), text);
}

// Q12. Split the String
function Split_the_String(S) {
    return S.split(' ');
}

// Q13. Count the Vowels and Consonants
function Count_Vowels(S) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    for (let char of S) {
        if (vowels.has(char)) count++;
    }
    return count;
}

function Count_Consonants(S) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    for (let char of S) {
        if (char.match(/[a-zA-Z]/) && !vowels.has(char)) count++;
    }
    return count;
}
