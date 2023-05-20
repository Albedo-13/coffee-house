import { useState } from 'react';
import HeaderLinks from '../headerLinks/HeaderLinks';
import './header.scss';

import MainPageBackground from "../../assets/img/main-bg.png";
import OurCoffeePageBackground from "../../assets/img/our-coffee-bg.webp";
import whiteBeans from '../../assets/icons/beans-solid-white.png'

const Header = (props) => {
  const [pageName] = useState(props.currPage);

  const headerStyles = pageName === 'MainPage' ? {
    backgroundImage: `url(${MainPageBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '200px',
  } : {
    backgroundImage: `url(${OurCoffeePageBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  const headerContent = pageName === 'MainPage' ? createMainPageView() : createOurCoffeePageView();

  return (
    <header className="header" style={headerStyles}>
      <div className="container-wide">
        <nav className="menu">
          <HeaderLinks />
        </nav>
      </div>
      {headerContent}
    </header>
  );
}

const createMainPageView = () => {
  return (
    <>
      <h1 className="header-title" style={{ marginTop: '111px' }}>Everything You Love About Coffee</h1>
      <div className="header-separator">
        <img className="header-separator-img"
          src={whiteBeans}
          alt="coffee beans icon"
          draggable="false" />
      </div>
      <h2 className="header-subtitle">We makes every day full of energy and taste</h2>
      <h2 className="header-subtitle">Want to try our beans?</h2>
      <button className="header-btn">More</button>
    </>
  );
}

const createOurCoffeePageView = () => {
  return (
    <h1 className="header-title">Our Coffee</h1>
  );
}

export default Header;
