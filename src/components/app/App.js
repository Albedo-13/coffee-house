import { Component } from 'react';

import './App.scss';
import Header from '../header/header';
import About from '../about/about';
import AppFilters from '../app-filters/app-filters';
import ProductsList from '../products-list/products-list';
import Footer from '../footer/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, img: './assets/img/coffee-img.webp' },
        { id: 2, name: 'AROMISTICO Coffee 2 kg', country: 'Kenya', price: 7.02, img: './assets/img/coffee-img.webp' },
        { id: 3, name: 'AROMISTICO Coffee 3 kg', country: 'Columbia', price: 7.21, img: './assets/img/coffee-img.webp' },
        { id: 4, name: 'AROMISTICO Coffee 0.5 kg', country: 'Brazil', price: 6.14, img: './assets/img/coffee-img.webp' },
        { id: 5, name: 'AROMISTICO Coffee 2 kg', country: 'Columbia', price: 10.99, img: './assets/img/coffee-img.webp' },
        { id: 6, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.95, img: './assets/img/coffee-img.webp' },
      ],
      term: '',
      filter: 'all',
    };
  }

  searchProduct(products, term) {
    if (!term) {
      return products;
    }

    return products.filter((item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1 ? item : null);
  }

  onSearchbarUpdate = (term) => {
    this.setState({ term });
  }

  filterProduct(products, filter) {
    if (filter === 'all') {
      return products;
    }

    return products.filter((item) => item.country.toLowerCase() === filter.toLowerCase() ? item : null);
  }

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const filteredData = this.searchProduct(this.filterProduct(data, filter), term);

    return (
      <div className="App">
        <Header />
        <About />
        <AppFilters
          onSearchbarUpdate={this.onSearchbarUpdate}
          onFilterSelect={this.onFilterSelect} />
        <ProductsList
          data={filteredData} />
        <Footer />
      </div>
    );
  }
}

export default App;
