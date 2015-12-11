var assert = require('assert');
var userSort = require('./../test/sort.js');

describe('Sort Algorithm', function() {
	var integerArray = [5, 4, 3, 2, 1];

	it('should sort a integer array', function() {
		var selectSorted = userSort(integerArray);
		var nativeSorted = integerArray.sort(function(a,b) {
			return a - b;
		});
		var errorMessage = 'Your Algorithm does not sort porperly.' + '\n\tExpected: ' + nativeSorted + '\n\tBut instead got: ' + selectSorted;
		assert.deepEqual( selectSorted, nativeSorted, errorMessage); 
	});
})