import { Link } from 'react-router-dom';

import './productsListItem.scss';

const ProductsListItem = (props) => {
  const { id, thumbnail, name, country, price } = props;
  
  return (
    <Link to={`../OurCoffee/${id}`} className="products-list-item">
      <div>
        <img className="products-list-item-img"
          src={thumbnail}
          alt="product"
          draggable="false" />
        <div className="products-list-item-name">{name}</div>
        <div className="products-list-item-country">{country}</div>
        <div className="products-list-item-price">{price}$</div>
      </div>
    </Link>
  );
}

export default ProductsListItem;