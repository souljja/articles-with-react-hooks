import React, { useState } from 'react';
import { Rating } from './../../rating'
import './Card.scss';

export const Card = ({ card }) => {
    const [cardRating, setCardRating] = useState(card.rating);
    const handleChange = (value) => setCardRating(value);
    return (
        <div className="Card-wrapper">
            <div className="Card-header">{card.title}</div>
            <div className="Card-body">{card.text}</div>
            <div className="Card-footer">
                <Rating value={cardRating} onChange={handleChange} />
            </div>
        </div>
    );
}