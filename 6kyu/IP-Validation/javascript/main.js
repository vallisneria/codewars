function isValidIP(str) {
    const element_valid = str.split('.')
        .map(n => /^\d{1,3}$/.test(n) && n >= 0 && n <= 255 && (!/^0+/.test(n) || n == 0))
        .reduce((acc, cur) => acc && cur);

    const ip_length_valid = str.split('.').length === 4;

    return element_valid && ip_length_valid;
}