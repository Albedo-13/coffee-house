import './ourBest.scss';

const OurBest = (props) => {
  const { data } = props;

  const content = data.slice(3).map(item => {
    return (
      <a href="#" className="our-best-item" key={item.id}>
        <div>
          <img className="our-best-item-img"
            src={item.img}
            alt="product"
            draggable="false" />
          <div className="our-best-item-name">{item.name}</div>
          <div className="our-best-item-price">{item.price}$</div>
        </div>
      </a>
    );
  });
  
  return (
    <section className="our-best">
      <div className="container">
        <h2 className="our-best-header">Our best</h2>
        <div className="our-best-wrapper">
          {content}
        </div>
      </div>
    </section>
  );
}

export default OurBest;