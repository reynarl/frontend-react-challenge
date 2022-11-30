import HOME_ICON from '../assets/cil_house.svg'
import TWITTER_ICON from '../assets/icon_twitter.svg'
import FB_ICON from '../assets/icon_fb.svg'
import INSTA_ICON from '../assets/icon_instagram.svg'
import WHATS_ICON from '../assets/WhatsApp_logo.svg'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='d-flex justify-content-center flex-wrap'>
          <div className='description'>
            <img className='description__home-icon' src={HOME_ICON} alt='home icon' />
            <p>It is a long established fact that a <span className='d-block'>reader will be distracted by the</span><span className='d-block'>readable content of a page</span><span className='d-block'>whenters.</span></p>
            <ul className='d-flex'>
              <li><img src={TWITTER_ICON} alt='twitter icon' /></li>
              <li><img src={FB_ICON} alt='facebook icom' /></li>
              <li><img src={INSTA_ICON} alt='instagram icon' /></li>
            </ul>
          </div>
          <div className='about'>
            <h2>About Us</h2>
            <ul>
              <li>About</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
              <li>Faq</li>
            </ul>
          </div>
          <div className='navigate'>
            <h2>Navigate</h2>
            <ul>
              <li>How We Work</li>
              <li>Services</li>
              <li>Faq</li>
              <li>Contact</li>
              <li>Free Quote</li>
            </ul>
          </div>
          <div className='contact'>
            <h2>Contact Us</h2>
            <ul>
              <li>Ricardo Margain 444</li>
              <li>Call: +52 81 1234 5678</li>
              <li>Email: info@challenge.com</li>
            </ul>
            <img src={WHATS_ICON} alt='whatsapp icon' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
