import { nanoid } from 'nanoid';
import resume from '../assets/resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Luke Zhang', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: "Luke Zhang's Personal Website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Software Engineer',
  name: 'Luke Zhang',
  subtitle: '@ UToronto Computer Science',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Exceptional and inquisitive undergraduate computer scientist with superb leadership and programming skills developed at the #1 university in Canada and professional experience.',
  skills: ['Self-learner'],
  paragraphTwo: '',
  paragraphThree: '',
  resume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'codeCollab.png',
    title: 'CodeCollab',
    info:
      'A collaborative code editor similar to how Google Docs is a collaborative text editor. Users can create accounts, create projects, preview projects, share projects, and even extract text from images of code.',
    info2: 'Invested 500+ combined hours and achieved top marks in Programming on the Web',
    url: 'https://codecollab.me',
    demo: 'https://www.youtube.com/watch?v=vf6fZMGhPdo',
    repo: 'https://github.com/Smawllie/CodeCollab', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pickEasy.png',
    title: 'PickEasy Rewards',
    info:
      'A web app that allows restaurants to create an achievement-based, gamified loyalty and rewards system for their customers.',
    info2:
      'Won 1st place as the best project in a course-wide competition resulting in a noteworthy 5% total grade increase',
    url: 'https://pick-easy.herokuapp.com/#/',
    demo: 'https://youtu.be/GQPerJtF0yM',
    repo: 'https://github.com/Smawllie/pick-easy', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me!',
  email: 'mailto:lukel.zhang@mail.utoronto.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luke-zh',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Smawllie',
    },
  ],
};

// SETTINGS
export const settingData = {
  fadeDuration: 300,
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
