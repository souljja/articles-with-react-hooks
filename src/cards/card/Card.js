import React from 'react';
import './Card.scss';

export const Card = (props) => {
    const style = {gridColumn: props.size || 0};
    return (
        <div className="Card-wrapper" style={style}>
            <div className="Card-title">{props.card.title}</div>
            <div>{props.card.text}</div>
        </div>
    );
}