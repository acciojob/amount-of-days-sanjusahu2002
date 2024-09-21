//your JS code here. If required.
function daysOfAYear(year){
	if(year%4==0 || year%400==0){
		document.write(year ," ",366);
		
	}
	else{
		document.write(year," ",365);
	}
}
daysOfAYear(1700);
