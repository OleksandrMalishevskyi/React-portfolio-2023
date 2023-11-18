import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
faUserGraduate,
faBrain,
} from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  { to: '/', icon: faHome, text: 'Home', className: '' },
  { to: '/about', icon: faUser, text: 'About', className: 'about-link' },
  {
    to: '/education',
    icon: faUserGraduate,
    text: 'Education',
    className: 'education-link',
  },
  {
    to: '/skills',
    icon: faBrain,
    text: 'Skills',
    className: 'skills-link',
  },
  {
    to: '/portfolio',
    icon: faSuitcase,
    text: 'Portfolio',
    className: 'portfolio-link',
  },
  {
    to: '/contact',
    icon: faEnvelope,
    text: 'Contact',
    className: 'contact-link',
  },
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/oleksandr-malishevskyi-technotiger/',
    icon: faLinkedin,
  },
  { href: 'https://github.com/OleksandrMalishevskyi', icon: faGithub },
  {
    href: 'https://www.youtube.com/channel/UC7exfGfvkeMXcrV3jK-umbA',
    icon: faYoutube,
  },
]

export { navLinks, socialLinks }
