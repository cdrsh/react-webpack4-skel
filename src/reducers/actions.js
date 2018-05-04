"use strict";

import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
} from "./constants";

import axios from "axios";

//Get Data
export function getData(request) {
    return dispatch => {
        dispatch({
            type: GET_DATA_REQUEST,
            payload: request
        });

        setTimeout(() => {
            //Обратиться к серверу
            axios
                .get("http://127.0.0.1:9000/api/getdata" + request)
                .then(response => {
                    dispatch({
                        type: GET_DATA_SUCCESS,
                        payload: response.data
                    });
                })
                .catch(error => {
                    dispatch({
                        type: GET_DATA_ERROR,
                        payload: error.message
                    });
                });
        }, 3000);
    };
}
