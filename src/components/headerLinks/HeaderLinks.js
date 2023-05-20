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
        <a href="#">Coffee house</a>
      </li>
      <li className="menu-list-item">
        <a href="#">Our coffee</a>
      </li>
      <li className="menu-list-item">
        <a href="#">For your pleasure</a>
      </li>
    </ul>
  );
}

export default HeaderLinks;