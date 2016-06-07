// array shuffling js function
var array = [1, 2, 3, 4, 5, 6, 7];

var shuffle = function(arr){
	for (var i = 0; i < arr.length; i++){
		var j = Math.floor(Math.random() * (i + 1));
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;	
	}
	return arr;
}

console.log(shuffle(array));