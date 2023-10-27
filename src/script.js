document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-icon').addEventListener('click', function() {
      const menuLinks = document.querySelector('.menu-links');
      menuLinks.style.display = (menuLinks.style.display === 'block') ? 'none' : 'block';
    });
  });
  