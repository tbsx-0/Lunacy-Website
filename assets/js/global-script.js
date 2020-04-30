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
    var slides = document.getElementsByClassName("slides");
    var selector = document.getElementsByClassName("selector");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < selector.length; i++) {
        selector[i].className = selector[i].className.replace(" active-selector", "");
    }
    slides[slideIndex - 1].style.display = "block";
    selector[slideIndex - 1].className += " active-selector";
}