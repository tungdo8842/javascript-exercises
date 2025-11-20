const sumAll = function(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return "ERROR";
    }
    if (a % 1 != 0 || b % 1 != 0) {
        return "ERROR";
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    // swap if b < a
    if (b < a) {
        b = a + b;
        a = b - a;
        b = b - a;
    }
    let sum = 0
    for (let num = a; num <= b; num++) {
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
