const repeatString = function(text, num) {
    if (num < 0) {
        return "ERROR"
    }
    accumulator = "";
    for (let index = 0; index < num; index++) {
        accumulator += text;
    }
    return accumulator;
};

// Do not edit below this line
module.exports = repeatString;
