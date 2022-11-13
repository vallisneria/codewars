function reverseWords(str) {
    return str.split(" ")
        .map((item) => item.reverse())
        .join(" ");
}

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}