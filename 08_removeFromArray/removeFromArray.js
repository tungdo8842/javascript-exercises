const removeFromArray = function(arr, ...members) {
    for (let index = 0; index < arr.length; index++) {
        if (members.includes(arr[index])) {
            arr.splice(index, 1);
            index -= 1;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
