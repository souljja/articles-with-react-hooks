import React from 'react';
import { ReactComponent as ReactLogo } from './../icons/round-whatshot.svg';
import './Rating.scss';
export const Rating = React.memo(({ value = 1, onChange, maxValue = 5 }) => {
    const handleChange = (chosenValue) => (event) => {
        event.preventDefault();
        if (onChange) {
            onChange(chosenValue)
        }
    };
    const getRatingScale = () => {
        const ratingItem = [];
        for (let i = 1; i <= maxValue; i++) {
            const iconClass = `Rating-icon${i > value ? '' : ' active'}`
            ratingItem.push(<ReactLogo key={i} className={iconClass} onClick={handleChange(i)} />);
        }
        return ratingItem;
    };
    return (
        <div className="Rating-container">
            <span className="Rating-avg">Avg {value.toFixed(2)}</span>
            <span className="Rating-scale">
                {getRatingScale()}
            </span>
        </div>
    );
});