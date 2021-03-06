"use strict";

import React from "react";
import { Button } from "reactstrap";

export default class Page2 extends React.Component {
    constructor(porps) {
        super(porps);
    }

    //Button click
    onClickFn = () => {
        console.log("page2");
    };

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="hdr3">Page2</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            Url param: {this.props.match.params.itm}
                            <div className="form-group">
                                <Button
                                    color="info"
                                    size="sm"
                                    className="mt5"
                                    onClick={this.onClickFn}
                                >
                                    <span className="fa fa-paper-plane" />&nbsp;
                                    Click Me
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
