import React from 'react';
import './Card.css'
import { addToCart } from '../../store/actions/cart';
import { connect } from 'react-redux';

const Card = ({
  children,
  cardLink,
  imgPath,
  title,
  addToCart,
}) => {
  return (
    <div className="Card">
      <div className="Card-top">
        {/* <img className="Card-img" src={imgPath} alt="" /> */}
      </div>
      <div className="Card-bottom">{title}</div>
      {/* <a href={cardLink} className="Card-link">Product title</a> */}
      <button onClick={() => addToCart()}>Add to cart</button>
    </div>
  )
};

Card.defaultProps = {
  cardLink: '/',
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: () => dispatch(addToCart()),
});

export default connect(null, mapDispatchToProps)(Card);