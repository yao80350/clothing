import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Collection from '../../components/collection/collection';
import { firestore, converCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/actions/shop-action';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionsRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(snapshot => {
            this.props.updateCollections(converCollectionSnapshotToMap(snapshot));
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render() {
        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route path={match.path} exact component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);