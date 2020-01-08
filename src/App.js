import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from "./components/header/header.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";
import { addCollectionAndDocuments, auth, createUserProfileDocument } from './firebase/firebase-utils-config';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectons } from './redux/shop/shop.selectors';
import Checkout from "./pages/checkout/checkout.component";


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser, collectionsArray} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      //addCollectionAndDocuments('collections', collectionsArray);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? (<Redirect to='/'/>) : (<SignInUp/>)
          }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectons
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
