

function check()
{
	var spans = document.getElementsByTagName("span");
	if(document.regform.fname.value == "")
	{
		spans[0].style.visibility = "visible";
		return 1;
	}
	else
		spans[0].style.visibility = "hidden";
	
	if(document.regform.mobile.value == "")
	{
		spans[1].style.visibility = "visible";
		return 1;
	}
	else
		spans[1].style.visibility = "hidden";
	
	if(document.regform.email.value == "")
	{
		spans[2].style.visibility = "visible";
		return 1;
	}
	else
		spans[2].style.visibility = "hidden";
	
	if(document.regform.address.value == "")
	{
		spans[3].style.visibility = "visible";
		return 1;
	}
	else
		spans[3].style.visibility = "hidden";
	
	if(myFunction() !== 0){
		return 1;
	}
	
	return 0;
	
	
	
}	
function validate(){
	if(check() == 0)
		{
		alert("dummy");
		location.href="http:\\www.paypal.com";
		}
	else {
		return false;
	}
}

function myFunction() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    if (pass1 != pass2) {
        //alert("Passwords Do not match");
        document.getElementById("pass1").style.borderColor = "#E34234";
        document.getElementById("pass2").style.borderColor = "#E34234";
		return 1;
    }
    else {
        return 0;
    }
}

var modal = document.getElementById('regdiv');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	
}

