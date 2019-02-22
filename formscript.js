function valid()
{	
	var name = document.getElementById('name')
	var pho = document.getElementById('contact')
	var pass = document.getElementById('psw')
	var pass_repeat = document.getElementById('psw-repeat')
	var address = document.getElementById('address')
	var email = document.getElementById('email')
	
	if(name.value=="")
	{
	alert("Please Enter Your Name");
	name.focus();
	return false;
	}
	if(!isNaN(name.value))
	{
	alert("Please Enter Only Characters");
	name.select();
	return false;
	}
	
	if(pho.value.length!=10|| pho.value.match(/^[0-9]+$/)==null )
	{
			alert("contact number should be of 10 digits and should contain only numeric values..");
			pho.focus();
			return false;
	}	
	
	if (email.value == "")								 
	{
		alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}

	if (email.value.indexOf("@", 0) < 0)			 
	{
		alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}

	if (email.value.indexOf(".", 0) < 0)			 
	{
		alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
	
	if(pass.value=="")
	{
	alert("Please Enter Your Password");
	pass.focus();
	return false;
	}
	if ((pass.value.length < 4) || (pass.value.length > 8))
	{
	alert("Your Password must be 4 to 8 Character");
	pass.focus();
	return false;
	}
	if(pass_repeat.value=="" && pass_repeat.value!=pass.value)
	{
	alert("Please renter Your Password");
	pass_repeat.focus();
	return false;
	}
if(address.value="")
	{
	alert("Please Enter Your address");
	address.focus();
	return false;
	}
	return true;
}