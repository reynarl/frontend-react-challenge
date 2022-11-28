import { useState } from 'react'
import HOME_ICON from '../assets/cil_house.svg'

const Navbar = () => {
  const [isClick, setIsClick] = useState(false)
  return (
    <nav className='container-fluid'>
      <div className='container d-flex justify-content-between align-items-center'>
        <img className='home-icon' src={HOME_ICON} alt='home icon' />
        <div className='navbar__menu-hamburguer'>
          <img
            className='navbar__menu-hamburguer-icon'
            onClick={() => setIsClick(true)}
            src='../../public/icon-bars.svg'
            alt='menu icon'
          />
          <ul className={isClick ? 'navbar__menu-hamburguer-options active' : 'navbar__menu-hamburguer-options d-none'}>
            <li className='navbar__menu-hamburguer-close'>
              How We Work
              <span onClick={() => setIsClick(false)}>x</span>
            </li>
            <li>Services</li>
            <li>Free Quote</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
