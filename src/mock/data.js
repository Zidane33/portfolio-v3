import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: "Zidan's portfolio",
  lang: 'en',
  description: 'Welcome to my portfolio',
};

// HERO DATA
export const heroData = {
  title: 'Hey there, my name is ',
  name: 'Zidan',
  subtitle: "I'm a full stack software developer",
  cta: 'Find Out More',
};

// ABOUT DATA
export const aboutData = {
  img: 'hero2.png',
  paragraphOne: 'I am a full-stack engineer, currently living in Toronto, Canada.',
  paragraphTwo:
    'In my free time, I study human computer interface and the psychology of human computer interaction. I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques.',
  paragraphThree:
    'I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.',
  resume: 'https://drive.google.com/file/d/12nSMDKmJqe8KIX7-8vFTg-l3mrCg2ttT/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'zidane-store.png',
    title: 'Zidane-Store',
    info: `An ecommerce full stack app. Using a React and Redux frontend pulling from a Spring-Boot Backend API that reads from a postgres database as well as handles the Stripe API integration.`,
    info2:
      'I am also using Firebase to implement email and OAuth user managemtn system. Deployed using AWS S3 and AWS RDS. Using AWS CodeLine and CodeBuild for a CI/CD solution.',
    url: 'http://zidane-store-react-bucket.s3-website-us-east-1.amazonaws.com/',
    repo: 'https://github.com/Zidane33/stripe-react-ecommerce-',
    tech: ['react', 'stripe api', 'spring boot', 'aws'],
  },
  {
    id: uuidv1(),
    img: 'bookworm.png',
    title: 'BookWorm',
    info: `A full stack solution for graduate students to keep track of books used in their research. Using the Google books API, Flask for the server and PostgresSQL for the database, it's a super lightweight server rendered app.`,
    info2: '',
    url: 'https://book-w-orm.herokuapp.com/',
    repo: 'https://github.com/Zidane33/BookWorm-backend',
    tech: ['python', 'flask', 'bootstrap'],
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
  {
    id: uuidv1(),
    img: 'gsalogo.png',
    title: 'GSA Carleton',
    info: `My former workplace has a wordpress website that is very slow. I created a prototype react static site generator to pull data from wordpress backend and render it quicker, resulting in a much better user expeirence.`,
    info2: 'Compare with the older website at gsacarleton.ca',
    url: 'https://vibrant-perlman-474969.netlify.app/',
    repo: 'https://github.com/Zidane33/GSA',
    tech: ['react', 'gatsby', 'graphql', 'headless wordpress'],
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
      url: 'https://twitter.com/Zidane_Dev',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zidan-hisham-15002795/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Zidane33',
    },
  ],
};
