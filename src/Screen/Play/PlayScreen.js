import React from 'react';
import './PlayScreen.css';
import Card from "../../components/Card";
import GameFooter from "../../components/GameFooter"; // Import CSS for styling

const PlayScreen = ({ users, userHandCards }) => {
    // Assuming `users` is an array of user objects, `userHandCards` is an array of cards for the current user, and `deck` represents the game deck

    return (
        <div className="play-screen">
            {/* Top Zone */}
            <div className="top-zone">
                {/* Content for the top zone can go here */}
            </div>

            {/* Deck and Other Users Zone */}
            <div className="deck-zone">
                <div className="deck">{/* Display the deck here */}</div>
                {users.map((user, index) => (
                    <div key={index} className={`user user-${index}`}>
                        <div className="avatar">{user.avatar}</div>
                        <div className="hand-cards">{/* Display user's hand cards (back side) */}</div>
                    </div>
                ))}
            </div>

            {/* User's Hand-card Zone */}
            <div className="hand-card-zone">
                <div className="hand-cards">
                    {userHandCards.map((card, index) => (
                        <Card key={index} value={card.value} suit={card.suit} cardFace={card.cardFace} />
                    ))}
                </div>
            </div>



            {/* Footer */}
            <footer className="footer">
                <GameFooter />
            </footer>
        </div>
    );
};

export default PlayScreen;


// TODO 1: Add a deck prop to the PlayScreen component to display the deck of cards.
// TODO 2: Add a top zone to the PlayScreen component for displaying game information or actions.
// TODO 3: Add a JS function to dynamically distribute the users in the deck-zone based on the number of users.
