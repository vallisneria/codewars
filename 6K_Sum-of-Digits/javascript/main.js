function digitalRoot(n) {
    return n >= 10
        ? digitalRoot(n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0)) 
        : n;
}
