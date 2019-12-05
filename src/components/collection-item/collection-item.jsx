import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/actions/cart-action';

const CollectionItem = props => {
    const {imageUrl, name, price} = props.item;
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="collection-footer">
                <p className="name">{name}</p>
                <p className="price">{price}</p>
            </div>
            <CustomButton onClick={()=> props.addItem(props.item)} inverted="true">Add to Cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);