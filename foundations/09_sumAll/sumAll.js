const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) 
        && a >= 0 && b >= 0) {
            let sum = 0;
            if (a < b) {
                for (a; a <= b; a++) sum += a;
            } else {
                for (b; b <= a; b++) sum += b;
            }
            return sum;
    } else return `ERROR`; 
};

// Do not edit below this line
module.exports = sumAll;