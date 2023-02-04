var lastDigit = function (str1, str2) {
    if (str2 == 0) { return 1; }

    const DIGIT_REPEAT = [
        [0], [1], [6, 2, 4, 8],
        [1, 3, 9, 7], [6, 4], [5], [6],
        [1, 7, 9, 3], [6, 8, 4, 2], [1, 9]
    ];

    let last_digit_of_base = parseInt(str1.slice(-1));
    let last_2_digit_of_exp = parseInt(str2.slice(-2));
    let i = last_2_digit_of_exp % DIGIT_REPEAT[last_digit_of_base].length;

    return DIGIT_REPEAT[last_digit_of_base][i];
}