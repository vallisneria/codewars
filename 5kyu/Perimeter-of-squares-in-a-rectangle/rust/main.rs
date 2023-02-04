fn perimeter(n: u64) -> u64 {
    let fibo = fibo_sum(n + 1);
    4 * fibo
}

fn fibo_sum(n: u64) -> u64 {
    let mut stack: Vec<u64> = vec![];

    for i in 1..=n {
        let a = if a <= 2 {
            1
        } else {
            stack[stack.len() - 2] + stack[stack.len() - 1]
        }
        
        stack.push(a);
    }

    stack.iter().sum()
}