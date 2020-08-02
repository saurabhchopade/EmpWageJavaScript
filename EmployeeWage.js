//CONSTANTS
const RATE_PER_HOUR = 20;
const  IS_PART_TIME = 2;
const IS_FULL_TIME = 1;
//VARIABLES
var empHours = 0;
var salary = 0; 
var empCheck = Math.floor((Math.random()* 10) % 3);
	if(empCheck == IS_FULL_TIME){
		empHours = 8;
	}
	else if(empCheck = IS_PART_TIME){
 		empHours = 4;
	}
	else{
		 empHours = 0;
	}
salary = empHours * RATE_PER_HOUR;
console.log("Salary="+ salary);
