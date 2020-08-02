//CONSTANTS
const RATE_PER_HOUR = 20;
const  IS_PART_TIME = 2;
const IS_FULL_TIME = 1;
const WORKING_DAYS=5;
//VARIABLES
var empHours = 0;
var salary = 0; 
	for(day = 1;day <= WORKING_DAYS;day++){
		var empCheck = Math.floor((Math.random()* 10) % 3);
		switch(empCheck){
		case 1:
				empHours = 8;
				break;
		case 2:
 				empHours = 4;
				break;
		default:
		 		empHours = 0;
		}
		salary = empHours * RATE_PER_HOUR;
		console.log("day"+day+" Salary="+ salary);
	}
