const repeatString = function(string, num) {
    let repeat = "";
        while (num > 0) {
            repeat += string;
            num--;
        }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
