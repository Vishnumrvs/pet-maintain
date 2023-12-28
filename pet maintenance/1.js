let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
// Optional - Pause slider on hover
const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('mouseover', () => {
    document.querySelector('.slider').style.animationPlayState = 'paused';
});

sliderContainer.addEventListener('mouseout', () => {
    document.querySelector('.slider').style.animationPlayState = 'running';
});
// JavaScript code to toggle the dropdown menu
document.addEventListener("click", function(event) {
  var dropdownContent = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdownContent.length; i++) {
    if (!event.target.matches('.dropdown-btn')) {
      var openDropdown = dropdownContent[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

// Show the dropdown content on button click
var dropdownBtn = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdownBtn.length; i++) {
  dropdownBtn[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    } else {
      dropdownContent.classList.add('show');
    }
  });
}