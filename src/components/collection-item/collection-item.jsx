import React from 'react';

const CollectionItem = ({id, name, imageUrl, price}) => (
    <div className="collection-item">
        <image className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
        </div>
    </div>
);

export default CollectionItem;