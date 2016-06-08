// In weather.csv you’ll find daily weather data. 
// Write a program to read the file, then output the day number 
// (column one) with the smallest temperature spread (the maximum temperature is 
// the second column, the minimum the third column).

// Day,MxT,MnT,AvT,AvDP,1HrP TPcpn,PDir,AvSp,Dir,MxS,SkyC,MxR,Mn,R AvSLP
// 1,88,59,74,53.8,0,280,9.6,270,17,1.6,93,23,1004.5

var fs = require('fs');

var findSmallSpread = function(){
	var file = "weather.csv";
	var smallestSpread = 0;
	var day = 0;

	fs.readFile(file, "utf-8", function(err, data){
		if (err) {
			console.log(err);
			return;
		}

		var temp = data.toString();
		var line = temp.split('\n');

		for (var i = 1; i < line.length; i++){
			var value = line[i].split(',');
			spread = value[1] - value[2];

			if (i === 1) smallestSpread = spread;

			if (spread < smallestSpread){
				smallestSpread = spread;
				day = value[0];
			}
		}
		console.log(day);
	});
	//return day;
	return;
}

//console.log(findSmallSpread());
findSmallSpread();