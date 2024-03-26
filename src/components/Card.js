import React from 'react';
import './Card.css';

const suitSymbols = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠',
    undefined: ''
};



const Card = ({ value, suit, cardFace = 'front', className = '' }) => {
    // black or red color
    const color = (['hearts', 'diamonds'].includes(suit)||value === "♔") ? 'red' : 'black';
    // test the color


    if(cardFace === 'back') {
        return (
            <div className={`card back ${className}`}>
                <div className="value">?</div>
                <div className="suit">?</div>
            </div>
        );
    } else {
        return (
            <div className={`card ${className}`} style={{ color: color }}>
                <div className="value">{value}</div>
                <div className="suit">{suitSymbols[suit]}</div>
            </div>
        );
    }
};


export default Card;

// TODO: Add back side of the card as a prop to the Card component.