// Write a program to search for the "saddle points" in a 5 by 5 array of integers.

// You can generate this array by using the concept of multidimensional arrays and 
// random number generation we learnt earlier.

// A saddle point is a cell whose value is greater than or equal to any in its row, 
// and less than or equal to any in its column. There may be more than one saddle 
// point in the array. Print out the coordinates of any saddle points your program finds.

// Print out "No saddle points" if there are none.

var array = [];

var fillArray = function(arr){
	for(var i = 0; i < 5; i++){
		var x = Math.floor(Math.random() * 9) + 1;
		arr.push([x]);
	}
	return arr;
}

var reFillArray = function(arr){
	for(var i = 0; i < 5; i++){
		var x = Math.floor(Math.random() * 9) + 1;
		arr[i].push(x);
	}
	return arr;
}

// Generates array
var generateArray = function(arr){
	var array1d = fillArray(arr); // gets 1D array
	var arrayMd = [];

	// gets 5D array
	for(var i = 0; i < 4; i++){
		var arrayMd = reFillArray(array1d);
	}
	array = arrayMd;
	return arrayMd;
}

// gets column for the row's element
var getColumn = function(arr, j){
	var col = [];

	for (var i = 0; i < arr.length; i++){
		col.push(arr[i][j]);
	}
	return col;
}


// finds saddle points
var findSaddle = function(arr){
	var saddlePoints = [];
	var minInRow = 0, columnArray = [], maxInColumn = 0;
	var indexOfMin = 0, indexOfMax = 0;

	for (var i = 0; i < arr.length; i++){
		minInRow = Math.min.apply(Math, arr[i]);
		indexOfMin = arr[i].indexOf(minInRow);
		//ok
		for (var j = 0; j < arr[i].length; j++){
			if ( (arr[i][j] > minInRow) || (arr[i][j] === minInRow && arr[i].indexOf(arr[i][j]) != indexOfMin) ){
				columnArray = getColumn(arr, j);
				maxInColumn = Math.max.apply(Math, columnArray);
				indexOfMax = columnArray.indexOf(maxInColumn);

				if ( (arr[i][j] < maxInColumn) || (arr[i][j] === maxInColumn && columnArray.indexOf(arr[i][j]) != indexOfMax) ){
					saddlePoints.push([i,j]);
				}
			}
		}
	}
	if (saddlePoints.length === 0){
		return "No saddle points !"
	} else {
		return saddlePoints;
	}
}

console.log("Generated array:");
console.log(generateArray(array));
console.log("Saddle points:");
console.log(findSaddle(array));