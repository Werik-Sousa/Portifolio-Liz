//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';


// navigation
export const navigation = [
  {
    name: 'Projetos',
    href: 'projetos',
  },
  {
    name: 'Posters',
    href: 'posters',
  },
  {
    name: 'TASS',
    href: 'home',
  },
  {
    name: 'Sobre mim',
    href: 'about',
  },
  {
    name: 'Contato',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// projects
export const projectsGrid = [
  {
    id: 1,
    title: 'App FBC',
    year: "2025",
    link: '#',
    images: [Project1, Project2],
  },
  {
    id: 2,
    title: 'App Bilhete Único',
    year: "2025",
    link: '#',
    images: [Project3, Project4],
  },
  {
    id: 3,
    title: 'Nissan',
    year: "2025",
    link: '#',
    images: [Project5, Project6],
  },
];

