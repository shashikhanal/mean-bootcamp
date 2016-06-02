// sorting numbers in an array

var number = [5, 7, 1, 100, 0, 3];

var sorted_number = number.sort();

var bubbleSort = function(arr) {
	var temp;
	for (var i = 0; i < arr.length; i++){
		for (var j = 0; j <= i; j++){
			if (arr[i+1] < arr[i]){
				temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort(number));