import React from 'react';
import './Card.css';

const suitSymbols = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠',
};



const Card = ({ value, suit, cardFace = 'front', className = '' }) => {
    const color = ['hearts', 'diamonds'].includes(suit) ? 'text-red-500' : 'text-black'; // TailwindCSS classes for color
    //test the color
    console.log(color);

    if(cardFace === 'back') {
        return (
            <div className={`card back ${className}`}>
                <div className="value">?</div>
                <div className="suit">?</div>
            </div>
        );
    } else {
    return (
        <div className={`card ${color} ${className}`}>
            <div className="value">{value}</div>
            <div className="suit">{suitSymbols[suit]}</div>
            <div>{cardFace} </div>
        </div>
    );
    }
};

export default Card;

// TODO: Add back side of the card as a prop to the Card component.