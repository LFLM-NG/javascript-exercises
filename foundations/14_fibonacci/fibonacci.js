const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) return `OOPS`;
    else if (num === 0) return 0;
    else if (num === 1 || num === 2) return 1;
    // return fibonacci(num - 1) + fibonacci(num - 2);
    else {
        let fibonacciNext = 1;
        let fibonacciPrev = 1;
        while (num > 2) {
            let fibonacciCurr = fibonacciNext;
            fibonacciNext += fibonacciPrev;
            fibonacciPrev = fibonacciCurr;
            num--;
        }
    return fibonacciNext;
    }
};

// Do not edit below this line
module.exports = fibonacci;
