const Navicon = document.querySelector('.bar-div');
const linksContainer = document.querySelector('.links-container');
const closeIcon = document.querySelector('.close-icon');
const allNavlinks = document.querySelectorAll('.nav-info');

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
function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector('small');
    msg.innerHTML = message;
  
    // update input class
    input.className = type ? 'success' : 'error';
    return type;
  }
  