import { Link } from 'react-router-dom';

import './headerLinks.scss';
import whiteBeans from '../../assets/icons/beans-transparent-white.svg'

const HeaderLinks = () => {
  return (
    <ul className="menu-list">
      <li className="menu-list-item">
        <img className="header-beans"
          src={whiteBeans}
          alt="coffee beans icon"
          draggable="false" />
        <Link to='/'>Coffee house</Link>
      </li>
      <li className="menu-list-item">
        <Link to='/OurCoffee'>Our coffee</Link>
      </li>
      <li className="menu-list-item">
        <Link to='/'>For your pleasure</Link>
      </li>
    </ul>
  );
}

export default HeaderLinks;