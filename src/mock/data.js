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
  subtitle: "I'm a software developer",
  cta: 'Find Out More',
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
    img: 'bookworm.png', 
    title: 'BookWorm',
    info: `A full stack solution for graduate students to keep track of books used in their research. Using the Google books API, Flask for the server and PostgresSQL for the database, it's a super lightweight server rendered app. I plan on building a React app for the front end to replace the Jinja2 template front end`,
    info2: '',
    url: 'https://book-w-orm.herokuapp.com/',
    repo: 'https://github.com/Zidane33/BookWorm-backend',  
    tech: ['python', 'flask', 'bootstrap'],
  },
  {
    id: uuidv1(),
    img: 'shopify.png',
    title: 'Shopify-Art-Store',
    info: `A headless Shopify solution for an aspiring artist in the Ottawa region. Gatsbyjs provides a great synergy with Shopify's back end with its native support for GraphQL queries`,
    info2: '',
    url: '',
    repo: 'https://github.com/Zidane33/shopify-art-store',  
    tech: ['react', 'stripe api', 'spring boot', 'aws'],
  },
  {
    id: uuidv1(),
    img: 'gsalogo.png',
    title: 'GSA Carleton',
    info: `My current workplace has a wordpress website that can be very slow. I am in the process of converting the website to utilize a React front end and query wordpress' back end for all the pages and posts.`,
    info2: '',
    url: '',
    repo: 'https://github.com/Zidane33/GSA',  
    tech: ['react', 'gatsby', 'graphql', 'headless wordpress'],
  },
  {
    id: uuidv1(),
    img: 'react.png',
    title: 'Grad Portfolio',
    info: `A fully deployed freelance project. It's graduate student portfolio built using Create-React-App. Hosted on Firebase with a custom domain name.`,
    info2: '',
    url: 'https://jay-ramasubramanyam.com/',
    repo: 'https://github.com/Zidane33/grad-portfolios',  
    tech: ['react'],
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
