"use strict";

import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers/index.js";

import thunk from "redux-thunk";

import { createLogger } from "redux-logger";

import { ConnectedRouter, routerReducer, push } from "react-router-redux";

import { createBrowserHistory } from "history";

const initialState = {
    pgnum: -1,
    data: [],
    fetching: false
};

import { connectRouter, routerMiddleware } from "connected-react-router";

export default function configureStore(initialState) {
    const logger = createLogger();
    const history = createBrowserHistory({ basename: "/" });
    const store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        compose(applyMiddleware(routerMiddleware(history), thunk, logger))
    );

    if (module.hot) {
        module.hot.accept("../reducers/index.js", () => {
            const nextRootReducer = require("../reducers/index.js");
            store.replaceReducer(nextRootReducer);
        });
    }

    return { store: store, history: history };
}
