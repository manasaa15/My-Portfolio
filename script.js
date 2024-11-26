const jobTitle = document.querySelector('.home h3');
const titles = ['Web Developer',  'Front End Developer', 'AI Enthusiast'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Updated typing effect function
function typeEffect() {
  const currentTitle = titles[titleIndex];
  
  if (isDeleting) {
    // Gradually remove characters
    jobTitle.textContent = currentTitle.substring(0, charIndex--);
  } else {
    // Gradually add characters
    jobTitle.textContent = currentTitle.substring(0, charIndex++);
  }

  // Pause and switch logic
  if (!isDeleting && charIndex === currentTitle.length) {
    // Pause briefly after completing a title
    isDeleting = true;
    setTimeout(typeEffect, 2000); // Display the full title for 2 seconds
  } else if (isDeleting && charIndex === 0) {
    // Switch to the next title after deleting the current one
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length; // Loop through the titles
    setTimeout(typeEffect, 1000); // Pause before typing the next title
  } else {
    
    const typingSpeed = isDeleting ? 50 : 120; // 
    setTimeout(typeEffect, typingSpeed);
  }
}


typeEffect();

const toggleButton = document.getElementById('theme-toggle');

// Check for the saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  toggleButton.textContent = savedTheme === 'dark-mode' ? 'Light Mode' : 'Dark Mode';
}

// Event listener for theme toggle
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLightMode = document.body.classList.contains('light-mode');
  toggleButton.textContent = isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';

  // Save the theme preference to localStorage
  localStorage.setItem('theme', isLightMode ? 'light-mode' : 'dark-mode');
});


