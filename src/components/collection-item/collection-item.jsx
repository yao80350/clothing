import React from 'react';

import CustomButton from '../custom-button/custom-button';

const CollectionItem = ({id, name, imageUrl, price}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
        </div>
        <CustomButton inverted>Add to Cart</CustomButton>
    </div>
);

export default CollectionItem;