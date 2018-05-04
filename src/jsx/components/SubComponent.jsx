"use strict";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";

export default class SubComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    SubComponent
                    <br />
                    prbool={this.props.prbool ? 1 : 0}
                    <br />
                    prAr={this.props.prAr}
                </div>
            </BrowserRouter>
        );
    }
}

SubComponent.propTypes = {
    prAr: PropTypes.array,
    prbool: PropTypes.bool
};
