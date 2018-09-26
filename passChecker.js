function checkPass() {
	var pass1 = document.getElementById("p1").value;
	var pass2 = document.getElementById("p2").value;
	if (pass1.length >= 8 && pass2.length >= 8)
	{
		if (pass1 == pass2)
		{
			alert("All good!");
		}
		else
		{
			alert("The passwords you entered do not match!");
		}
	}
	else
	{
		alert("At least one of password boxes has fewer than 8 characters!");
	}
}
