import { nanoid } from 'nanoid';
import { FaCpanel, FaDatabase, FaDocker, FaGit, FaHtml5, FaJs, FaPhp, FaReact, FaWordpress } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-green-600' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-green-600' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-green-600' />,
    text: 'Proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'PHP',
    icon: <FaPhp className='h-16 w-16 text-green-600' />,
    text: 'Expertise in PHP, building backend web applications using Yii1.1, Laravel(basics), and Symfony with other relavent technologies',
  },
  {
    id: nanoid(),
    title: 'Wordpress',
    icon: <FaWordpress className='h-16 w-16 text-green-600' />,
    text: 'Highly skilled in developing websites using WordPress including image galleries, mailing, and online stores. And integrating SEO plugins and google analytics to grab data for marketing purposes',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGit className='h-16 w-16 text-green-600' />,
    text: 'Proficiency in using Git as the version control system that tracks changes in repositories including git branching, feature deployment with versioning.',
  },
  {
    id: nanoid(),
    title: 'MySql',
    icon: <FaDatabase className='h-16 w-16 text-green-600' />,
    text: 'Skilled in designing and implementing database solutions using MySql. Executing MySql queries for remote and localhost databases to perform system requirements',
  },
  {
    id: nanoid(),
    title: 'Docker',
    icon: <FaDocker className='h-16 w-16 text-green-600' />,
    text: 'Understanding about Docker containerization in order to encapsulate applications and their dependencies into isolated containers',
  },
  {
    id: nanoid(),
    title: 'CPanel',
    icon: <FaCpanel className='h-16 w-16 text-green-600' />,
    text: 'Solid understanding about maintaining websites in the production environment including database management, backup, subdomains, email handling, coludflare accounts and google analytics',
  },
];

export const wordpressProjects = [
  {
    id: nanoid(),
    img: '/project-images/cleaning-company1.jpg',
    url: 'https://www.omegafacility.com.au/',
    title: 'Corporate - Cleaning Company',
    text: 'Wordpress website for corporate cleaning company with the use of WPBakery. Integrated with the google analytics and social media. Maintain website with relevant digital marketing strategies.',
  },
  {
    id: nanoid(),
    img: 'project-images/e-commerce.jpg',
    url: 'https://qa.testing.helavista.lk/',
    title: 'E-commerce website',
    text: 'Online shop website with e-commerce functionalities. Allow customers to make orders and all orders manage by the website. Product management, contact form, Email, Order manage, Online payment are some of the functionalities of the website.',
  },
  {
    id: nanoid(),
    img: 'project-images/cleaning-company2.jpg',
    url: 'https://inlfacilityservice.com.au/',
    title: 'Corporate - Cleaning Company',
    text: 'Wordpress website build by using Elementor and integrated google analytics, images gallery for latest projects are included for the website.',
  },
  {
    id: nanoid(),
    img: 'project-images/it-services.jpg',
    url: 'https://codex.systems/',
    title: 'Corporate - IT service provider',
    text: 'Corporate website for IT service provider which is build by using Wordpress and Elementor. Added MegaMenu feature in order to showcase all levels of services that company provided to the clients.',
  },
  {
    id: nanoid(),
    img: 'project-images/web-design.jpg',
    url: 'https://www.webaholictechnologies.com/',
    title: 'Corporate - Web design',
    text: '',
  }
];

export const reactProjects = [
  {
    id: nanoid(),
    img: '/project-images/jobster.jpg',
    url: 'https://jobsterrportal.netlify.app/',
    github: 'https://github.com/sandamaliH/react-job-portal',
    title: 'Job portal',
    text: '',
  },
  {
    id: nanoid(),
    img: '/project-images/online-store.jpg',
    url: 'https://online-store-application.netlify.app/',
    github: 'https://github.com/sandamaliH/react-online-store',
    title: 'Online store',
    text: '',
  },
  {
    id: nanoid(),
    img: '/project-images/github-user-search.jpg',
    url: 'https://searchguser.netlify.app/',
    github: 'https://github.com/sandamaliH/react-github-user-search',
    title: 'Search GitHub user',
    text: '',
  },
  {
    id: nanoid(),
    img: '/project-images/image-unsplash.jpg',
    url: 'https://image-unsplash.netlify.app/',
    github: 'https://github.com/sandamaliH/react-image-unsplash',
    title: 'Image unsplash',
    text: '',
  },
  {
    id: nanoid(),
    img: '/project-images/mixmaster.jpg',
    url: 'https://mixmasterb.netlify.app/',
    github: 'https://github.com/sandamaliH/react-mixmaster-app',
    title: 'Mixmaster',
    text: '',
  },
  {
    id: nanoid(),
    img: '/project-images/contentful.jpg',
    url: 'https://contentful-cmsa.netlify.app/',
    github: 'https://github.com/sandamaliH/react-contentful-cms',
    title: 'Contentful',
    text: '',
  },
];
