import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './sass/app.scss';
import Header from './components/header/header';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    state = { currentUser: null };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(this.state.currentUser);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header currentUser={this.state.currentUser} />
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

export default App;
