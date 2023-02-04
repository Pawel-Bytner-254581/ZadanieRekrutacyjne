window.onload = function() {
  //add orange arrow icon to element in menu depending on specific pages
  (()=>{
    let currentUrl = window.location.href;
    document.querySelectorAll('.nav__link').forEach(function(link) {
      if(currentUrl.includes(link.href)) {
        link.parentElement.classList.add('nav__item--current-page');
      }
    });
  })();

  //show / hide menu on mobile devices
  const getMobileBtn = document.querySelector('.burger-btn');
  const getMobileCloseBtn = document.querySelector('.close-btn');
  const getHeader = document.querySelector('.header');

  getMobileBtn.addEventListener('click', function(){
    getMobileBtn.classList.add('burger-btn--hidden');
    getHeader.classList.add('header--active');
    getMobileCloseBtn.classList.add('close-btn--active');
  });

  getMobileCloseBtn.addEventListener('click', function(){
    getMobileBtn.classList.remove('burger-btn--hidden');
    getHeader.classList.remove('header--active');
    getMobileCloseBtn.classList.remove('close-btn--active');
  });
}