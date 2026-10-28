const removeFromArray = function(arr, ...toBeRemoved) {
    let toBeKept = []
    for(let i = 0 ; i < arr.length; i++) {
        if(!toBeRemoved.includes(arr[i])) {
            toBeKept.push(arr[i])
        }
    }
    return toBeKept
};

removeFromArray()

// Do not edit below this line
module.exports = removeFromArray;
