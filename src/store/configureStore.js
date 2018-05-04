"use strict";

import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index.js";
//import { ConnectedRouter, routerReducer, push, routerMiddleware } from "react-router-redux";
import { ConnectedRouter, routerReducer, push } from "react-router-redux";
import { createBrowserHistory } from "history";
const initialState = {
    fetched: 0,
    mydata: -1,
    error: -1,
    fetching: false
};
import { connectRouter, routerMiddleware } from "connected-react-router";
//import { connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import allSagas from "../sagas/sagas";

export default function configureStore(initialState) {
    //Create history
    const history = createBrowserHistory({ basename: "/" });
    const redux_history_middleware = routerMiddleware(history);

    //Create saga middlwere
    const sagaMiddleware = createSagaMiddleware();

    //Create store
    const store = createStore(
        //rootReducer,
        connectRouter(history)(rootReducer),
        initialState,
        applyMiddleware(redux_history_middleware, sagaMiddleware)
    );

    //Hot loader redux
    if (module.hot) {
        module.hot.accept("../reducers/index.js", () => {
            const nextRootReducer = require("../reducers/index.js");
            store.replaceReducer(nextRootReducer);
        });
    }

    //Run sagas
    sagaMiddleware.run(allSagas);

    return { store: store, history: history };
}
