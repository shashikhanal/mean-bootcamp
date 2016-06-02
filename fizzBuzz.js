//Fizz Buzz problem
var fizz = function(i){
	return i % 3 == 0 ? true : false;
}

var buzz = function(i){
	return i % 5 == 0 ? true : false;
}

for (i = 0; i <= 100; i++){
	if (fizz(i)){
		if (buzz(i)){
			console.log("FizzBuzz");
		} else {
			console.log("Fizz");
		}
	} else if (buzz(i)){
			console.log("Buzz");
	} else {
		console.log(i);
	}
}