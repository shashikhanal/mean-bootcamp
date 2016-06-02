// a JavaScript function to test if a number is a power of 2.

var power_of_2 = function(number){
	return number && !(number & (number - 1));
}

// Test Data :
console.log(power_of_2(16)); 
console.log(power_of_2(18)); 
console.log(power_of_2(256));