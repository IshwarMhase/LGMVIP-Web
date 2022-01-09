/* Carousel in Landing Page*/
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("slider-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}


/* Carousel in Life in Zippy*/
var lifeimg = document.getElementsByClassName('lifeimage')
var len=lifeimg.length;

for (var i=0; i < len; i++){

  lifeimg[i].addEventListener('click', function(){
    document.getElementById('mainimg').src = this.src
  })
}



/*ISHWAR MHASE*/