import Header from '../../header/Header';
import AboutUs from '../../aboutUs/AboutUs';
import OurBest from '../../ourBest/OurBest';
import Footer from '../../footer/Footer';
import Spinner from '../../spinner/Spinner';

const MainPage = (props) => {
  return (
    <>
      <Spinner />
      <Header currPage={'MainPage'} />
      <AboutUs />
      <OurBest data={props.data} />
      <Footer style={{paddingTop: '30px'}} />
    </>
  );
}

export default MainPage;