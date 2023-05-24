import { useState } from 'react';
import './aboutBeans.scss';

import womanDrinkCoffee from '../../assets/img/about-img.webp'
import HotCoffee from '../../assets/img/hot-coffee.webp';
import blackBeans from '../../assets/icons/beans-solid-black.svg'

const AboutBeans = (props) => {
  const [pageName] = useState(props.currPage);

  const [aboutBeansImg, aboutBeansTitle] = (function () {
    switch (pageName) {
      case 'OurCoffeePage':
        return [
          womanDrinkCoffee,
          'About our beans',
        ];
      case 'ForPleasurePage':
        return [
          HotCoffee,
          'About our goods',
        ];
      default:
        return;
    }
  })();

    return (
    <section className="about-beans">
      <div className="container">
        <div className="about-beans-wrapper">
          <img className="about-beans-img"
            src={aboutBeansImg}
            alt="woman drinking coffee"
            draggable="false" />
          <div className="about-beans-info">
            <h2 className="about-beans-title">{aboutBeansTitle}</h2>
            <div className="about-beans-separator">
              <img className="about-beans-separator-img"
                src={blackBeans}
                alt="coffee beans icon"
                draggable="false" />
            </div>
            <p className="about-beans-description">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
            <p className="about-beans-description">Afraid at highly months do things on at. Situation recommend objection do intention<br/> so questions.<br/> As greatly removed calling pleased improve an. Last ask him cold feel<br/> met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
          </div>
        </div>
        <div className="about-beans-hr" role="separator"></div>
      </div>
    </section>
  )
}

export default AboutBeans;