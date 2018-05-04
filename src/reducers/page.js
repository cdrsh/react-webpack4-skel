"use strict";

let GET_DATA_REQUEST = "GET_DATA_REQUEST";
let GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
let GET_DATA_ERROR = "GET_DATA_ERROR";

const initialState = {
    fetched: 0,
    mydata: -1,
    error: -1,
    fetching: false
};


export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                request: action.payload,
                fetching: true,
                fetched: 0
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                mydata: action.payload,
                fetching: false,
                fetched: 1
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                error: action.payload,
                fetching: false,
                fetched: -1
            };

        default:
            return state;
    }
}
