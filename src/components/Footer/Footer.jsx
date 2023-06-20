
import './Footer.scss';
import logo from '../../assets/images/burguer.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
  return (
    <footer>
      <div className='footer-section'>
        <img src={logo} alt='logo' />
      </div>
      <div className='footer-section'>
        <h3>Contacto</h3>
        <p>Escribinos a: contacto@hamburgueseria.com</p>
      </div>
      <div className='footer-section'>
        <h3>Redes sociales</h3>
        <ul>
          <li>
            <a href='https://www.facebook.com/'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com/'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;



