// implement counter using private variable in function

var counter = (function(){
	var count = 0;
	return function(){
			return count += 1;
	}
})();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());