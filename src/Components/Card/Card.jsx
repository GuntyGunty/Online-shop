import React from 'react';
import './Card.css'

const Card = ({
  children,
  cardLink,
}) => {
  return (
    <div className="Card">
      <a href={cardLink} className="Card-link">
        <div className="Card-top"></div>
        <div className="Card-bottom"></div>
      </a>
    </div>
  )
};

export default Card;