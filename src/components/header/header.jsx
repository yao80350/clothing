import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => (
    <header className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">shop</Link>
            <Link to="/" className="option">Contact</Link>
        </div>
    </header>
);

export default Header;