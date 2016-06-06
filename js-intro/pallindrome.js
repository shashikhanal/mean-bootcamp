
var string = "tattwattawttat";

var checkPallindrome = function(str){
	var originalString = str.toLowerCase();
	var reversedString = "";

	for(var i = originalString.length - 1 ; i >= 0 ; i--){
		reversedString += originalString.charAt(i);
	}

	return (originalString == reversedString) ? "String is pallindrome !" : "String is not pallindrome !";
}

console.log(checkPallindrome(string));