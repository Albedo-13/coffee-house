import './aboutUs.scss';
import blackBeans from '../../assets/icons/beans-solid-black.svg';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-wrapper">
          <h2 className="about-us-title">About Us</h2>
          <div className="about-us-separator">
            <img className="about-us-separator-img"
              src={blackBeans}
              alt="coffee beans icon"
              draggable="false" />
          </div>
          <p className="about-us-description">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
          <p className="about-us-description">Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;