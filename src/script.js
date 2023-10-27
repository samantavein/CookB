document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-icon').addEventListener('click', function() {
        console.log('Menu icon clicked'); // Add this line to check if the event listener is working
        const menuLinks = document.querySelector('.menu-links');
        menuLinks.style.display = (menuLinks.style.display === 'block') ? 'none' : 'block';
      });
      
  });
  