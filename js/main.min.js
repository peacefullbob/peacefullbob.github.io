'use strict'
var slideIndex = 1;
var rightArrow = document.querySelector('.arrow-right');
var leftArrow = document.querySelector('.arrow-left');
var slidesVideo = document.querySelectorAll('.slide');

function showSlides(n, slidesArray) {
    var i = 1;
    if (n > slidesArray.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slidesArray.length;
    }
    for(i = 0; i < slidesArray.length; i++) {
        slidesArray[i].style.display = 'none';
    }
    slidesArray[slideIndex - 1].style.display = 'block';
}

function showSlidesPhoto(n, slidesArray, galleryPopupPhoto) {
    var i = 1;
    if (n > slidesArray.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slidesArray.length;
    }
    for(i = 0; i < slidesArray.length; i++) {
        galleryPopupPhoto.src = slidesArray[i].href;
    }
    galleryPopupPhoto.src = slidesArray[slideIndex - 1].href;
}

/*Photo gallery*/
var galleryItems = document.querySelectorAll('.gallery-link');
var galleryItemsArray = [];
var galleryPopup = document.querySelector('.gallery-popup');
var galleryPopupImage = galleryPopup.querySelector('.gallery-popup img');
var closeGalleryPopup = galleryPopup.querySelector('.close-gallery');
var rightArrowGallery = document.querySelector('#arrow-left-gallery');
var leftArrowGallery = document.querySelector('#arrow-right-gallery');

for (var i = 0; i < galleryItems.length; i++ ) {
    galleryItemsArray[i] = galleryItems[i].innerHTML;
    galleryItems[i].addEventListener('click', function showPhoto(e) {
        e.preventDefault();
        galleryPopup.style.display = 'flex';
        galleryPopupImage.src = this.href;
    })
}

function closeWindow(obj, window) {
    obj.addEventListener('click', function close(e) {
        e.preventDefault();
        window.style.display = 'none';
    })
}

document.addEventListener('keydown', function(e) {
    e.preventDefault();
    if (e.keyCode === 27) {
        galleryPopup.style.display = 'none';
    }
});

closeWindow(closeGalleryPopup, galleryPopup);

rightArrowGallery.addEventListener('click', function plusSlide() {
    showSlidesPhoto(slideIndex += 1, galleryItems, galleryPopupImage);
});
leftArrowGallery.addEventListener('click', function minusSlide() {
    showSlidesPhoto(slideIndex -= 1, galleryItems, galleryPopupImage);
})
function currentSlide(n) {
    showSlidesPhoto(slideIndex = n, galleryItems, galleryPopupImage);
}

/*Burger toggle*/
var toggleBurger = document.querySelector('.burger-icon');
toggleBurger.addEventListener('click', function(e) {
    e.preventDefault();
    toggleBurger.classList.add('open');
})
