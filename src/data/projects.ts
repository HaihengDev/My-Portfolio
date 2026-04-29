// import react from '../assets/react.svg';
import node from '../assets/nodejs.svg';
import express from '../assets/express.png';
import mongodb from '../assets/mongo.png';
import cloudflare from '../assets/cloudflare.svg';
// import MartFrontend from '../assets/mart-frontend.png';
import MartBackend from '../assets/mart-backend.png';

export const projects = [
  {
    id: 1,
    name: 'Custom API for frontend Development',
    image:
      'https://www.techforceservices.com/wp-content/uploads/2025/08/custom-api-development-services.webp',
    description: [
      'Built a custom API using Node.js and Express to provide data for frontend applications during react development.',
      'Integrated MongoDB database to stroe and retreive application data effeciently.',
      'Created GET endpoints to fetch and serve data for UI rendering and testing.',
    ],
    tech: [node, express, mongodb],
    link: 'https://github.com/HaihengDev/Custom-API',
    isCompleted: true,
  },
  {
    id: 2,
    name: 'E-Commerce Web Service',
    image:
      'https://patternica.com/resources/b32cddd2-b552-4346-aabe-5a365281f58d.790%20(26).png',
    description: [
      'Developed scalable backend services using Node.js and Express.js.',
      'Designed and implemented RESTful APIs to manage products, users and orders.',
      'Integrated MongoDB with mongoose for effecient data modeling and storage.',
      'Implemented full CRUD operations for handling application data',
      'Built user authentication system for secure sign-up and log in functionality',
      'Developed protected routes and middleware to restrict unauthorized access.',
    ],
    tech: [node, express, mongodb],
    link: 'https://github.com/HaihengDev/E-Commerce-Web-Service',
    isCompleted: true,
  },
  // {
  //   id: 3,
  //   name: 'Mart-Management-System-Frontend',
  //   image: MartFrontend,
  //   description: [
  //     'Designed intuitive and user-centric interfaces.',
  //     'Delivered fast, responsive, and smooth UI performance.',
  //     'Connected frontend with backend APIs for real-time product data.',
  //     'Developed secure authentication and role-based access control.',
  //   ],
  //   tech: [react],
  //   link: 'https://github.com/HaihengDev/Mart-Management-System-Frontend',
  //   isCompleted: false,
  // },
  {
    id: 4,
    name: 'Mart-Management-System-Backend',
    image: MartBackend,
    description: [
      'Designed and developed scalable RESTful APIs for CRUD operations.',
      'Enforced robust data validation and secure persistence with MongoDB.',
      'Implemented cloud storage solutions for secure and scalable management of product images.',
      'Implemented secure authentication and role-based authorization.',
      'Protected sensitive data through encryption best practices.',
      'Built reporting and analytics features for business insights.',
      'Developed inventory monitoring for expiry and stock levels.',
      'Engineered a loyalty program with point tracking and reward mechanisms.',
    ],
    tech: [node, express, mongodb, cloudflare],
    link: 'https://github.com/HaihengDev/Mart-Management-System-Backend',
    isCompleted: false,
  },
];
