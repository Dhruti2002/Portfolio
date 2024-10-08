import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/projects',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Dhruti',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Patel',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Vadodara, Gujarat, India',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+91 8866422869',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'dhrutipatel1120@gmail.com',
  },
];

export const stats = [
  {
    id: 1,
    no: '50+',
    title: 'Problems <br /> solved',
  },

  {
    id: 2,
    no: '15+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '5+',
    title: 'Participating <br /> Coding Challenges',
  },

  // {
  //   id: 4,
  //   no: '3',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Ongoing',
    title: 'Android Application Development Projects <span> Developer </span>',
    desc: 'Working on multiple Android applications as part of academic projects, including women saftey application. Gained experience in UI/UX design, data handling, and integrating various APIs.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Learning Stage',
    title: 'Web Development Projects <span> Full Stack Developer </span>',
    desc: 'Developed several small-scale web applications using React and Node.js, focusing on building responsive user interfaces and efficient back-end systems.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Beginner',
    title: 'Machine Learning Practice',
    desc: 'Engaged in self-study and hands-on practice with basic machine learning algorithms, focusing on understanding concepts like Decision Trees and  Bayes\' Theorem.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022 - present',
    title: 'B.Tech &nbspCSE <br />ITM(SLS) Baroda University ',
    desc: 'Currently pursuing B.Tech in Computer Science and Engineering, focusing on building a strong foundation in software development, data structures, algorithms, and system design. Actively involved in projects related to Android application development and web development, with a keen interest in enhancing skills in full-stack development',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '92',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '85',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '75',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '60',
  },

  {
    id: 7,
    title: 'Bootstrap',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '85',
  },

  {
    id: 9,
    title: 'Java',
    percentage: '80',
  },

  {
    id: 10,
    title: 'Python',
    percentage: '75',
  },

  {
    id: 11,
    title: 'XML',
    percentage: '55',
  },

  {
    id: 12,
    title: 'MySQL',
    percentage: '90',
  },  
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Quiz',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Audience : ',
        desc: 'Students',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://dhruti2002.github.io/Quiz/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Student Assignment Submission',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Student Assignment Submission System',
      },
      {
        icon: <FiUser />,
        title: 'Audience : ',
        desc: 'Students',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'PHP, Laravel, MySQL, HTML, CSS, JS, Bootstrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Dhruti2002/laravel-project',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Product Inventory System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Audience : ',
        desc: 'Businesses',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JQuery, Bootstap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://dhruti2002.github.io/Product_inventory/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Python Project Color Detection',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Python',
      },
      {
        icon: <FiUser />,
        title: 'Audience : ',
        desc: 'Students',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Dhruti2002/python-project-color-detection',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Password Generator',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Audience : ',
        desc: 'Non-Tech user',
      },
      {
        title: 'Language : ',
        desc: 'Html, CSS, Javascript',
      },
      {
        title: 'Preview : ',
        desc: 'https://dhruti2002.github.io/Password_Generator/',
      },
    ],
  },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
