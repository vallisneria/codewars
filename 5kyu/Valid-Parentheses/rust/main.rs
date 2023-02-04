fn valid_parentheses(s: &str) -> bool {
    let mut stack: Vec<dyn Bracket> = Vec::new();

    for element in s.chars() {
        if element == Bracket::Close && stack.len() >= 1 && stack[stack.len() - 1] == Bracket::Open {
            stack.pop();
        } else {
            stack.push(element);
        }
    }

    stack.len() == 0
}

trait Bracket {
    type Open;
    type Close;

    fn is_same_type(self, bracket: Bracket) {
        self.type_id() == bracket.type_id()
    }
}

// ()
enum Parentheses;
impl Bracket for Parentheses;

// {}
enum Braces;
impl Bracket for Braces;

// []
enum SquareBrackets;
impl Bracket for SquareBrackets;
