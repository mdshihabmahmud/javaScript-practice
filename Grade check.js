//Grade check

var num = prompt("Enter Marks: ");

if(num>79)
   document.write("Grade: A+");
else if(num>=70 && num<=79)
	 document.write("Grade: A");
else if(num>=60 && num<=69)
	 document.write("Grade: B");
else if(num>=50 && num<=59)
	 document.write("Grade: C");
else if(num>=40 && num<=49)
	 document.write("Grade: D");
	else
		document.write("Fail");
