const palindromes = function (str) {
    const strAlphaNumericArr = str
        .toLowerCase()
        .split(``)
        .filter(char => {
        const strNonAlphaNumeric = ` !,.`;
            return !strNonAlphaNumeric.includes(char);
        });
    const strAlphaNumeric = strAlphaNumericArr.join(``);
    const strReverse = strAlphaNumericArr.reverse().join(``);
    return strAlphaNumeric === strReverse;
};

// Do not edit below this line
module.exports = palindromes;
