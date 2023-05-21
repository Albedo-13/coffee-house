import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.scss';
import { MainPage, OurCoffee, SingleCoffeePage } from '../pages';

const App = () => {
  const [data] = useState([
    { id: 1, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', description: 'Experience premium taste in every coffee cup of the Roma Italian Medium Roast Coffee Blend by Aromistico. Crafted with excellent-quality beans and careful processes, our coffee blend is a gourmet treat you can easily enjoy at home. Sharp, mild, and earthy, this coffee envelops your taste buds with full-bodied richness in every sip. Enjoy it as iced coffee or serve it hot. Our specialty coffee is a great pair to your favorite morning and midday pick-me-up me. Whether you prep it through french press, pour over, moka pot, filter, drip, or aeropress brewing methods, it will retain its signature gourmet Italian brew flavor. Roma has a perfectly balanced flavor owing to the unique combination of premium Robusta and Arabica coffee beans. Every bag of our whole bean coffee medium roast blend uses beans from the Green Mountains of El Salvador and Guatemala.', price: 6.99, thumbnail: require('../../assets/img/coffee-img.webp') },
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
