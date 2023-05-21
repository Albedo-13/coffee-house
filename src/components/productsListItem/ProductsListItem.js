import { Link } from 'react-router-dom';

import './productsListItem.scss';

const ProductsListItem = (props) => {
  const itemProps = props;
  
  return (
    <Link to={`${itemProps.id}`} className="products-list-item">
      <div>
        <img className="products-list-item-img"
          src={itemProps.thumbnail}
          alt="product"
          draggable="false" />
        <div className="products-list-item-name">{itemProps.name}</div>
        <div className="products-list-item-country">{itemProps.country}</div>
        <div className="products-list-item-price">{itemProps.price}$</div>
      </div>
    </Link>
  );
}

export default ProductsListItem;