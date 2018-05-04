"use strict";

import React from "react";
import {
    Nav,
    NavItem,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    InputGroup,
    InputGroupAddon,
    Button,
    Input,
    Grid
} from "reactstrap";
import EventEmitter from "wolfy87-eventemitter";
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
//import loDash from "lodash";
import loDash from 'lodash/array';

import Moment from 'react-moment';
import 'moment-timezone';

import {CSSTransition,
        Transition,
        TransitionGroup} from 'react-transition-group';

import { translate, Trans } from "react-i18next";


import routes from "../routes/routes";
const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
    />
);

import { getData } from "../reducers/actions";

import Formsy from 'formsy-react';
import MyInput from './components/myInput';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onOffButton = this.onOffButton.bind(this);
        this.state = {
            canSubmit: false,
            arr:[
                {txt:'item1',kee:"key1"},
                {txt:'item2',kee:"key2"},
                {txt:'item3',kee:"key3"},
            ],
            itemTxt:''
        };

        //Events example
        window.ee = new EventEmitter();
        let page1listener1 = () => {
            console.log("page1listener1");
            //self remove after one time using
            //if(completed) {
            return true;
            //}
        };
        let page1listener2 = () => {
            console.log("page1listener2");
        };
        //window.ee.addListener('page1listeners', page1listener1);
        //sample1
        window.ee.addListeners("page1listeners", [
            page1listener1,
            page1listener2
        ]);
        //sample2
        window.ee.addListeners({
            pageListener1: page1listener1,
            pageListener2: page1listener2
        });

        //Spread test
        let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
        console.log(x); // 1
        console.log(y); // 2
        console.log(z); // { a: 3, b: 4 }

    }

    //button change state
    onOffButton() {
        this.setState({ canSubmit: !this.state.canSubmit });
    }

    //add item
    onAddItem=()=>{
        this.setState({ 
            arr:[
                ...this.state.arr,
                {
                    txt:this.state.itemTxt,
                    kee:"key"+Math.random()*(1000-10)+10
                }
            ],
            itemTxt:''
        });
    }

    //item text change
    onItemTxtChange=(e)=>{
        this.setState({itemTxt:e.target.value});
    }

    //getData from backend
    getData = () => {
        this.props.getData("?id=1&pgnum=1");
    };

    //formsy example
    submit=(data)=> {
        alert(JSON.stringify(data, null, 4));
    }
    
    enableButton=()=> {
        this.setState({ canSubmit: true });
    }
    
    disableButton=()=> {
        this.setState({ canSubmit: false });
    }

    render() {
        let lodash=loDash.fill(Array(3), 2);

        const dateToFormat = '1976-04-19T12:59-0500';
        //const dateToFormat = new Date('1976-04-19T12:59-0500');
        const unixTimestamp = 198884740;
        
        const {arr} = this.state;

        //i18n
        const { t, i18n } = this.props;
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };

        return (
            <div>
                <h4>I18N:</h4>
                <button onClick={() => changeLanguage("ru")}>ru</button>
                <button onClick={() => changeLanguage("en")}>en</button>
                <Trans>Text1</Trans>
                <Trans i18nKey="feed_no_change">Text2</Trans>

                <div className="alert alert-success" role="alert">
                    <h4>Redux, axios, redux-thunk:</h4>
                    <br />
                    Fetching:{this.props.page.fetching ? "true" : "false"}
                    <br />
                    Fetched:{this.props.page.fetched}
                    <br />
                    Error:{this.props.page.error}
                    <br />
                    Mydatd:{this.props.page.mydata}
                    <br />
                    <Button color="info" size="sm" onClick={this.getData}>
                        getData
                    </Button>
                    <br />
                </div>


                <h4 className="postcss-style">Image:</h4>
                <div className="alert alert-success" role="alert">
                    <img src="images/logo.png" className="logo" />
                </div>


                <h4>Styles:</h4>
                <h4 className="red-css">Content less import css</h4>
                <h4 className="green-less">Content less</h4>
                <h4 className="magenta-less">Content less import less</h4>
                <br />
                <h4 className="orange-scss">Content scss</h4>
                <h4 className="blue-scss">Content scss-import</h4>
                <hr />

                <h4>Screen sizes:</h4>
                <div className="alert alert-primary" role="alert">
                    <div>
                        <div className="d-none d-xl-block">XL</div>
                        <div className="d-none d-lg-block d-xl-none">LG</div>
                        <div className="d-none d-md-block d-lg-none d-xl-none">
                            MD
                        </div>
                        <div className="d-none d-sm-block d-md-none d-lg-none d-xl-none">
                            SM
                        </div>
                        <div className="d-sm-none d-md-none d-lg-none d-xl-none">
                            XS
                        </div>
                    </div>
                </div>
                <hr />
                <br />

                <h4>Change component state:</h4>
                <br />
                <Button color="info" size="sm" onClick={this.onOffButton}>
                    <span className="fa fa-paper-plane" />&nbsp; onOffButton
                    State:{this.state.canSubmit ? 1 : 0}
                </Button>
                <hr />
                <br />

                
                <h4>Transition group animation:</h4>
                <InputGroup>
                    <InputGroupAddon>
                        <Button color="info" onClick={this.onAddItem}>
                            <span className="fa fa-paper-plane" />&nbsp; Add Item
                        </Button>
                    </InputGroupAddon>
                    <Input 
                        value={this.state.itemTxt} 
                        onChange={this.onItemTxtChange}/>
                </InputGroup>

                Items (TransitionGroup):
                <div className="alert alert-primary" role="alert">
                    <TransitionGroup>{
                        arr.map((itm)=>(
                            <CSSTransition
                                timeout={500}
                                classNames="star"
                                key={itm.kee}
                                onEntered={(par) => {
                                    console.log("Callback onEntered CSSTransition");
                                }}
                            >
                                <div>{itm.txt}</div>
                            </CSSTransition>
                        ))
                    }
                    </TransitionGroup>
                </div>
                

                <h4>Pages links router example:</h4>
                <br />
                <div className="list-group">
                    <NavLink to="/page1" className="list-group-item list-group-item-action" activeClassName="active">
                        <span className="fa fa-amazon" />&nbsp;Page1
                    </NavLink>
                    <br />
                    <NavLink to="/page2/123" className="list-group-item list-group-item-action" 
                        activeClassName="active1"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}>
                        <span className="fa fa-android" />&nbsp;Page2
                    </NavLink>
                    <br />
                    <NavLink to="/page3" className="list-group-item list-group-item-action" activeClassName="active">
                        <span className="fa fa-apple" />&nbsp;Page3
                    </NavLink>
                    <br />
                    <NavLink to="/page4" className="list-group-item list-group-item-action" activeClassName="active">
                        <span className="fa fa-newspaper-o" />&nbsp;Page4
                    </NavLink>
                </div>
                <br />
                Page content:
                <div className="alert alert-primary" role="alert">
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
                <br />

                <h4>Flag icon css:</h4>
                <span className="flag-icon flag-icon-gr"></span>
                <br />
                <span className="flag-icon flag-icon-de"></span>
                <br />
                <span className="flag-icon flag-icon-us"></span>
                <br />
                <hr/>

                <h4>Lodash sample:{lodash}</h4>
                <br />

                <h4>React-Moment:</h4>
                <Moment  format="DD.MM.YYYY HH:mm" tz="America/Los_Angeles">{dateToFormat}</Moment>
                <br />
                <Moment locale="de" format="DD.MM.YYYY HH:mm">{dateToFormat}</Moment>
                <br />
                <Moment unix tz="America/Los_Angeles">{unixTimestamp}</Moment>
                <br />
                <Moment 
                locale="de" 
                format="DD.MM.YYYY HH:mm"
                onChange={(val) => { console.log(val); }}
                >
                    {dateToFormat}
                </Moment>
                <br />
                <br />

                <h4>Formsy:</h4>
                <Formsy 
                    onSubmit={this.submit} 
                    onValid={this.enableButton} 
                    onInvalid={this.disableButton} 
                >
                    <MyInput 
                        name="email" 
                        title="Email" 
                        validations="isEmail" 
                        validationError="This is not a valid email" 
                        required 
                    />
                    <MyInput 
                        name="password" 
                        title="Password" 
                        type="password" 
                        required 
                    />
                    <button 
                        type="submit" 
                        disabled={!this.state.canSubmit}
                    >
                        Submit
                    </button>
                </Formsy>
                <br />
                <br />
                
            </div>
        );
    }
}

//redux
//Map state to props
function mapStateToProps(state) {
    return {
        page: state.page
    };
}

//Map actions to props
function mapDispatchToProps(dispatch) {
    return {
        getData: bindActionCreators(getData, dispatch)
    };
}

AppComponent.propTypes = {
    history: PropTypes.object.isRequired
};



export default translate("translations")(withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AppComponent))
);
