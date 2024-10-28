import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="spotify-header">
      {/* Spotify Logo */}
      <div className="spotify-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNYtdJe7h9_n7pIWzXMCymveGGP6uCWlao46cWpuygaNpdc7ZLG3CDBxCYc80HyJB69o&usqp=CAU"
          alt="Spotify Logo"
        />
      </div>

      {/* Home Icon */}
      <div className="homeicon">
        <FontAwesomeIcon icon={faHouse} className="fa-1x" />
      </div>

      {/* Search Bar */}
      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-1x" />
        <div className="line">|</div>
        <h4>What do you want to play?</h4>
        <div className="line">|</div>
        <FontAwesomeIcon icon={faWindowMaximize} />
      </div>

      {/* User Controls (Sign Up / Log In) */}
      <div className="signupp">
        <button className="btn signup">Sign up</button>
        <button className="btn login">Log in</button>
      </div>
    </header>
  );
};

export default Header;
