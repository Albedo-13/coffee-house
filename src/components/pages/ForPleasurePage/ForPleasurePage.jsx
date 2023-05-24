import Header from '../../header/Header';
import AboutBeans from '../../aboutBeans/AboutBeans';
import ProductsList from '../../productsList/ProductsList';
import Footer from '../../footer/Footer';

const ForPleasurePage = (props) => {
  return (
    <>
      <Header currPage={'ForPleasurePage'} />
      <main>
        <AboutBeans currPage={'ForPleasurePage'} />
        <ProductsList data={props.data} />
      </main>
      <Footer />
    </>
  );
}

export default ForPleasurePage;