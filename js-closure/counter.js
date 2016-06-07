
// implement counter using private variable in function

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