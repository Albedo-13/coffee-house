import './singleCoffee.scss'
import blackBeans from '../../assets/icons/beans-solid-black.svg';

const SingleCoffee = (props) => {
  const { name, country, description, price, img, thumbnail } = props.product;
  
  let imageToShow;
  try {
    imageToShow = img.default;
  } catch {
    imageToShow = thumbnail;
  }

  return (
    <section className="single-coffee">
      <div className="container">
        <div className="single-coffee-wrapper">
          <img className="single-coffee-img"
            src={imageToShow}
            alt="product"
            draggable="false" />
          <div className="single-coffee-info">
            <h2 className="single-coffee-title">About it</h2>
            <div className="single-coffee-separator">
              <img className="single-coffee-separator-img"
                src={blackBeans}
                alt="coffee beans icon"
                draggable="false" />
            </div>
            <p className="single-coffee-name"><span>Name:</span> {name}</p>
            <p className="single-coffee-country"><span>Country:</span> {country}</p>
            <p className="single-coffee-description"><span>Description:</span> {description}</p>
            <p className="single-coffee-price"><span>Price:</span> {price}$</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleCoffee;