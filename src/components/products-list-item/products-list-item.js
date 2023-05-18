import { Component } from 'react';

import './products-list-item.scss';

class ProductsListItem extends Component {
  render() {
    const itemProps = this.props;

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
}

export default ProductsListItem;