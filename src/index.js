/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Main from './Main';
import awsconfig from './aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
import './scss/tri-portal.scss';

Amplify.configure(awsconfig);

require('file-loader?name=[name].[ext]!./index.html');
require("babel-core/register");
require("babel-polyfill");

class App extends Component {

    constructor(props) {
        super(props);
    }

    handleWindowClose = async (e) => {
        e.preventDefault();
        // Auth.signOut()
        //     .then()
        //     .catch(err => console.log(err))
    }

    componentWillMount() {
        window.addEventListener('beforeunload', this.handleWindowClose);
    }

    componentWillUnMount() {
        window.removeEventListener('beforeunload', this.handleWindowClose);
    }

    render() {
        return (
            <Authenticator hide={[Greetings]}>
                <Main />
            </Authenticator>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));