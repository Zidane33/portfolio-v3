import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: "Zidane's portfolio", 
  lang: 'en',
  description: 'Welcome to my portfolio', 
};

// HERO DATA
export const heroData = {
  title: "Hey there, my name is ",
  name: 'Zidane',
  subtitle: "I'm a fullstack developer",
  cta: 'See More',
};

// ABOUT DATA
export const aboutData = {
  img: 'hero.jpg', //TODO
  paragraphOne: "I'm a an aspiring Web developer currently working as an Executive Director for a non-profit organization, working with graduate students to help them navigate graduate school. I'm a an aspiring Web developer currently working as an Executive Director for a non-profit organization, working with graduate students to help them navigate graduate school. My role is varied and always interesting, there is no typical day. Working for non-profits taught me a lot on how best to solve complex problems with limited resources, which is an invaluable skill in the tech world.",
  paragraphTwo: 'I am an aspiring web developer who is passionate about all things tech and programming. What started as a hobby blossomed into a career aspiration. I am fully committed to being the best developer I can be, and to that end I am seeking to develop my skills further working on software that will help people.',
  paragraphThree: "Outside of work I like to work on full stack web applications with a combination of React and backend frameworks like Nodejs and Python Flask.  This allows me play around with new technology and gives me a better understanding of the digital industry as a whole. It's also incredibly fun!",
  resume: 'https://www.resumemaker.online/es.php', //TODO
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(), 
    img: 'project.jpg', //TODO
    title: 'BookWorm',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Zidane33/BookWorm-backend',  
  },
  {
    id: uuidv1(),
    img: 'shopify.png',
    title: 'Shopify-Art-Store',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Zidane33/shopify-art-store',  
  },
  {
    id: uuidv1(),
    img: 'gsalogo.png',
    title: 'GSA Carleton',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Zidane33/GSA',  
  },
  {
    id: uuidv1(),
    img: 'react.png',
    title: 'Grad Portfolio',
    info: '',
    info2: '',
    url: 'https://jay-ramasubramanyam.com/',
    repo: 'https://github.com/Zidane33/grad-portfolios',  
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'midoz393@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/notZinedine',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zidane-mohamed-15002795/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Zidane33',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, 
};
