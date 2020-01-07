import React from 'react';
import { withRouter } from 'react-router-dom';

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
        const { history, match, title, routeName } = this.props;

        return (
            <div className="collection-preview">
                <h2 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</h2>
                <div className="preview">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default withRouter(CollectionPerview);