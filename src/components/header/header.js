import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container-wide">
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-list-item">
              <img className="header-beans"
                src="./assets/icons/beans-transparent-white.svg"
                alt="coffee beans icon"
                draggable="false" />
              <a href="#">Coffee house</a>
            </li>
            <li className="menu-list-item">
              <a href="#">Our coffee</a>
            </li>
            <li className="menu-list-item">
              <a href="#">For your pleasure</a>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="header-title">Our Coffee</h1>
    </header>
  );
}

export default Header;
