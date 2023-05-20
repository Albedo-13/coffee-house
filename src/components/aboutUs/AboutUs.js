import './aboutUs.scss';
import blackBeans from '../../assets/icons/beans-solid-black.svg';
import womanDrinkCoffee from '../../assets/img/about-img.webp'

const AboutUs = () => {
    return (
    <section className="about">
      <div className="container">
        <div className="about-wrapper">
          <img className="about-img"
            src={womanDrinkCoffee}
            alt="woman drinking coffee"
            draggable="false" />
          <div className="about-info">
            <h2 className="about-title">About our beans</h2>
            <div className="about-separator">
              <img className="about-separator-img"
                src={blackBeans}
                alt="coffee beans icon"
                draggable="false" />
            </div>
            <p className="about-description">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
            <p className="about-description">Afraid at highly months do things on at. Situation recommend objection do intention<br/> so questions.<br/> As greatly removed calling pleased improve an. Last ask him cold feel<br/> met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
          </div>
        </div>
        <div className="about-hr" role="separator"></div>
      </div>
    </section>
  )
}

export default AboutUs;