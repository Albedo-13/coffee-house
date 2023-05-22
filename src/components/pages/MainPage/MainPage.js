import Header from '../../header/Header';
import AboutUs from '../../aboutUs/AboutUs';
import OurBest from '../../ourBest/OurBest';
import Footer from '../../footer/Footer';

const MainPage = (props) => {
  return (
    <>
      <Header currPage={'MainPage'} />
      <main>
        <AboutUs />
        <OurBest data={props.data} />
      </main>
      <Footer style={{paddingTop: '30px'}} />
    </>
  );
}

export default MainPage;