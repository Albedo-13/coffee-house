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
            <a href="#">Coffee house</a>
          </div>
          <div className="footer-list-item">
            <a href="#">Our coffee</a>
          </div>
          <div className="footer-list-item">
            <a href="#">For your pleasure</a>
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
