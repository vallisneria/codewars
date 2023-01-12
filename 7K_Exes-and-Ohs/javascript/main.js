function XO(str) {
    return str.replace(/[^X]/gi, '').length === str.replace(/[^O]/gi, '').length
}