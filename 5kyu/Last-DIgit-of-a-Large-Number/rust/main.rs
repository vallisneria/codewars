fn last_digit(str1: &str, str2: &str) -> i32 {
    if str2 == "0" {
        return 1
    };

    let base: i32 = str1.split_at(str1.len() - 1).1.parse().unwrap();
    let exp: u32 = if str2.len() >= 2 {
        str2.split_at(str2.len() - 2).1.parse().unwrap()
    } else {
        str2.parse().unwrap()
    } % 4;

    let exp: u32 = if exp == 0 { 4 } else { exp };

    base.pow(exp) % 10
}