import React from 'react';

import SHOP_DATE from './shop.date.js';
import CollectionPerview from '../../components/collection-perview/collection-perview';

class ShopPage extends React.Component {
    state = {
        collections: SHOP_DATE
    }

    render() {
        return (
            <div className="shop-page">
                {this.state.collections.map(({id, ...otherCollectionProps}) => {
                    return <CollectionPerview key={id} {...otherCollectionProps} />
                })}
            </div>
        );
    }
}

export default ShopPage;