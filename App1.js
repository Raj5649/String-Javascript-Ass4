function Plain_Check(S) {
    let reversed = S.split('').reverse().join('');
    return S === reversed ? "True" : "False";
}