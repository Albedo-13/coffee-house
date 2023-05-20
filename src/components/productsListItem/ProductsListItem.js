import './productsListItem.scss';

const ProductsListItem = (props) => {
  const itemProps = props;
  // const imgPath = require(itemProps.img);

  return (
    <a href="#" className="products-list-item">
      <div>
        <img className="products-list-item-img"
          src={itemProps.img}
          alt="product"
          draggable="false" />
        <div className="products-list-item-name">{itemProps.name}</div>
        <div className="products-list-item-country">{itemProps.country}</div>
        <div className="products-list-item-price">{itemProps.price}$</div>
      </div>
    </a>
  );
}

export default ProductsListItem;