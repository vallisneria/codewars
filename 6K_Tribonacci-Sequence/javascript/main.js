function tribonacci(signature, n) {
    while (signature.length < n) {
        const i = signature.length;
        let last_item = signature[i - 1] + signature[i - 2] + signature[i - 3];
        signature.push(last_item);
    }

    return signature.slice(0, n);
}