/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import React, { Component } from 'react';
import Home from './Home';
import Menu from './API/Menu';
import Orders from './API/Order';
import AppRoute from './index';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import './css/general.css';
import awsmobile from './aws-exports';
import {Auth} from 'aws-amplify';

import Navbar from './components/Navbar';

export default class Main extends Component {

    constructor(props)  {
        super(props);
    }

    signOut = async(e) => {
        e.preventDefault();
        Auth.signOut()
            .then(() => {
                this.props.onStateChange('signedOut', null);
                console.log('signedOut')
            })
            .catch(err => console.log(err));    
    }

    render() {
        return (
            <div>
                { this.props.authState == 'signedIn' ?
                    (<BrowserRouter>
                        <div>
                            <Navbar fixed={false} />
           
                            <div className="content">
                                <h1>Triangle Portal</h1>
                                <h4>Welcome to the triangle online portal!</h4>
                            </div>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/main/home" component={Home} />
                                <Route exact path="/main/menus/:id" component={Menu} />
                                <Route exact path="/main/menus" component={Menu} />
                                <Route exact path="/main/orders" component={Orders} />
                            </Switch>
                        </div>
                    </BrowserRouter>) : null
                }
            </div>
        );
    }
}
