// JavaScript Document
//Link to other page
function linkPage(){
	location.href="https://www.facebook.com/TownsvilleConcertBand/";
}
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
function showMore8(){
	var x = document.getElementById('more8');
	var y= document.getElementById("show8");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}

function showMore9(){
	var x = document.getElementById('more9');
	var y= document.getElementById("show9");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}
function showMore10(){
	var x = document.getElementById('more10');
	var y= document.getElementById("show10");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}
function showMore11(){
	var x = document.getElementById('more11');
	var y= document.getElementById("show11");
	if (x.style.display === 'none'){
			x.style.display="block";	
			y.innerHTML="Show Less";
	} 
	else {
			x.style.display="none";	
			y.innerHTML="Show More";
	}
}

//Timeline
function hideAll(){
	var c1 = document.getElementById('t1');
	var c2 = document.getElementById('t2');
	var c3 = document.getElementById('t3');
	var c4 = document.getElementById('t4');
	var c5 = document.getElementById('t5');
	var c6 = document.getElementById('t6');
	var c7 = document.getElementById('t7');
	var c8 = document.getElementById('t8');
	var c9 = document.getElementById('t9');
	var c10 = document.getElementById('t10');
	var c11 = document.getElementById('t11');
	c1.style.display="none";
	c2.style.display="none";
	c3.style.display="none";
	c4.style.display="none";
	c5.style.display="none";
	c6.style.display="none";
	c7.style.display="none";
	c8.style.display="none";
	c9.style.display="none";
	c10.style.display="none";
	c11.style.display="none";
}

function revealCont1(){
	hideAll();
	var c1 = document.getElementById('t1');
	if (c1.style.display === 'none'){
			c1.style.display="block";
	}
	
}
function revealCont2(){
	hideAll();
	var c2 = document.getElementById('t2');
	if (c2.style.display === 'none'){
			c2.style.display="block";
	}
	
}function revealCont3(){
	hideAll();
	var c3 = document.getElementById('t3');
	if (c3.style.display === 'none'){
			c3.style.display="block";
	}
	
}function revealCont4(){
	hideAll();
	var c4 = document.getElementById('t4');
	if (c4.style.display === 'none'){
			c4.style.display="block";
	}
	
}function revealCont5(){
	hideAll();
	var c5 = document.getElementById('t5');
	if (c5.style.display === 'none'){
			c5.style.display="block";
	}
	
}function revealCont6(){
	hideAll();
	var c6 = document.getElementById('t6');
	if (c6.style.display === 'none'){
			c6.style.display="block";
	}
	
}function revealCont7(){
	hideAll();
	var c7 = document.getElementById('t7');
	if (c7.style.display === 'none'){
			c7.style.display="block";
	}
	
}function revealCont8(){
	hideAll();
	var c8 = document.getElementById('t8');
	if (c8.style.display === 'none'){
			c8.style.display="block";
	}
	
}function revealCont9(){
	hideAll();
	var c9 = document.getElementById('t9');
	if (c9.style.display === 'none'){
			c9.style.display="block";
	}
	
}function revealCont10(){
	hideAll();
	var c10 = document.getElementById('t10');
	if (c10.style.display === 'none'){
			c10.style.display="block";
	}
	
}function revealCont11(){
	hideAll();
	var c11 = document.getElementById('t11');
	if (c11.style.display === 'none'){
			c11.style.display="block";
	}
	
}

