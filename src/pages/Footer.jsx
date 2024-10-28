import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="spotify-footer">
      <div className="md">
        <h3>Preview of Spotify</h3>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </p>
      </div>
      <div className="user-controls md">
        <button className="btn login">Sign up free</button>
      </div>
    </footer>
  );
}

export default Footer;
