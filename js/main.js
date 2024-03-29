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
var closeGalleryPopup = galleryPopup.querySelector('.close-button');
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
        body.classList.remove('no-scroll');
        menuBG.style.display = 'none';
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

/*Video popup*/
var videoPopup = document.querySelector('.video-popup');
var videoPopupClose = videoPopup.querySelector('.close-button');
var videoItemsButtons = document.querySelectorAll('.video-button');
var videoIframe = document.querySelector('iframe');
var menuBG = document.querySelector('.menu-background');
closeWindow(videoPopupClose, videoPopup);
for (var i = 0; i < videoItemsButtons.length; i++) {
    videoItemsButtons[i].addEventListener('click', function(e) {
        e.preventDefault();
        videoPopup.style.display = 'block';
        videoIframe.src = this.href;
        body.classList.add('no-scroll');
        menuBG.style.display = 'block';
    })
}

/*Burger toggle*/
var toggleBurger = document.querySelector('.burger-icon');
var navigation = document.querySelector('.navigation-list');
var socialNavigation = document.querySelector('.social-navigation');
var body = document.querySelector('body');
toggleBurger.addEventListener('click', function(e) {
    e.preventDefault();
    if(toggleBurger.classList.contains('open')) {
        toggleBurger.classList.remove('open');
        navigation.style.display = 'none';
        socialNavigation.style.display = 'none';
        menuBG.style.display = 'none';
        body.classList.remove('no-scroll');
    } else {
        toggleBurger.classList.add('open');
        navigation.style.display = 'block';
        socialNavigation.style.display = 'flex';
        menuBG.style.display = 'block';
        body.classList.add('no-scroll');
    }
});

menuBG.addEventListener('click', function (e) {
    menuBG.style.display = 'none';
    body.classList.remove('no-scroll');
    if (navigation.classList.contains('open')) {
        e.preventDefault();
        toggleBurger.classList.remove('open');
        navigation.style.display = 'none';
        socialNavigation.style.display = 'none';
    }
    if (videoPopup.style.display === 'block') {
        videoPopup.style.display = 'none';
    }
})

var navigationItems = document.querySelectorAll('.navigation-list a');
for (var i = 0; i < navigationItems.length; i++) {
    navigationItems[i].addEventListener('click', function(e) {
        if (document.body.clientWidth < 768)
        {
            toggleBurger.classList.remove('open');
            navigation.style.display = 'none';
            socialNavigation.style.display = 'none';
            menuBG.style.display = 'none';
            body.classList.remove('no-scroll');
        }
    })
}