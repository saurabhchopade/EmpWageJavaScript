//CONSTANTS
const RATE_PER_HOUR = 20;
const IS_PART_TIME = 2;
const IS_FULL_TIME = 1;
const WORKING_DAYS = 50;
const HOUR_LIMIT = 100;
//VARIABLES
var wage = 0;
var totalWorkingHours = 0; 
//MAP
var empDailyWage = new Map();
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

	function calcDailywage(hours){
		wage = hours * RATE_PER_HOUR;
		return wage;
	}

	for(day = 1; day <= WORKING_DAYS; day++){
		if(totalWorkingHours == HOUR_LIMIT){
			console.log("Total Hours="+ totalWorkingHours);
			console.log("Total wage="+ calcDailywage(totalWorkingHours));
			break;
		}
		let empHours = getHours();
		empDailyWage.set(day,calcDailywage(empHours));
		totalWorkingHours = totalWorkingHours + empHours;
	}
