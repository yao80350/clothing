import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './sass/app.scss';
import Header from './components/header/header';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
    state = { currentUser: null };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                //listen to a document with the onSnapshot() method
                console.log(userRef)
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
                return;
            }
            this.setState({
                currentUser: null
            });         
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
