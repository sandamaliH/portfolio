import { nanoid } from 'nanoid';
import { FaGit, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact, FaSymfony, FaWordpress } from 'react-icons/fa';

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
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'PHP',
    icon: <FaPhp className='h-16 w-16 text-green-600' />,
    text: 'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages which is widely-used and free.',
  },
  {
    id: nanoid(),
    title: 'Wordpress',
    icon: <FaWordpress className='h-16 w-16 text-green-600' />,
    text: 'Wordpress is a web content management system for creating blogs, websites, mailing lists, galleries, membership sites, LMS and online stores',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGit className='h-16 w-16 text-green-600' />,
    text: 'Git is a distributed version control system that tracks changes in any set of computer files, usually used for collaborative development of source code.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: '/project-images/jobster.jpg',
    url: 'https://jobsterrportal.netlify.app/',
    github: 'https://github.com/sandamaliH/react-job-portal',
    title: 'Job portal',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: '/project-images/online-store.jpg',
    url: 'https://online-store-application.netlify.app/',
    github: 'https://github.com/sandamaliH/react-online-store',
    title: 'Online store',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: '/project-images/github-user-search.jpg',
    url: 'https://searchguser.netlify.app/',
    github: 'https://github.com/sandamaliH/react-github-user-search',
    title: 'Search GitHub user',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: '/project-images/image-unsplash.jpg',
    url: 'https://image-unsplash.netlify.app/',
    github: 'https://github.com/sandamaliH/react-image-unsplash',
    title: 'Image unsplash',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: '/project-images/mixmaster.jpg',
    url: 'https://mixmasterb.netlify.app/',
    github: 'https://github.com/sandamaliH/react-mixmaster-app',
    title: 'Mixmaster',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: '/project-images/contentful.jpg',
    url: 'https://contentful-cmsa.netlify.app/',
    github: 'https://github.com/sandamaliH/react-contentful-cms',
    title: 'Contentful',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
