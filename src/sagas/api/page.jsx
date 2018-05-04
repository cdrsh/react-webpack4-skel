"use strict";


import React from "react";
import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
} from '../../reducers/constants';
import axios from "axios";

export const api_page = {

    //Emulate server request success
    getPageData: function(par) {
        return new Promise((resolve, reject) => {
            console.log(par);
            setTimeout(
                ()=>{
                    resolve({
                        type: GET_DATA_SUCCESS,
                        payload: "123"
                    });
                },
                3000
            );
            /*
            //server request
            axios
            .get("http://127.0.0.1:9000/api/getdata"+request)
            .then(response => {
                resolve({
                    type: GET_DATA_SUCCESS,
                    payload: {
                        mydata: [1,2,3],
                    }
                });
            })
            .catch(error => {
                reject({
                    type: GET_DATA_ERROR,
                    payload: error,
                    error: true
                });
            });
            */
        });
    },

};


