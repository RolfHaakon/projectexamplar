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


var modal = document.getElementById('regdiv');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	
}
