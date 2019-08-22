import React from 'react';
import './Card.css'

const Card = ({
  children,
  cardLink,
  imgPath,
}) => {
  return (
    <div className="Card">
      <a href={cardLink} className="Card-link">
        <div className="Card-top">
          <img className="Card-img" src={imgPath} />
        </div>
        <div className="Card-bottom"></div>
      </a>
    </div>
  )
};

export default Card;