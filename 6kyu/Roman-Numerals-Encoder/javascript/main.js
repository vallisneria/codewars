function solution(number) {
    const ROMAN = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];
    let result = '';

    for (let i = 0; i <= Math.log10(number); i++) {
        let digit = Math.floor(number / 10 ** i) % 10;
        let digit_ = digit >= 5 ? digit - 5 : digit;
        let digit_is_nine = digit === 9 ? 1 : 0;

        result = `${digit_ === 4 ? ROMAN[i][0] : ''}`
            + `${digit >= 4 ? ROMAN[i + digit_is_nine][1 - digit_is_nine] : ''}`
            + `${digit_ !== 4 ? ROMAN[i][0].repeat(digit_) : ''}` + result;
    }

    return result;
}