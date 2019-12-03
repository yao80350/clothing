import React from 'react';

const CustomButton = ({children, ...otherProps}) => {
    const googleButton = otherProps.isGoogleSignIn ? 'google-sign-in' : '';
    const inverted = otherProps.inverted ? 'inverted' : '' 
    return (
    <button className={`custom-button ${googleButton} ${inverted}`} {...otherProps}>
        {children}
    </button>
    );
};

export default CustomButton;