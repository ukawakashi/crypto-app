import React from 'react';
import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from "./components";
import {Layout} from "antd";

import "./App.css";
import {Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path="/crypto/:CoinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            </div>
            <div className="footer">

            </div>
        </div>
    );
};

export default App;
