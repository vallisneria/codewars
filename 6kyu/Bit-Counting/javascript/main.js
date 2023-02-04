var countBits = function(n) {
    if (n === 0) return 0;
    
    let answer = 1;
    while (n !== 1) {
        answer += n % 2;
        n = (n - (n % 2)) / 2;
    }

    return answer;
};
