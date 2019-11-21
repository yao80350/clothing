import React from 'react';

const Item = ({section}) => {
    return (
        <div className={`menu-item ${section.size}`}>
            <div className="background-image" style={{backgroundImage: `url(${section.imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{section.title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default Item;