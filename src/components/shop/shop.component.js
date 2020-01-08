import React, { useEffect } from 'react';
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import CollectionOverview from "../collection-overview/collection-overview.component";
import { Route } from 'react-router-dom';
import { selectCollectionsIsfetch, selectCollectionsIsloading } from '../../redux/shop/shop.selectors';
import CollectionPage from "../collection/collection-page.component";
import { shopFetchCollectionAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match, shopFetchCollectionAsync, isFetching, isLoading}) => {

  useEffect(() => {
    shopFetchCollectionAsync();
  },[]);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`}
             render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props}/>}/>
      <Route path={`${match.path}/:collectionId`}
             render={(props) => <CollectionPageWithSpinner isLoading={!isLoading} {...props}/>}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectCollectionsIsfetch,
  isLoading: selectCollectionsIsloading
});

export default connect(mapStateToProps, {shopFetchCollectionAsync})(ShopPage);