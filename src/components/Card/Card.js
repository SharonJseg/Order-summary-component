import classes from './Card.module.css';
import cardImage from '../../images/illustration-hero.svg';
import orderIcon from '../../images/icon-music.svg';

const Card = () => {
  return (
    <div className={classes._container}>
      <figure>
        <img
          src={cardImage}
          alt='card illustration'
          className={classes._image}
        />
      </figure>
      <h2 className={classes._title}>Order Summary</h2>
      <p className={classes._text}>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <a href='#' className={classes._order_container}>
        <img src={orderIcon} alt='icon music' className={classes._order_icon} />
        <div className={classes._order_details}>
          <p className={classes._order_plan}>Annual Plan</p>
          <p className={classes._order_price}>$59.99/year</p>
        </div>
        <button className={classes._order_change}>Change</button>
      </a>
      <button className={classes._paybutton}>Proceed to Payment</button>
      <button className={classes._cancel}>Cancel Order</button>
    </div>
  );
};

export default Card;
