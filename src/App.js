import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './sass/app.scss';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/shop" exact component={ShopPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
