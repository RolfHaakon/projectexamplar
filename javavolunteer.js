// JavaScript Document

function validate()
{	
	var error = 0;
	
	var spans = document.getElementsByTagName("span");
	var fname = document.regform.fname;
	if(fname.value === "")
	{
		spans[0].style.visibility = "visible";
		error = 1;
	}
	else {
		spans[0].style.visibility = "hidden";
		error = 0;
	}
	var mobile = document.regform.mobile;
	if(mobile.value === "")
	{
		spans[1].style.visibility = "visible";
		error = 1;
	}
	else {
		spans[1].style.visibility = "hidden";
		error = 0;
	}
	var email = document.regform.email;
	if(email.value === "")
	{
		spans[2].style.visibility = "visible";
		error = 1;
	}
	else {
		spans[2].style.visibility = "hidden";
		error = 0;
	}
	
	
	if(error == 0)
		{
			return true;
		}
	else {
		return false;
	}
	
}

function myFunction() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var ok = true;
    if (pass1 != pass2) {
        //alert("Passwords Do not match");
        document.getElementById("pass1").style.borderColor = "#E34234";
        document.getElementById("pass2").style.borderColor = "#E34234";
        ok = false;
    }
    else {
        alert("Passwords Match!!!");
    }
    return ok;
}

var modal = document.getElementById('regdiv');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	
}

