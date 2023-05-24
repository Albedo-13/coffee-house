import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLinks from '../headerLinks/HeaderLinks';
import './header.scss';

import MainPageBackground from '../../resources/img/main-bg.webp';
import OurCoffeePageBackground from '../../resources/img/our-coffee-bg.webp';
import ForPleasurePageBackground from '../../resources/img/for-pleasure-bg.webp';
import whiteBeans from '../../resources/icons/beans-solid-white.svg'

const Header = (props) => {
  const [pageName] = useState(props.currPage);
  const paddingBottom = window.innerWidth > 768 ? '200px' : '50px';
  
  const [headerStyles, headerContent] = (function () {
    switch (pageName) {
      case 'MainPage':
        return [{
          backgroundImage: `url(${MainPageBackground})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          paddingBottom: paddingBottom,
        }, createMainPageView()];
      case 'OurCoffeePage':
      case 'SingleCoffeePage':
        return [{
          backgroundImage: `url(${OurCoffeePageBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }, createOurCoffeePageView()];
      case 'ForPleasurePage':
        return [{
          backgroundImage: `url(${ForPleasurePageBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }, createForPleasurePageView()];
      default:
        return;
    }
  })();

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
      <div className="container">
        <h1 className="header-title">Everything You Love About Coffee</h1>
        <div className="header-separator">
          <img className="header-separator-img"
            src={whiteBeans}
            alt="coffee beans icon"
            draggable="false" />
        </div>
        <h2 className="header-subtitle">We makes every day full of energy and taste <br />Want to try our beans?</h2>
        <Link to='/OurCoffee' className="header-btn" aria-label='more products'>Our Coffees</Link>
      </div>
    </>
  );
}

const createOurCoffeePageView = () => {
  return (
    <h1 className="header-title">Our Coffee</h1>
  );
}

const createForPleasurePageView = () => {
  return (
    <h1 className="header-title">For Your Pleasure</h1>
  );
}

export default Header;
