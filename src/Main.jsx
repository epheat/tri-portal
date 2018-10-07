/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import React, { Component } from 'react';
import Home from './pages/Home';
import MembersPage from './pages/MembersPage';
import ForumPage from './pages/ForumPage';
import ForumNewPost from './pages/ForumNewPost';
import AppRoute from './index';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import Navbar from './components/Navbar';

export default class Main extends Component {

    constructor(props)  {
        super(props);
        this.state = {
            
        }
        
        // bind signOut since we're passing it as a prop to Navbar
        this.signOut = this.signOut.bind(this);
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

    componentWillMount() {
        
    }

    render() {
        return (
            <div>
                { this.props.authState == 'signedIn' ?
                    (<BrowserRouter>
                        <div>
                            <Navbar fixed={false} user={this.props.authData} signOut={this.signOut} />
                            {/* a Switch will render exactly 1 of its child routes based on current url */}
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/" component={Home} />
                                <Route exact path="/members" component={MembersPage} />
                                <Route exact path="/forum" component={ForumPage} />
                                <Route exact path="/forum/new" component={ForumNewPost} />
                            </Switch>
                        </div>
                    </BrowserRouter>) : null
                }
            </div>
        );
    }
}
