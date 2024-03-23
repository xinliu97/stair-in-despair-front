import React from 'react';
import Card from './Card';
import './GameLayout.css'; // Assuming we'll add some styling here

const GameLayout = () => {
    return (
        <div className="game-layout">
            <div className="deck">
                <Card value="C" suit="spades"  />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
            </div>
            <div className="play-area">
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                {/* Additional cards can be rendered here as they are played */}
            </div>
            <div className="play-area">
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
                <Card value="A" suit="hearts" />
            </div>
        </div>
    );
};

export default GameLayout;
