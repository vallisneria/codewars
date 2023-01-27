function isPangram(string) {
    return string.toLowerCase()
        .split('')
        .filter(char => char.match(/[a-z]/))
        .map(char => char.charCodeAt(0) - 97)
        .reduce((alphabet_exist, char_code) => {
            alphabet_exist[char_code] ??= true;
            return alphabet_exist;
        }, new Array(26))
        .filter(exist => exist === true)
        .length === 26;
}
