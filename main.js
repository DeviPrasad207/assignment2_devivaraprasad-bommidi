/*
<!—
===========================================
Student Name: DEVI VARA PRASAD BOMMIDI
Solution for Info 600 - Assignment 2
===========================================
-->
*/
//Javascript code to create user interface for Student Record Management/Entry
function myRecord(){
	 var time = new Date().getHours();
	 var minutes = new Date().getMinutes();
	 var seconds = new Date().getSeconds();
	 var studentname = document.getElementById("firstname").value+ "";
	 var studentmajor = document.getElementById("major").value+ "";
	 var studentyear = document.getElementById("startyear").value+ "";
//Conditions to validate the year null fields
	 if (studentyear < 2000)
		  {
		    alert ("Incorrect Year, please enter a year greater than or equal to 2000");
			}
	  if (studentname == " ")
                {
                                alert ("Please enter name");
                }
      if(studentmajor == " ")
                {
                                alert ("Please enter major");
                }

	if (studentyear >= 2000 && studentname != " " && studentmajor != " ")
	{
//To display entered records to the user interface	    
	 document.getElementById("records").innerHTML += "<br />" +time+":"+minutes+":"+seconds+", "+studentname+", "+studentmajor+", "+studentyear;
	 document.MyFormDetails.firstname.value=" ";
	 document.MyFormDetails.major.value=" ";
	 document.MyFormDetails.startyear.value=" "; 
	 }

	 }
