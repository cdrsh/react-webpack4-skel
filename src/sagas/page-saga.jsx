'use strict';


import { take, all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { api_page } from './api/page';
import { actions } from '../reducers/actions';
import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
} from "../reducers/constants";


//get page data twice
export function* getPageDataSaga(action) {
    try {
        const pageData = yield call(api_page.getPageData, action.payload);
        //batch commands (data postprocessing etc...)
        yield put({type: GET_DATA_SUCCESS,   payload: pageData.payload});
    } catch (e) {
        yield put({type: GET_DATA_ERROR, error: e.payload.message});
    }
}
