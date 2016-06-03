
var data = [
	{
		key1 : "value1"
	},
	{
		key2 : "value2"
	},
	{
		key3 : "value3"
	}
]

var getArrayOfArray = function(data){
	var arrayOfArray = [];
	for (i in data){
		//console.log(i + " " + data[i]);
		for(j in data[i]){
			//console.log(j + " " + data[i][j]);
			arrayOfArray.push([j , data[i][j]]);
		}
	}
	return arrayOfArray;
}

console.log(getArrayOfArray(data));