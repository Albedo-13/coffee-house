import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.scss';
import coffeesList from '../../data/data';
import Spinner from '../spinner/Spinner';
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const OurCoffeePage = lazy(() => import('../pages/OurCoffeePage/OurCoffeePage'));
const SingleCoffeePage = lazy(() => import('../pages/SingleCoffeePage/SingleCoffeePage'));
const ForPleasurePage = lazy(() => import('../pages/ForPleasurePage/ForPleasurePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const [data] = useState(coffeesList);

  // TODO: third page
  // TODO: make responsive design
  // TODO: finish 404
  // TODO: js => jsx
  // TODO: dynamic header images imports

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<MainPage data={data} />} />
            <Route path='/OurCoffee' element={<OurCoffeePage data={data} />} />
            <Route path='/OurCoffee/:coffeeId' element={<SingleCoffeePage data={data} />} />
            <Route path='/ForPleasure' element={<ForPleasurePage data={data} />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
