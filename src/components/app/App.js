import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.scss';
import { MainPage, OurCoffee, SingleCoffeePage } from '../pages';
import coffeesList from '../data/data';

const App = () => {
  const [data] = useState(coffeesList);

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
