import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-list">
          <div className="footer-list-item">
            <img className="footer-beans"
              src="./assets/icons/beans-transparent-black.svg"
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
            src="./assets/icons/beans-solid-black.svg"
            alt="coffee beans icon"
            draggable="false" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
