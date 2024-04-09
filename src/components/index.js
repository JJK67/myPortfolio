import {lazy} from 'react'

const Nav = lazy(() => import('./Nav.jsx'));
const Footer = lazy(() => import('./Footer.jsx'));

export {Nav, Footer}