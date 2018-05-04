"use strict";

import React from "react";
import { Button } from "reactstrap";
import SubComponent from "../components/SubComponent";

export default class Page1 extends React.Component {
    constructor(porps) {
        super(porps);
    }

    //Button click
    onClickFn = () => {
        window.ee.emitEvent("page1listeners");
    };

    render() {
        return (
            <div>
                <div className="container-fluid">
                    {/*prop types check*/}
                    <SubComponent prbool={true} prAr={[1, 2, 3]} />

                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="hdr3">Page1</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <Button
                                    color="info"
                                    size="sm"
                                    className="mt5"
                                    onClick={this.onClickFn}
                                >
                                    <span className="fa fa-paper-plane" />&nbsp;
                                    Run Wolfy event
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
