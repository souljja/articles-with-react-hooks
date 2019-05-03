import React from 'react';
import { Card } from './card';
import './CardsLayout.scss';

export const CardsLayout = (props) => {
    const MAX_SIZE = 12;
    const cards = [
        {
            id: 1,
            title: 'First',
            text: 'Some text'
        },
        {
            id: 2,
            title: 'Second',
            text: 'Some text'
        },
        {
            id: 3,
            title: 'third',
            text: 'Some text'
        },
        {
            id: 4,
            title: 'fourth',
            text: 'Some text'
        }
    ];

    const getCards = () => cards.map((card, index) => {
        const cardsInRow = 2;
        const cardColumns = MAX_SIZE / cardsInRow;
        const positionInRow = index % cardsInRow;
        const cardWidth = cardColumns * positionInRow + 1;
        const size = `${cardWidth}/${cardWidth + cardColumns}`;
        return (
            <Card
                key={card.id}
                size={size}
                card={card} />
        );
    });

    return (
        <div className="CardsLayout-container">
            {getCards()}
        </div>
    );
};