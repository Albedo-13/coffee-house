import { useEffect, useState } from 'react';

import './app.scss';
import Header from '../header/Header';
import About from '../about/About';
import AppFilters from '../appFilters/AppFilters';
import ProductsList from '../productsList/ProductsList';
import Footer from '../footer/Footer';

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setData([
      { id: 1, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, img: './assets/img/coffee-img.webp' },
      { id: 2, name: 'AROMISTICO Coffee 2 kg', country: 'Kenya', price: 7.02, img: './assets/img/coffee-img.webp' },
      { id: 3, name: 'AROMISTICO Coffee 3 kg', country: 'Columbia', price: 7.21, img: './assets/img/coffee-img.webp' },
      { id: 4, name: 'AROMISTICO Coffee 0.5 kg', country: 'Brazil', price: 6.14, img: './assets/img/coffee-img.webp' },
      { id: 5, name: 'AROMISTICO Coffee 2 kg', country: 'Columbia', price: 10.99, img: './assets/img/coffee-img.webp' },
      { id: 6, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.95, img: './assets/img/coffee-img.webp' },
    ]);
  }, []);

  const searchProduct = (products, term) => {
    if (!term) {
      return products;
    }

    return products.filter((item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1 ? item : null);
  }

  const filterProduct = (products, filter) => {
    if (filter === 'all') {
      return products;
    }

    return products.filter((item) => item.country.toLowerCase() === filter.toLowerCase() ? item : null);
  }

  const onSearchbarUpdate = (term) => {
    setTerm(term);
  }

  const onFilterSelect = (filter) => {
    setFilter(filter);
  }

  const filteredData = searchProduct(filterProduct(data, filter), term);

  return (
    <div className="App">
      <Header />
      <About />
      <AppFilters
        onSearchbarUpdate={onSearchbarUpdate}
        onFilterSelect={onFilterSelect} />
      <ProductsList
        data={filteredData} />
      <Footer />
    </div>
  );
}

export default App;
