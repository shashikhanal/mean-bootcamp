/*
	Create a function CelebrityID that returns a closure that gives you access to a private variable called ID(initially zero).

	The following code should work.
	var Celeb = CelebrityID();
	Celeb.get() -> 0
	Celeb.set(200)
	Celeb.get() -> 200
	Celeb.ID -> Access Denied
*/

var celebrityId = (function(){
	var id = 0;
	return {
		get : function(){
			return id;
		},
		set : function(attr){
			id = attr;
		}
	}
})();

console.log(celebrityId.get());
celebrityId.set(200);
console.log(celebrityId.get());