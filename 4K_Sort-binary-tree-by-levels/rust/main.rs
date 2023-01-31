mod preloaded;
use preloaded::Node;
use std::collections::VecDeque;

fn tree_by_levels(root: &Node) -> Vec<u32> {
    let mut visited_val: Vec<u32> = Vec::new();
    let mut visit_queue: VecDeque<&Node> = VecDeque::new();
    visit_queue.push_back(root);

    while visit_queue.len() > 0 {
        let visit = visit_queue.pop_front().unwrap();
        visited_val.push(visit.value);
        
        match &visit.left {
            Some(x) => visit_queue.push_back(&x),
            None => (),
        }

        match &visit.right  {
            Some(x) => visit_queue.push_back(&x),
            None => (),
        }
    }

    visited_val
}
