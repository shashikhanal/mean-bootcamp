
var calculate = function(n){
	var avg = 0, sum = 0;
	for(var i = 0; i < n; i++){
		sum = 5*i + sum;
	}
	avg = sum / n;
	return avg;
}

console.log(calculate(1000));