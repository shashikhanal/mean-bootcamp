// For example, if he have the sequence of 5 values like this:
// 3 5 6 4 5
// Then the second (i.e. 5) should be substituted by (3 + 5 + 6) / 3 = 4.66666666667,
// the third (i.e. 6) should be substituted by (5 + 6 + 4) / 3 = 5,
// the fourth (i.e. 4) should be substituted by (6 + 4 + 5) / 3 = 5.
// By agreement, the first and the last values will remain unchanged.

// You are to write the program which helps Little Merlin in this whimsical algorithm of digital signal processing.

// Write a function that will accept an array of measurements and return an array of smoothed measurements.

// Answer should contain the processed sequence. All values should be calculated to precision of 1e-7 or better.

// Example:
// input data:
// 32.6 31.2 35.2 37.4 44.9 42.1 44.1

// answer:
// 32.6 33 34.6 39.1666666667 41.4666666667 43.7 44.1

var array = [32.6, 31.2, 35.2, 37.4, 44.9, 42.1, 44.1];

var processData = function(arr){
	var processedArray = [];
	var temp;
	processedArray.push(arr[0]);
	for (var i = 1; i < arr.length - 1; i++){
		temp = (arr[i-1] + arr[i] + arr[i+1]) / 3;
		processedArray.push(temp);
	}
	processedArray.push(arr[arr.length - 1]);
	return processedArray;
}

console.log(processData(array));