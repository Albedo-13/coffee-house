import './ourBest.scss';

const OurBest = (props) => {
  const { data } = props;

  return (
    <section className="our-best">
      <div className="container">
        <h2 className="our-best-header">Our best</h2>
        <div className="our-best-wrapper">
          <a href="#" className="our-best-item">
            <div>
              <img className="our-best-item-img"
                src={data[0].img}
                alt="product"
                draggable="false" />
              <div className="our-best-item-name">{data[0].name}</div>
              <div className="our-best-item-price">{data[0].price}$</div>
            </div>
          </a>
          <a href="#" className="our-best-item">
            <div>
              <img className="our-best-item-img"
                src={data[0].img}
                alt="product"
                draggable="false" />
              <div className="our-best-item-name">{data[0].name}</div>
              <div className="our-best-item-price">{data[0].price}$</div>
            </div>
          </a>
          <a href="#" className="our-best-item">
            <div>
              <img className="our-best-item-img"
                src={data[0].img}
                alt="product"
                draggable="false" />
              <div className="our-best-item-name">{data[0].name}</div>
              <div className="our-best-item-price">{data[0].price}$</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurBest;