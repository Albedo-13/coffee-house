import { Component } from 'react';

import './appFilters.scss';

class AppFilters extends Component {
  constructor(props) {
    super(props);
    this.filters = [
      { id:'brazil', label: 'Brazil' },
      { id:'kenya', label: 'Kenya' },
      { id:'columbia', label: 'Columbia' },
    ];
  }

  onSearchbarUpdate = (e) => {
    const term = e.target.value;
    this.props.onSearchbarUpdate(term);
  }

  createFilterButtons() {
    const filters = this.filters;

    return filters.map((filter) => {
      return (
        <button
          key={filter.id}
          id={filter.id}
          data-filters={filter.id}
          onClick={this.onFilterSelect}>{filter.label}</button>
      );
    });
  }

  onFilterSelect = (e) => {
    if (!e.target.classList.contains('btn-active')) {
      this.removeAllFilters();
      e.target.classList.add('btn-active');
      this.props.onFilterSelect(e.target.id);
    } else {
      this.removeAllFilters();
      e.target.classList.remove('btn-active');
    }
  }

  removeAllFilters = () => {
    const btnGroup = document.querySelectorAll('[data-filters]');

    btnGroup.forEach((btn) => {
      btn.classList.remove('btn-active');
    });
    this.props.onFilterSelect('all');
  }

  render() {
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
                onChange={this.onSearchbarUpdate} />
            </div>
            <div className="app-filters-btn-group">
              <label className="app-filters-btn-group-label" htmlFor="app-filters-country">Or filter</label>
              {this.createFilterButtons()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AppFilters;