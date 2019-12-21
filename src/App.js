import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './sass/app.scss';
import Header from './components/header/header';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/actions/user-action';
import { selectCurrentUser } from './redux/selectors/user-selectors';

class App extends React.Component {
    state = { currentUser: null };

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                //listen to a document with the onSnapshot() method
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
                return;
            }
            setCurrentUser(null);         
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const { currentUser } = this.props;
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/shop" exact component={ShopPage} />
                        <Route path="/signin" exact render={() => currentUser ? (<Redirect to='/' />) : <SignInAndSignUp />} />
                        <Route path="/checkout" exact component={CheckoutPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dipatch => {
    return {setCurrentUser: user => dipatch(setCurrentUser(user))};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
