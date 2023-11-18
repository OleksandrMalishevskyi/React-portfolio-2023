import './sidebar.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/6.TechnoTiger_image.svg'
import LogoSubtitle from '../../assets/images/5.TechnoTiger_slogan.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { navLinks, socialLinks } from './SidebarData';
import {
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="TechnoTiger" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            className={link.className}
            to={link.to}
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={link.icon} color="#4d4d4e" />
          </Link>
        ))}
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={link.icon}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
        ))}
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ff0000"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar