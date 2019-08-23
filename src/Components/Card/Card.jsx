import React from 'react';
import './Card.css'

const Card = ({
  children,
  cardLink,
  imgPath,
}) => {
  return (
    <div className="Card">
      <div className="Card-top">
        <img className="Card-img" src={imgPath} alt="" />
      </div>
      <div className="Card-bottom">Hello</div>
      <a href={cardLink} className="Card-link">Product title</a>
    </div>
  )
};

Card.defaultProps = {
  cardLink: '/',
};

export default Card;