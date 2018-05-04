'use strict';


import { take, all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as pgSaga from './page-saga';
import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
} from "../reducers/constants";

function* allSagas() {
    yield takeLatest(GET_DATA_REQUEST, pgSaga.getPageDataSaga);
}

export default allSagas;

