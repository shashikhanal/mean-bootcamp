// program that accepts a list of country names as input and returns the longest country name as output.

var longest_country_name = function(arr){
	longestName = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(arr[i].length > longestName.length) longestName = arr[i];
	}
	return longestName;
}

console.log(longest_country_name(["Australia", "Germany", "United States of America"]));