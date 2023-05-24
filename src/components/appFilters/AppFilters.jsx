import { useEffect, useState } from 'react';

import './appFilters.scss';

const AppFilters = (props) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters([
      { id:'brazil', label: 'Brazil' },
      { id:'kenya', label: 'Kenya' },
      { id:'columbia', label: 'Columbia' },
    ]);
  }, []);
  

  const onSearchbarUpdate = (e) => {
    const term = e.target.value;
    props.onSearchbarUpdate(term);
  }

  const createFilterButtons = () => {
    return filters.map((filter) => {
      return (
        <button
          key={filter.id}
          id={filter.id}
          data-filters={filter.id}
          onClick={onFilterSelect}>{filter.label}</button>
      );
    });
  }

  const onFilterSelect = (e) => {
    if (!e.target.classList.contains('btn-active')) {
      removeAllFilters();
      e.target.classList.add('btn-active');
      props.onFilterSelect(e.target.id);
    } else {
      removeAllFilters();
      e.target.classList.remove('btn-active');
    }
  }

  const removeAllFilters = () => {
    const btnGroup = document.querySelectorAll('[data-filters]');

    btnGroup.forEach((btn) => {
      btn.classList.remove('btn-active');
    });
    props.onFilterSelect('all');
  }

  return (
    <section className="app-filters">
      <div className="container">
        <div className="app-filters-wrapper">
          <div className="app-filters-search">
            <label className="app-filters-searchbar-label" htmlFor="searchbar">Looking for</label>
            <input name="searchbar"
              className="app-filters-searchbar"
              id="searchbar"
              type="text"
              placeholder="start typing here..."
              onChange={onSearchbarUpdate} />
          </div>
          <div className="app-filters-btn-group">
            <label className="app-filters-btn-group-label" htmlFor="app-filters-country">Or filter</label>
            {createFilterButtons()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppFilters;