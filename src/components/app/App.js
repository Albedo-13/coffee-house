import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.scss';
import { MainPage, OurCoffee, SingleCoffeePage } from '../pages';

const App = () => {
  const [data] = useState([
    { id: 1, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', description: 'Best coffee in the world!', price: 6.99, thumbnail: require('../../assets/img/coffee-img.webp') },
    { id: 2, name: 'AROMISTICO Coffee 2 kg', country: 'Kenya', description: 'Best coffee in the world!', price: 7.02, thumbnail: require('../../assets/img/coffee-img.webp') },
    { id: 3, name: 'AROMISTICO Coffee 3 kg', country: 'Columbia', description: 'Best coffee in the world!', price: 7.21, thumbnail: require('../../assets/img/coffee-img.webp') },
    { id: 4, name: 'AROMISTICO Coffee 0.5 kg', country: 'Brazil', description: 'Best coffee in the world!', price: 6.14, thumbnail: require('../../assets/img/coffee-img.webp') },
    { id: 5, name: 'AROMISTICO Coffee 2 kg', country: 'Columbia', description: 'Best coffee in the world!', price: 10.99, thumbnail: require('../../assets/img/coffee-img.webp') },
    { id: 6, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', description: 'Best coffee in the world!', price: 6.95, thumbnail: require('../../assets/img/coffee-img.webp') },
  ]);

  // TODO: react router
  // TODO: generate product page by index (react router)
  // TODO: third page
  // TODO: Expand products fields
  // TODO: make responsive design
  // TODO: 404 & spinner
  // TODO: js => jsx
  // TODO: lazy на загрузку продуктов

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage data={data} />} />
          <Route path='/OurCoffee' element={<OurCoffee data={data} />} />
          <Route path='/OurCoffee/:coffeeId' element={<SingleCoffeePage data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
