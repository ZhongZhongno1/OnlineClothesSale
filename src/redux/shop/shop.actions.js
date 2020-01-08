import shopTypes from "./shop.types";
import { convertSnapshotToMap, firestore } from "../../firebase/firebase-utils-config";

export const shopFetchColectionsStart = () => ({
  type: shopTypes.SHOP_FETCH_COLLECTIONS_START,
});

export const shopFetchCollectionsSuccess = collections => ({
  type: shopTypes.SHOP_FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const shopFetchCollectionAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(shopFetchColectionsStart());
    collectionRef.get().then(snapshot => {
      const collections = convertSnapshotToMap(snapshot);
      dispatch(shopFetchCollectionsSuccess(collections));
    });
  };
};
