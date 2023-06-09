import { Link } from 'react-router-dom';

import './headerLinks.scss';
import whiteBeans from '../../resources/icons/beans-transparent-white.svg'

const HeaderLinks = () => {
  return (
    <ul className="menu-list">
      <li className="menu-list-item">
        <img className="menu-list-beans"
          src={whiteBeans}
          alt="coffee beans icon"
          draggable="false" />
        <Link to='/'>Coffee house</Link>
      </li>
      <li className="menu-list-item">
        <Link to='/OurCoffee'>Our coffee</Link>
      </li>
      <li className="menu-list-item">
        <Link to='/ForPleasure'>For your pleasure</Link>
      </li>
    </ul>
  );
}

export default HeaderLinks;