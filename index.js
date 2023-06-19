const Navicon = document.querySelector('.bar-div');
const links = document.querySelector('.nav-info');
const linksContainer = document.querySelector('.links-container');
const linksblur = document.querySelector('.blur');
Navicon.addEventListener('click', () => {
    console.log('clicked');
    links.classList.toggle('active')
        // linksContainer.classList.add('.blurry')
});