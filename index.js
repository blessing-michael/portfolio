const details = [{
  id: 1,
  title: 'Tonic',
  platform: 'CANOPY',
  stack: 'Back End Dev',
  price: 2015,
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  img: './images/work-1.png',
  technology: ['HTML', 'CSS', 'Javascript'],
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
  longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry,',
  img: './images/work-2.png',
  technology: ['HTML', 'CSS', 'Javascript'],
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
  longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  img: './images/work-3.png',
  technology: ['HTML', 'CSS', 'Javascript'],
  livelink: 'https://blessing-michael.github.io/portfolio/',
  linkSource: 'https://github.com/blessing-michael/portfolio',
},
{
  id: 4,
  title: 'Multi-Post Stories',
  platform: 'CANOPY',
  stack: 'Back End Dev',
  price: 2015,
  img: './images/work4.png',
  featuredimg: '/images/work4.png',

  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  technology: ['HTML', 'CSS', 'Javascript'],
  livelink: 'https://blessing-michael.github.io/portfolio/',
  linkSource: 'https://github.com/blessing-michael/portfolio',
},
];

const Navicon = document.querySelector('.bar-div');
const linksContainer = document.querySelector('.links-container');
const closeIcon = document.querySelector('.close-icon');
const allNavlinks = document.querySelectorAll('.nav-info');
const popContainer = document.querySelector('.popup-Container');
const worksec = document.getElementById('work');
const error = document.querySelector('.error-message');
const form = document.querySelector('.form');
const email = document.querySelector('#email');

function generateWork() {
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
}
generateWork();

const seeProject = document.querySelectorAll('.tech-project-btn');
seeProject.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.classList.contains('tech-project-btn')) {
      popContainer.style.display = 'block';
      const id = parseFloat(e.target.id);
      const search = details.find((x) => x.id === id);

      if (search) {
        popContainer.innerHTML = `<div class="pop-up">
        <div class="popup-info">
        <i class="fa-solid fa-xmark pop-close"></i>
          <h5 class="popup-h5">${search.title}</h5>
          
          <div class="pop-stack">
             <div class="pop-stackname">
              <p class="platform">${search.platform}</p>
              <p class="pop-counter">  <span class="prof-span">
              <img src="./images/Counter.png" alt="counter" /></span
            >${search.stack}</p>
              <p  class="pop-counter"> <span class="prof-span">
              <img src="./images/Counter.png" alt="counter" /></span
            >${search.price}</p>
             </div>
            
            <div class="popup-img">
              <img src=${search.img} < alt=${search.title} class="popup-image">
            </div>
            <div class="popup-description">
             <div class="popup-p">
            <p class="popup-pone">${search.longdescription}</p>
           
             </div>
             <div >
             <div class="popup-techstack">
             ${search.technology.map((x) => `<p class="popup-pone">${x}</p>`).join('')}
             
             </div>
            <div class="popup-btn">
            <a href=${search.livelink} class="see-live"
            ><img src="./images/Enabled1.png" alt="see live" class= "pop-enabled"
          /></a>
            <a href=${search.linkSource} class="see-live"
             ><img src="./images/Enabled.png" class= "pop-enabled" alt="see live"
          /></a>
                
                </div>
            </div>
          </div>
        </div>
      </div>
      
`;
      }
      const popClose = document.querySelector('.pop-close');
      popClose.addEventListener('click', () => {
        popContainer.style.display = 'none';
      });
    }
  });
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

// FORM VALIDATE

function errorMessage() {
  if (email.value !== email.value.toLowerCase()) {
    error.textContent = 'Please ensure that email address must be in lower case';
  }
}

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

function storeData() {
  // store user input in object
  const userData = {
    name: nameInput.value,
    email: emailInput.value,
    message: msgInput.value,

  };
