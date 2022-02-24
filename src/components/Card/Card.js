import classes from './Card.module.css';
import cardImage from '../../images/illustration-hero.svg';
import orderIcon from '../../images/icon-music.svg';

const Card = () => {
  return (
    <div className={classes.card}>
      <figure>
        <img
          src={cardImage}
          alt='card illustration'
          className={classes.card__image}
        />
      </figure>
      <h2 className={classes.card__title}>Order Summary</h2>
      <p className={classes.card__text}>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <a href='#' className={classes.order__container}>
        <img src={orderIcon} alt='icon music' className={classes.order__icon} />
        <div className={classes.order__details}>
          <p className={classes.order__plan}>Annual Plan</p>
          <p className={classes.order__price}>$59.99/year</p>
        </div>
        <button className={classes.order__change}>Change</button>
      </a>
      <button className={classes.card__paybutton}>Proceed to Payment</button>
      <button className={classes.card__cancel}>Cancel Order</button>
    </div>
  );
};

export default Card;
