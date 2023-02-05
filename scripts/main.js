window.onload = function() {
  /*
  Nie wiem czy dobrze zrozumiałem, ale jeśli pomarańczowa ikonka miała się pojawiać przy
  elemencie/linku w menu w zależności od tego na jakiej jesteśmy stronie, a nie przy efekcie
  po najechaniu, to zostawiam poniższy kod, który za to odpowiada:

  //add orange arrow icon to element in menu depending on specific pages
  (()=>{
    let currentUrl = window.location.href;
    document.querySelectorAll('.nav__link').forEach(function(link) {
      if(currentUrl.includes(link.href)) {
        link.parentElement.classList.add('nav__item--current-page');
      }
    });
  })();
  */

  //show / hide menu on mobile devices
  const getMobileBtn = document.querySelector('.burger-btn');
  const getMobileCloseBtn = document.querySelector('.close-btn');
  const getHeader = document.querySelector('.header');

  getMobileBtn.addEventListener('click', function() {
    getMobileBtn.classList.add('burger-btn--hidden');
    getHeader.classList.add('header--active');
    getMobileCloseBtn.classList.add('close-btn--active');
  });

  getMobileCloseBtn.addEventListener('click', function() {
    getMobileBtn.classList.remove('burger-btn--hidden');
    getHeader.classList.remove('header--active');
    getMobileCloseBtn.classList.remove('close-btn--active');
  });

  //slider move on click
  let shiftSlideValue = 100;
  sliderBox = document.querySelectorAll('.slider__box');
  sliderDots = document.querySelectorAll('.fixed-box__slider-dot');
  sliderDots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      sliderDots.forEach(function(dot) {
        dot.classList.remove('fixed-box__slider-dot--active');
      });
      dot.classList.add('fixed-box__slider-dot--active');
      sliderBox.forEach(function(box) {
        box.style.transform = `translateX(-${shiftSlideValue}%)`;
      });
      shiftSlideValue += 100;
      if(shiftSlideValue >= 300) {
        shiftSlideValue = 0;
      }
    });
  });

  //add red info alerts under specific form inputs
  const contactForm = document.querySelector('.contact__form');
  const inputEmail = document.querySelector("input[type=email]");
  const inputPhone = document.querySelector("input[type=tel]");
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Wysłano ;), wyłączyłem wysyłanie w js.');
  });

  function checkValidation() {
    if(inputEmail.value) {
      if (!inputEmail.checkValidity()) {
        document.querySelector("input[type=email] + p").style.display = "block";
      } else {
        document.querySelector("input[type=email] + p").style.display = "none";
      }
    }
    
    if(inputPhone.value) {
      if (!inputPhone.checkValidity()) {
        document.querySelector("input[type=tel] + p").style.display = "block";
      } else {
        document.querySelector("input[type=tel] + p").style.display = "none";
      }
    }
  } 

  inputEmail.addEventListener('change', checkValidation);
  inputPhone.addEventListener('change', checkValidation);
}