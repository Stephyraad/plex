module.exports = function sort(array) {
    var sortedArray = array.slice(0);
    for ( var j = 1; j < sortedArray.length; j++ ) {
        var temp = sortedArray[j];
        var i = j - 1;
        while ( i > -1 && sortedArray[i] > temp ) {
            sortedArray[i+1] = sortedArray[i];
            i--;
        }
        sortedArray[i+1] = temp;
    };
    return sortedArray;
};