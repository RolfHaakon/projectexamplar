// JavaScript Document

// IMAGE SLIDER
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//SEARCH BAR
function searchBar() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("mySearch");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

//SHOWMORE FUNCTION
function showMore1(){
	var x = document.getElementById('more1');
	var y= document.getElementById("show1");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}

function showMore2(){
	var x = document.getElementById('more2');
	var y= document.getElementById("show2");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}
function showMore3(){
	var x = document.getElementById('more3');
	var y= document.getElementById("show3");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}
function showMore4(){
	var x = document.getElementById('more4');
	var y= document.getElementById("show4");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}

function showMore5(){
	var x = document.getElementById('more5');
	var y= document.getElementById("show5");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}
function showMore6(){
	var x = document.getElementById('more6');
	var y= document.getElementById("show6");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}

function showMore7(){
	var x = document.getElementById('more7');
	var y= document.getElementById("show7");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}