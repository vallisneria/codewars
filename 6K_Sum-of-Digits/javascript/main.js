function digitalRoot(n) {
    let result = n.toString()
        .split("")
        .map(i => Number(i))
        .reduce((acc, cur) => acc + cur, 0);

    return result >= 10 ? digitalRoot(result) : result;
}