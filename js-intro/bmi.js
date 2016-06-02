// BMI calculator

// BMI = weight / height^2

// Where weight is taken in kilograms and height in meters.

// Four general grades are proposed:
// Underweight - BMI < 18.5
// Normal weight - 18.5 <= BMI < 25.0
// Overweight - 25.0 <= BMI < 30.0
// Obesity - 30.0 <= BMI

// For example, if I have weight of 80 kg and height of 1.73 m I can calculate:

// BMI = 80 / (1.73)^2 = 26.7

var calculateBmi = function(weight, height) {
	var bmi = weight / (height * height);
	return bmi;
}

var getBmi = function(weight, height){
	bmi = calculateBmi(weight, height);
	console.log("Your BMI is: " + bmi);
	
	if (bmi < 18.5) {
		console.log("Underweight");
	} else if (bmi >=18.5 && bmi < 25){
		console.log("Normal weight");
	} else if (bmi >= 25 && bmi < 30){
		console.log("Overweight");
	} else if (bmi >= 30) {
		console.log("Obesity");
	} else {
		console.log("Someting went wrong !!!");
	}
}

getBmi(80, 1.73);