//CONSTANTS
const RATE_PER_HOUR = 20;
const DAILY_HOURS = 8;
//VARIABLES
var salary = 0; 
var attendanceStatus = Math.floor(Math.random()* 10 % 2);
	if(attendanceStatus == 1){
		console.log("Employee is Present");
		salary = (salary = DAILY_HOURS * RATE_PER_HOUR);
		console.log("Salary="+ salary);
	}
	else{
		console.log("Employee is Absent");
		console.log("Salary="+ salary);
	}

