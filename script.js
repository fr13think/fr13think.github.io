// Show popup after form submission
document.getElementById('testimonial-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const testimonialText = document.querySelector('#testimonial-form textarea').value;
  
    if (testimonialText.trim() === '') {
      alert('Please enter a testimonial.');
      return;
    }
  
    // Display popup
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
  
    // Close popup when clicking the close button
    document.querySelector('.close').addEventListener('click', function () {
      popup.style.display = 'none';
    });
  
    // Clear the form
    document.querySelector('#testimonial-form textarea').value = '';
  });
  
  // Add fade-in effect to sections as they come into view
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });
  
  sections.forEach(section => observer.observe(section));