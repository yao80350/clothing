import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Collection from '../../components/collection/collection';
import { firestore, converCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/actions/shop-action';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    state = {
        isLoading: true
    }

    componentDidMount() {
        const collectionsRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(snapshot => {
            this.props.updateCollections(converCollectionSnapshotToMap(snapshot));
            this.setState({isLoading: false});
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;

        return (
            <div className="shop-page">
                <Route path={match.path} exact render={props => <CollectionsOverviewWithSpinner 
                    isLoading={isLoading} 
                    {...props}
                    />} 
                />
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionWithSpinner 
                    isLoading={isLoading}
                    {...props}
                    />} 
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);