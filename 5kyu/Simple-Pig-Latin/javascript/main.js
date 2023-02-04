function pigIt(str) {
    return str.split(' ')
        .map(word => word.replace(/^(\w{1,1})(\w*)/, "$2$1ay"))
        .join(' ');
}