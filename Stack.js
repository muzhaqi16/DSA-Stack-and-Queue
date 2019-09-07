class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        if (node !== null) {
            this.top = node.next;
            return node.data;
        }
        return null
    }
}
peek = (stack) => {
    return stack.top.data
}
isEmpty = (stack) => {
    return stack.top == null ? true : false;
}
display = (stack) => {
    let node = stack.top;
    while (node !== null) {
        console.log(node.data)
        node = node.next
    }
}
main = () => {
    const starTrek = new Stack();
    console.log('Is the stack empty in the begginning:', isEmpty(starTrek))
    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')
    display(starTrek)
    console.log('Is the stack empty after inserting some data:', isEmpty(starTrek))
    console.log('Get the item on the top of the stack:', peek(starTrek))
    starTrek.pop()
    starTrek.pop()
    display(starTrek)
}
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const reverse = new Stack();
    [...s].forEach(c => reverse.push(c))
    let palindrome = []
    let char = reverse.pop()
    while (char !== null) {
        palindrome.push(char)
        char = reverse.pop()
    }

    return s === palindrome.join("") ? true : false
}
is_palindrome('dad')
is_palindrome('Artan')