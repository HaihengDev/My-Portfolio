import html from '../assets/html.svg';
import css from '../assets/css.svg';
import tailwind from '../assets/tailwind.svg';
import javascript from '../assets/javascript.svg';
import typescript from '../assets/typescript.svg';
import react from '../assets/react.svg';
import node from '../assets/nodejs.svg';
import mysql from '../assets/mysql.png';
import mongodb from '../assets/mongo.png';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import cloudflare from '../assets/cloudflare.svg';

export const techCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'Tailwind CSS', icon: tailwind },
      { name: 'JavaScript', icon: javascript },
      { name: 'TypeScript', icon: typescript },
      { name: 'React', icon: react },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: node },
      { name: 'MySQL', icon: mysql },
      { name: 'MongoDB', icon: mongodb },
    ],
  },
  {
    title: 'Tools & Deployment',
    items: [
      { name: 'Git', icon: git },
      { name: 'GitHub', icon: github },
      { name: 'Cloudflare', icon: cloudflare },
    ],
  },
];
