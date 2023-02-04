function findMissingLetter(array) {
    array = array.map(item => item.charCodeAt(0));
    let arr_sum_expected = (array[0] + array[array.length - 1]) * (array.length + 1) / 2;
    let arr_sum_real = array.reduce((acc, cur) => acc + cur, 0);

    return String.fromCharCode(arr_sum_expected - arr_sum_real);
}
