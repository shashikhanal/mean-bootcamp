var fs = require('fs');
var data = require('./data.json');

var convert = function(){
	var file = fs.createWriteStream('data.csv');

	file.on('error', function(err) { console.log(err); });
	file.write("fname,lname,dob" + '\n');
	for (var i = 0; i < data.length; i++){
		file.write(data[i].fname+","+data[i].lname+","+data[i].dob+'\n');
	}
	file.end();

	
	return;
}

convert();