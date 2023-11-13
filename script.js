document.querySelector('.nav-toggler').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open')
  document.querySelector('.nav-mobile').classList.toggle('open')
})