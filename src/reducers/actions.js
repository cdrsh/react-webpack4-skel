"use strict";


import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
} from "./constants";
import axios from "axios";

//Get Data
export function getData(request) {
    return {
        type: GET_DATA_REQUEST,
        payload: request
    }
}

