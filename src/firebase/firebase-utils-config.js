import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
  {
    apiKey: "AIzaSyCEEQb73uxzJTIcSQ5XrzXB8WWyHkEAahY",
    authDomain: "eshooping-clouthing.firebaseapp.com",
    databaseURL: "https://eshooping-clouthing.firebaseio.com",
    projectId: "eshooping-clouthing",
    storageBucket: "eshooping-clouthing.appspot.com",
    messagingSenderId: "466117241813",
    appId: "1:466117241813:web:8d8fa01f1729827c196b5c",
    measurementId: "G-LKNG1Q1DC8"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({displayName, email, createdAt, ...additionalData});
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  const ObjKeys = Object.keys(objectsToAdd);
  ObjKeys.forEach(objKey => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, objectsToAdd[objKey]);
  });
  return await batch.commit();
};

// covert snapshot to map
export const convertSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title).toLowerCase,
      id: doc.id,
      items,
      title
    };
  });
  const newCollections = transformedCollection.reduce((newCollections, collection) => {
    newCollections[collection.title.toLowerCase()] = collection;
    return newCollections
  }, {});
  return newCollections;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;