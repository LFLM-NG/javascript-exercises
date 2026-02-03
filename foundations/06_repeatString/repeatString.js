const repeatString = function(str, num) {
    if (num < 0) return `ERROR`;
    let i = 0, finalStr = ``;
    while (i < num) {
        finalStr += str;
        i++;
    }
    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
