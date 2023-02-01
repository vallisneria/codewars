#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum Direction {
    North,
    East,
    West,
    South,
}

impl Direction {
    fn is_opposite(&self, direction: &Direction) -> bool {
        match self {
            Direction::North => *direction == Direction::South,
            Direction::East => *direction == Direction::West,
            Direction::West => *direction == Direction::East,
            Direction::South => *direction == Direction::North,
        }
    }
}

fn dir_reduc(arr: &[Direction]) -> Vec<Direction> {
    let mut stack: Vec<Direction> = Vec::new();

    for i in arr.iter() {
        if stack.len() > 0 && i.is_opposite(&stack[stack.len() - 1]) {
            stack.pop();
        } else {
            stack.push(*i);
        }
    }

    stack
}
