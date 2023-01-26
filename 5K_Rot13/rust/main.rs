fn rot13(message: &str) -> String {
    let rot_bytes: Vec<u8> = message
        .as_bytes()
        .iter()
        .map(|x| match x {
            b'a'..=b'm' => x + 13,
            b'A'..=b'M' => x + 13,
            b'n'..=b'z' => x - 13,
            b'N'..=b'Z' => x - 13,
            _ => *x,
        })
        .collect::<Vec<u8>>();

    std::str::from_utf8(&rot_bytes).unwrap().to_string()
}

#[cfg(test)]
mod tests {
    use super::rot13;

    const ERR_MSG: &str = "\nYour result (left) did not match the expected output (right)";

    fn dotest(s: &str, expected: &str) {
        assert_eq!(rot13(s), expected, "{ERR_MSG} with message = \"{s}\"")
    }

    #[test]
    fn sample_tests() {
        dotest("test", "grfg");
        dotest("Test", "Grfg");
    }
}
