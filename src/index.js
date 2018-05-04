"use strict";

import "./styles/postcss-ex.css";
import "./styles/style.less";
import "./styles/styles.scss";
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/scss/bootstrap.scss";
//require("font-awesome-sass-loader");
import "font-awesome-sass-loader";
import "../node_modules/flag-icon-css/css/flag-icon.css";

import React from "react";
import { render, BrowserRouter } from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./translate";
import AppComponent from "./jsx/app.jsx";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import configureStore from "./store/configureStore";




//Create store
const { store, history } = configureStore();

render(
    <I18nextProvider i18n={i18n}>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer>
                <AppComponent history={history} />
            </AppContainer>
        </ConnectedRouter>
    </Provider>
    </I18nextProvider>,
    document.getElementById("root")
);
