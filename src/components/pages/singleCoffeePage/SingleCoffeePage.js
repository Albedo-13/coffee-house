import { useParams } from "react-router-dom";
import Header from "../../header/Header";
import SingleCoffee from "../../singleCoffee/SingleCoffee";
import Footer from "../../footer/Footer";

const SingleCoffeePage = (props) => {
  const { coffeeId } = useParams();
  const data = props.data;

  const findProductById = (id) => data.find((item) => item.id === +id);

  const product = findProductById(coffeeId);
  return (
    <>
      <Header />
      <SingleCoffee product={product} />
      <Footer style={{ paddingTop: '30px' }} />
    </>
  );
}

export default SingleCoffeePage;