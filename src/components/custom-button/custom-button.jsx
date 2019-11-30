import React from 'react';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    const googleButton = isGoogleSignIn ? 'google-sign-in' : '';
    return (
    <button className={`custom-button ${googleButton}`} {...otherProps}>
        {children}
    </button>
    );
};

export default CustomButton;