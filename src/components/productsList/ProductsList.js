import './productsList.scss';
import ProductsListItem from '../productsListItem/ProductsListItem';

const ProductsList = (props) => {
  const createProductsList = () => {
    const data = props.data;

    return data.map((item) => {
      return (
        <ProductsListItem key={item.id} {...item} />
      );
    });
  }

  return (
    <section className="products-list">
      <div className="container">
        <div className="products-list-wrapper">
          {createProductsList()}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;