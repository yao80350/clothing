import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './sass/app.scss';
import Header from './components/header/header';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/actions/user-action';

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
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/shop" exact component={ShopPage} />
                        <Route path="/signin" exact component={SignInAndSignUp} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = dipatch => {
    return {setCurrentUser: user => dipatch(setCurrentUser(user))};
};

export default connect(null, mapDispatchToProps)(App);
