//CONSTANTS
const RATE_PER_HOUR = 20;
const  IS_PART_TIME = 2;
const IS_FULL_TIME = 1;
const WORKING_DAYS = 50;
const hourLimit = 100;
//VARIABLES
var salary = 0;
var totalSalary = 0;
var totalWorkingHours = 0; 
	function getHours(){
		let empHours = 0;
		let empCheck = Math.floor((Math.random()* 10) % 3);
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
		return empHours;
	}

	for(day = 1; day <= WORKING_DAYS; day++){
		let empHours = getHours();
		if(totalWorkingHours == hourLimit){
			console.log("Total Hours="+ totalWorkingHours);
			console.log("Total Salary="+ totalSalary);
			break;
		}
		salary = empHours * RATE_PER_HOUR;
		totalSalary = totalSalary + salary;
		totalWorkingHours = totalWorkingHours + empHours;
	}
