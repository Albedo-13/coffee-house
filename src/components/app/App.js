import { useState } from 'react';

import './app.scss';
import { MainPage, OurCoffee } from '../pages';

const App = () => {
  const [data] = useState([
    { id: 1, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, img: require('../../assets/img/coffee-img.webp') },
    { id: 2, name: 'AROMISTICO Coffee 2 kg', country: 'Kenya', price: 7.02, img: require('../../assets/img/coffee-img.webp') },
    { id: 3, name: 'AROMISTICO Coffee 3 kg', country: 'Columbia', price: 7.21, img: require('../../assets/img/coffee-img.webp') },
    { id: 4, name: 'AROMISTICO Coffee 0.5 kg', country: 'Brazil', price: 6.14, img: require('../../assets/img/coffee-img.webp') },
    { id: 5, name: 'AROMISTICO Coffee 2 kg', country: 'Columbia', price: 10.99, img: require('../../assets/img/coffee-img.webp') },
    { id: 6, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.95, img: require('../../assets/img/coffee-img.webp') },
  ]);

  return (
    <div className="App">
      <MainPage data={data} />
      {/* <OurCoffee data={data} /> */}
    </div>
  );
}

export default App;
