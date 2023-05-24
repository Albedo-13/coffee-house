import { useNavigate } from 'react-router-dom';
import './notFoundPage.scss';

import sleepingMan from '../../../resources/img/sleep-coffee.webp';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="not-found">
          <div className="not-found-wrapper">
            <div className="not-found-title-404">404</div>
            <div className="not-found-text">Oops! We're guessing this page fell asleep without coffee...</div>
            <img src={sleepingMan}
              alt="sleeping man with coffee cup"
              className="not-found-img" />
            <button className="not-found-btn" onClick={() => navigate('/')}>Main Page</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;