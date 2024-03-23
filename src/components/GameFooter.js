import React from 'react';
import './GameFooter.css'; // Importing the CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Arcane Library. All rights reserved.</p>
                {/* Add more content here as needed */}
            </div>
        </footer>
    );
};

export default Footer;
