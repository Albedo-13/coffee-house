import { Component } from 'react';

import './products-list.scss';
import ProductsListItem from '../products-list-item/products-list-item';

class ProductsList extends Component {

  createProductsList() {
    const data = this.props.data;

    return data.map((item) => {
      const {id, ...itemProps} = item;
      return (
        <ProductsListItem key={id} {...itemProps} />
      );
    });
  }

  render() {
    return (
      <section className="products-list">
        <div className="container">
          <div className="products-list-wrapper">
            {this.createProductsList()}
          </div>
        </div>
      </section>
    );
  }
}

export default ProductsList;