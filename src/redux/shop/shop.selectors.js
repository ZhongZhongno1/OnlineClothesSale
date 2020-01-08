import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollectons = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsIsfetch = createSelector(
  [selectShop],
  shop => shop.isLoading
);

export const selectCollectionsIsloading = createSelector(
  [selectShop],
  shop => !!shop.collections
);

export const selectCollectionsOverview = createSelector(
  [selectCollectons],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionId => createSelector(
  [selectCollectons],
  collections => collections[collectionId]
);