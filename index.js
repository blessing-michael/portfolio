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
const popContainer = document.querySelector('.popup-Container');
console.log(popContainer)
const workp = document.getElementById('p');
const worksec = document.getElementById('work');

window.addEventListener('DOMContentLoaded', () => {
  // console.log('work')
  let displayWork = details.map((work) => `  <article class="work">
      <div class="img">
        <img src=${work.img} alt=${work.title} class="work-img" />
      </div>
      <div class="works-info">
        <h2 class="work-title">${work.title}</h2>
        <div class="works-details">
          <h4 class="work-canopy">${work.platform}</h4>
          <p class="profession">
            <span class="prof-span">
              <img src="./images/Counter.png" alt="counter" /></span
            >${work.stack}
          </p>
          <p class="profession">
            <span class="prof-span">
              <img src="./images/Counter.png" alt="counter" /></span>${work.price}
          </p>
        </div>
        <p class="work-info">  ${work.description} </p>
        <div class="tech-highligt">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
        </div>
        <button class="tech-project-btn" type="submit" id=${work.id}>See project</button>
      </div>
    </article>`);
  displayWork = displayWork.join('');
  worksec.innerHTML = displayWork;
  console.log(displayWork);

  const seeProject = document.querySelectorAll('.tech-project-btn');

  seeProject.forEach((button) => {
    console.log('button');
    button.addEventListener('click', (e) => {
      console.log('clicked me', e.target.classList);
      if (e.target.classList.contains('tech-project-btn')) {
        popContainer.style.display = 'block';
        // const id = parseFloat(e.target.id);
        // const search = details.find((x) => x.id === id);
        // console.log(id,'id');

       
      }
    });
  });

  // seeProject.addEventListener('click', ()=>{
  //     console.log('click see project')
  // })
});

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
