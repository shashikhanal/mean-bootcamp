// The football.csv file contains the results from the English Premier League.

// The columns labeled ‘Goals’ and ‘Goals Allowed’ contain the total number of goals scored 
// for and against each team in that season (so Arsenal scored 79 goals against opponents, and 
// had 36 goals scored against them).

// Write a program to read the file, then print the name of the team with the smallest difference 
// in ‘for’ and ‘against’ goals.
// Arsenal,38,26,9,3,79,36,87
var fs = require('fs');

var smallDiff = function(){
	file = "football.csv";
	var smallestDifference = 0;
	var team = "";

	fs.readFile(file, "utf-8", function(err, data){
		if (err) { 
			console.log(err); 
			return;
		}
		
		var temp = data.toString();
		var line = temp.split('\n');

		for (var i = 1; i < line.length; i++){
			var value = line[i].split(',');
			var diff = value[5] - value[6];

			if ( i === 1) smallestDifference = diff;

			if (diff < smallestDifference) { 
				smallestDifference = diff;
				team = value[0];
			}
		}
		console.log(team);
	});
	//return team;
	return;
}

//console.log(smallDiff());
smallDiff();