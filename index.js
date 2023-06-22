const Navicon = document.querySelector('.bar-div');
const linksContainer = document.querySelector('.links-container');
const closeIcon = document.querySelector('.close-icon');
const allNavlinks = document.querySelectorAll('.nav-info');
const error = document.querySelector('.error-message');
const form = document.querySelector('.form');
const email = document.querySelector('#email');

Navicon.addEventListener('click', () => {
  linksContainer.classList.add('active');
});

function closeMenu() {
  linksContainer.classList.remove('active');
}
closeIcon.addEventListener('click', () => {
  closeMenu();
});

allNavlinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// FORM VALIDATE

const errorMessage = () => {
  if (email.value !== email.value.toLowerCase()) {
    error.textContent = 'Please ensure that email address must be in lower case';
  }
};

email.addEventListener('input', () => {
  if (email.value === email.value.toLowerCase()) {
    error.textContent = '';
  }
});

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMessage();
  }
});
