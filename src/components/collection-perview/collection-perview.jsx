import React from 'react';
import CollectionItem from '../collection-item/collection-item';

class CollectionPerview extends React.Component {
    renderList = () => {
        return (
            this.props.items
            .filter((item, index) => index < 4)
            .map(item => {
                return <CollectionItem key={item.id} item={item} />;
            })
        );
    }

    render() {
        return (
            <div className="collection-preview">
                <h1 className="title">{this.props.title}</h1>
                <div className="preview">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default CollectionPerview;