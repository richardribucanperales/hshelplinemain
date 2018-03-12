console.log("loaded slideshow")

var slideIndex = 1;
showDivs(slideIndex);
var back = ["./img/slide1.jpg", "./img/slide2.jpg", "./img/slide3.jpg"]

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
//  var b;
  var x = document.getElementsByClassName("storyslide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
//  for (b=0;b>=3;b++){
//  	console.log(b)
//  	document.getElementById("slideshow").style.backgroundImage = "url" + "(" + back[b] + ")"
//  }
  x[slideIndex-1].style.display = "block";  
}