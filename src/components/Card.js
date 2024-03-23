import React from 'react';
import './Card.css';

const suitSymbols = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠',
};



const Card = ({ value, suit, className = '' }) => {
    const color = ['hearts', 'diamonds'].includes(suit) ? 'text-red-500' : 'text-black'; // TailwindCSS classes for color
    //test the color
    console.log(color);

    return (
        <div className={`card ${color} ${className}`}>
            <div className="value">{value}</div>
            <div className="suit">{suitSymbols[suit]}</div>
        </div>
    );
};

export default Card;
