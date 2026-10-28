const number = Math.floor(Math.random() * 1000);
const repeatString = function(str, num) {
    let result= ""; 
    if (num < 0) {
        return "ERROR"
    }
    
    for( let i = 0; i < num; i++) {
        result += str;
    }
    return result
};

repeatString("",10);

// Do not edit below this line
module.exports = repeatString;
