import { Link } from 'react-router-dom';

import './footer.scss';
import whiteBeans from '../../assets/icons/beans-transparent-black.svg'
import blackBeans from '../../assets/icons/beans-solid-black.svg'

const Footer = (props) => {
  return (
    <footer className="footer" style={props.style}>
      <div className="container">
        <div className="footer-list">
          <div className="footer-list-item">
            <img className="footer-beans"
              src={whiteBeans}
              alt="coffee beans icon"
              draggable="false" />
            <Link to='/'>Coffee house</Link>
          </div>
          <div className="footer-list-item">
            <Link to='/OurCoffee'>Our coffee</Link>
          </div>
          <div className="footer-list-item">
            <Link to='/ForPleasure'>For your pleasure</Link>
          </div>
        </div>

        <div className="footer-separator">
          <img className="footer-separator-img"
            src={blackBeans}
            alt="coffee beans icon"
            draggable="false" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
