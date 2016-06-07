
// Create a function called Counter(). When called it should return a function that increases a private variable called count(initialized to zero) and return the new value of counter.

// Basically, this code should work
// var counter = counter()
// counter() -> 1
// counter() -> 2
// counter() -> 3
// counter() -> 4

// There should be no way to access the count variable directly.

var counter = (function(){
	var count = 0;
	return {
			countFunc : function(){
			return count += 1;
		}
	}
})();

console.log(counter.countFunc());
console.log(counter.countFunc());
console.log(counter.countFunc());
console.log(counter.countFunc());