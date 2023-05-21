import { useState } from 'react';

import '../../app/app.scss';
import Header from '../../header/Header';
import AboutBeans from '../../aboutBeans/AboutBeans';
import AppFilters from '../../appFilters/AppFilters';
import ProductsList from '../../productsList/ProductsList';
import Footer from '../../footer/Footer';

const OurCoffeePage = (props) => {
  const [data] = useState(props.data);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

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
    <>
      <Header currPage={'OurCoffee'} />
      <main>
        <AboutBeans />
        <AppFilters
          onSearchbarUpdate={onSearchbarUpdate}
          onFilterSelect={onFilterSelect} />
        <ProductsList
          data={filteredData} />
      </main>
      <Footer />
    </>
  );
}

export default OurCoffeePage;