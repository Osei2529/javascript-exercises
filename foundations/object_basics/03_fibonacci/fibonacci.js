const fibonacci = function(n) {
    let previous = 0;
    let current = 1;

    if (!Number.isInteger(n) || n < 1) return "OOPS";

    for(let i = 2; i <= n; i++) {
        let next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

// Do not edit below this line
module.exports = fibonacci;
