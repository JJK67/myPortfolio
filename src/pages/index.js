import {lazy} from 'react'

const Home = lazy(() => import('./Home.jsx'));
const Contact = lazy(() => import('./Contact.jsx'));
const Projects = lazy(() => import('./Projects.jsx'));


export {Home, Contact, Projects}