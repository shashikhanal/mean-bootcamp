
var vowel = "This is a line of text.";

var countVowel = function(str){
	var counter = 0;
	str.toLowerCase();

	for(var i = 0; i < str.length; i++){
		switch(str.charAt(i)) {
			case 'a': case 'e': case 'i': case 'o': case 'u': 
				counter++;
		}
	}
	return counter;
}

console.log(countVowel(vowel));