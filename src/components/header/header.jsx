import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <header className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">shop</Link>
            <Link to="/" className="option">Contact</Link>
            {currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                : <Link to="/signin" className="option">Sign In</Link>
            }
        </div>
    </header>
);

export default Header;