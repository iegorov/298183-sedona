window.addEventListener('DOMContentLoaded', function() {
  var mainMenu = document.querySelector('.main-menu');
  var closeMenuBtn = document.querySelector('.page-header__close-menu');

  mainMenu.classList.remove('main-menu--nojs');
  closeMenuBtn.classList.remove('page-header__close-menu--nojs');

  document
    .querySelector('.page-header__toggle')
    .addEventListener('click', function() {
      if (mainMenu.classList.contains('main-menu--closed')) {
        mainMenu.classList.remove('main-menu--closed');
        closeMenuBtn.classList.remove('page-header__close-menu--hidden');
      } else {
        mainMenu.classList.add('main-menu--closed');
        closeMenuBtn.classList.add('page-header__close-menu--hidden');
      }
    });

  closeMenuBtn.addEventListener('click', function() {
    mainMenu.classList.add('main-menu--closed');
    closeMenuBtn.classList.add('page-header__close-menu--hidden');
  });
});
