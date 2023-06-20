const details = [
  {
    id: 1,
    title: 'Tonic',
    platform: 'CANOPY',
    stack: 'Back End Dev',
    price: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: './images/work-1.png',
    technology: ['html', 'css', 'javascript'],
    livelink: 'https://blessing-michael.github.io/portfolio/',
    linkSource: 'https://github.com/blessing-michael/portfolio',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    platform: 'CANOPY',
    stack: 'Back End Dev',
    price: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: './images/work-2.png',
    technology: ['html', 'css', 'javascript'],
    livelink: 'https://blessing-michael.github.io/portfolio/',
    linkSource: 'https://github.com/blessing-michael/portfolio',
  },
  {
    id: 3,
    title: 'Tonic',
    platform: 'CANOPY',
    stack: 'Back End Dev',
    price: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: './images/work-3.png',
    technology: ['html', 'css', 'javascript'],
    livelink: 'https://blessing-michael.github.io/portfolio/',
    linkSource: 'https://github.com/blessing-michael/portfolio',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    platform: 'CANOPY',
    stack: 'Back End Dev',
    price: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: './images/work-4.png',
    technology: ['html', 'css', 'javascript'],
    livelink: 'https://blessing-michael.github.io/portfolio/',
    linkSource: 'https://github.com/blessing-michael/portfolio',
  },
];

const Navicon = document.querySelector('.bar-div');
const linksContainer = document.querySelector('.links-container');
const closeIcon = document.querySelector('.close-icon');
const allNavlinks = document.querySelectorAll('.nav-info');
const workSection = document.querySelectorAll('.work-wrap');
console.log(workSection)



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
