


import React from 'react';
import PlayScreen from './Screen/PlayScreen';

function App() {
    // Mock data for testing


    const users = [
        { id: 1, avatar: 'User 1', handCards: Array(5).fill({value: '10', suit: 'hearts'}) },
        { id: 2, avatar: 'User 2', handCards: Array(3).fill({value: 'J', suit: 'diamonds'}) },
        { id: 3, avatar: 'User 3', handCards: Array(4).fill({value: 'Q', suit: 'clubs'}) },
        { id: 4, avatar: 'User 4', handCards: Array(2).fill({value: 'K', suit: 'spades'}) },
    ];

    // Example user hand cards with value and suit
    const userHandCards = [
        {value: 'A', suit: 'spades'},
        {value: '2', suit: 'hearts'},
        {value: '3', suit: 'diamonds'},
        {value: '4', suit: 'clubs'},
        {value: '6', suit: 'spades', cardFace: 'back'}, // Example of a card with back face
    ];

    return (
        <div className="App">
            <PlayScreen users={users} userHandCards={userHandCards}/>
        </div>
    );
}


export default App;

