import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Collection from '../../components/collection/collection';
import { fetchCollectionsData } from '../../redux/actions/shop-action';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/selectors/shop-selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
    componentDidMount() {
        this.props.fetchCollectionsStartAsync();
    }

    render() {
        const { match, collectionsIsFetching, collectionsIsLoaded } = this.props;

        return (
            <div className="shop-page">
                <Route path={match.path} exact render={props => <CollectionsOverviewWithSpinner 
                    isLoading={collectionsIsFetching} 
                    {...props}
                    />} 
                />
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionWithSpinner 
                    isLoading={!collectionsIsLoaded}
                    {...props}
                    />} 
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    collectionsIsFetching: selectIsCollectionsFetching,
    collectionsIsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);