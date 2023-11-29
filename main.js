const menuHamIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuIcon = document.querySelector('#close-icon');
const projectContainer = document.querySelector('.project-container');
const skillContainer = document.querySelector('.skill-container');
const projectDetail = document.querySelector('#project-detail')
const projectDetailContainer = document.querySelector('#project-detail')
const presentationSection = document.querySelector('.presentation');
const projectsSection = document.querySelector('.projects');
const abilitiesSection = document.querySelector('.abilities');
const contactSection = document.querySelector('.contact');
const listItemsNav = document.querySelector('.nav-li');

menuHamIcon.addEventListener('click', OpenMobileMenu);
closeMenuIcon.addEventListener('click', CloseMobileMenu);
// listItemsNav.addEventListener('click', closeProjectDetail);

function OpenMobileMenu() {
  mobileMenu.classList.remove('inactive');
  menuHamIcon.classList.add('inactive');
  presentationSection.classList.remove('inactive');
  projectsSection.classList.remove('inactive');
  abilitiesSection.classList.remove('inactive');
  toggleContactSection(true);
}

function CloseMobileMenu() {
  mobileMenu.classList.add('inactive');
  menuHamIcon.classList.remove('inactive');
}

function openProjectDetail(event){
  projectDetailContainer.classList.remove('inactive');
  projectsSection.classList.add('inactive');
  presentationSection.classList.add('inactive');
  abilitiesSection.classList.add('inactive');
  menuHamIcon.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  contactSection.setAttribute('id', 'inactive');
  closeMenuIcon.classList.remove('inactive');


  projectDetailContainer.innerHTML = '';

  const project = projectList.find(prod => {
    return prod.image == event.srcElement.getAttribute("src");
  });

  const projectDetailClose = document.createElement('div');
  projectDetailClose.classList.add('project-detail-close');

  const projectCloseImg = document.createElement('img');
  projectCloseImg.setAttribute('src', './icons/x.svg');
  projectCloseImg.setAttribute('id', 'close-icon-project');

  projectCloseImg.addEventListener('click', closeProjectDetail);

  const projectDetailInfo = document.createElement('div');
  projectDetailInfo.classList.add('project-detail-info');

  const projectImg = document.createElement('img');
  projectImg.classList.add('project-detail-info-image');
  projectImg.setAttribute('src', project.image);

  const projectTitle= document.createElement('h1');
  projectTitle.innerText = project.name;

  const projectDescription = document.createElement('p'); 
  projectDescription.innerText = project.description; 

const projectButtonRepository = document.createElement('button'); 
projectButtonRepository.classList.add('button-repository');
const repositoryURL = project.repository;


const repositoryHTML = `<img src="./icons/GitHub.svg" alt="GitHub icon">Repository`;
projectButtonRepository.innerHTML = repositoryHTML;

projectButtonRepository.addEventListener('click', () => {
  window.location.href = repositoryURL;
});

const projectButtonDemo = document.createElement('button'); 
projectButtonDemo.classList.add('button-demo');
const demoURL = project.demo;

const demoHTML = `<img src="./icons/www.svg" alt="Network icon">Demo`;
projectButtonDemo.innerHTML = demoHTML;

projectButtonDemo.addEventListener('click', () => {
  window.location.href = demoURL;
});

  projectDetailClose.appendChild(projectCloseImg);

  projectDetailInfo.appendChild(projectImg);
  projectDetailInfo.appendChild(projectTitle);
  projectDetailInfo.appendChild(projectDescription);
  projectDetailInfo.appendChild(projectButtonRepository);
  projectDetailInfo.appendChild(projectButtonDemo);

  projectDetailContainer.appendChild(projectDetailClose);
  projectDetailContainer.appendChild(projectDetailInfo);
}

function closeProjectDetail(){
  projectDetailContainer.classList.add('inactive');
  presentationSection.classList.remove('inactive');
  projectsSection.classList.remove('inactive');
  abilitiesSection.classList.remove('inactive');
  menuHamIcon.classList.remove('inactive');
  contactSection.removeAttribute('id');
}

const projectList = [];
projectList.push({
  name: 'Lord Multitask Landing Page',
  image: './icons/LordWebsite.png',
  description: 'I collaborated with Lord Multitask to create a landing page for their monthly magazines, where more than 10,000 people have visited this page to read their magazine.',
  repository: 'https://github.com/alejandrolozanoz/lordmt-magazine',
  demo: 'https://www.lordmt.com/'
});
projectList.push({
  name: 'Interactive Ecommerece',
  image: './icons/yardSaleWebsite.png',
  description: 'In the "Front End Practical with JavaScript" course, I designed and developed an interactive online store using HTML, CSS, and JavaScript. This project, named "Yard Sale," provided me with valuable hands-on experience in utilizing JavaScript to enhance the user experience. It allowed me to add my own unique touch to the project and taught me a great deal about the practical application of JavaScript in web development.',
  repository: 'https://github.com/Maulozano02/curso-frontend-developer-javascript-practico',
  demo: 'https://maulozano02.github.io/curso-frontend-developer-javascript-practico/'
});
projectList.push({
  name: 'Batatabit Responsive Page',
  image: './icons/batatabit.jpg',
  description: 'In the "Responsive Design: Mobile First" course, I crafted a responsive landing page for a fictional company called "Batabit." This project honed my HTML and CSS skills as we learned to prioritize mobile devices and progressively enhance designs for larger screens. I gained valuable insights into media queries and flexible layouts, equipping me to create adaptable web experiences across various devices.',
  repository: 'https://github.com/Maulozano02/Batatabit',
  demo: 'https://maulozano02.github.io/Batatabit/'
});
projectList.push({
  name: 'Rapid Race Python Minigame',
  image: './icons/rapid-race.png',
  description: '"Rapid Race" is an exciting game developed in Python using the Pygame library. In this game, players take the wheel of a fast and agile car, navigating a challenging course filled with obstacles that will put their driving skills and reflexes to the test.',
  repository: 'https://github.com/Maulozano02/rapid-race',
  demo: 'https://github.com/Maulozano02/rapid-race'
});
projectList.push({
  name: 'Google clone',
  image: './icons/clonGoogle.png',
  description: 'I undertook the challenge of creating a replica of Google homepage using solely HTML and CSS as part of this project. It involved meticulously recreating the layout and design elements.',
  repository: 'https://github.com/Maulozano02/ClonInicioGoogle',
  demo: 'https://maulozano02.github.io/ClonInicioGoogle/'
});

function renderProjects(arr){
  for(project of arr){
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
          
    const projectImg = document.createElement('img');
    projectImg.setAttribute('src', project.image);
    projectImg.classList.add('project-image');
    projectImg.addEventListener('click', openProjectDetail);
          
    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');
    
    const projectIcon = document.createElement('img');
    projectIcon.setAttribute('src', './icons/Vector.svg')
    
          
    const projectName= document.createElement('p');
    projectName.innerText = project.name;
          
    projectInfo.appendChild(projectIcon);
    projectInfo.appendChild(projectName);
          
    projectCard.appendChild(projectImg);
    projectCard.appendChild(projectInfo);
          
    projectContainer.appendChild(projectCard);
  }
}
renderProjects(projectList);



const skillList = [];
skillList.push({
  image: './icons/html.svg',
  title: 'HTML 5'
})
skillList.push({
  image: './icons/css.svg',
  title: 'CSS 3'
})
skillList.push({
  image: './icons/javascript.svg',
  title: 'JavaScript'
})
skillList.push({
  image: './icons/git.svg',
  title: 'Git'
})
skillList.push({
  image: './icons/reactjs.svg',
  title: 'React'
})
function renderSkills(arr){
  for(skill of arr){
    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');

    const skillImg = document.createElement('img');
    skillImg.setAttribute('src', skill.image);

    const skillTitle = document.createElement('h3');
    skillTitle.innerText = skill.title;

    skillCard.appendChild(skillImg);
    skillCard.appendChild(skillTitle);

    skillContainer.appendChild(skillCard);
  }
}
renderSkills(skillList);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

function toggleContactSection(visible) {
  if (visible) {
    contactSection.style.display = 'flex'; // Show the contact section
  } else {
    contactSection.style.display = 'none'; // Hide the contact section
  }
}
