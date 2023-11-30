
// JavaScript to toggle the responsive navigation bar
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('active');
});

// JavaScript to toggle the responsive navigation bar
const search = document.querySelector('.search');
const IconSearch = document.querySelector('.fa-search');

IconSearch.addEventListener('click', function() {
    search.classList.toggle('active');
});

