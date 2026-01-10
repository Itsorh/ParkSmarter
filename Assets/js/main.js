document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu-toggle');
  const navList = document.querySelector('#topnav ul');

  burger.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
});

