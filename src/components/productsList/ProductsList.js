import './productsList.scss';
import ProductsListItem from '../productsListItem/ProductsListItem';

const ProductsList = (props) => {
  const createProductsList = () => {
    const data = props.data;

    return data.map((item) => {
      const {id, ...itemProps} = item;
      return (
        <ProductsListItem key={id} {...itemProps} />
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