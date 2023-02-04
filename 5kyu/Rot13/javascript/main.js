function rot13(message) {
    return message.split('')
        .map(word => {
            if ((/[a-m]/gi).test(word)) {
                // is A~M or a~m
                return String.fromCharCode(word.charCodeAt(0) + 13);
            } else if ((/[n-z]/gi).test(word)) {
                // is N~Z or n~z
                return String.fromCharCode(word.charCodeAt(0) - 13);
            } else {
                // is not latin alphabet
                return word
            }
        }).join('');
}
