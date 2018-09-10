/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Navbar, NavItem, Icon } from 'react-materialize';
import { Button, Image } from 'semantic-ui-react';

import TableContent from './API/TableContent';
import './css/general.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {API} from 'aws-amplify';

import Comment from './components/Comment';
import moment from 'moment';

import evanIcon from './assets/images/icon.jpg';

export default class Home extends Component {

    state = {
        data: [],
        loading: null,
        comment: {
            account: {
                icon: evanIcon,
                name: 'Evan Heaton',
                role: 'Admin',
            },
            content: "comment comment comment, comment comment comment",
            timePosted: 0,
            children: [
                {
                    account: {
                        icon: evanIcon,
                        name: 'Evan Heaton',
                        role: 'Admin',
                    },
                    content: "comment comment comment, comment comment comment",
                    timePosted: 1231233413,
                    children: [
                        {
                            account: {
                                icon: evanIcon,
                                name: 'Evan Heaton',
                                role: 'Admin',
                            },
                            content: "comment comment comment, comment comment comment",
                            timePosted: 1231233413,
                        }
                    ]
                },
                {
                    account: {
                        icon: evanIcon,
                        name: 'Evan Heaton',
                        role: 'Admin',
                    },
                    content: "comment comment comment, comment comment comment",
                    timePosted: 1231233413,
                    children: [
                        {
                            account: {
                                icon: evanIcon,
                                name: 'Evan Heaton',
                                role: 'Admin',
                            },
                            content: "comment comment comment, comment comment comment",
                            timePosted: 1231233413,
                        }
                    ]
                },
            ]
        }
    }

    fetch = async () => {
        this.setState(() => {
            return {
                loading: true
            }
        });

        API.get('ReactSample','/items/restaurants')
            .then(resp => {
                this.setState({
                    data: resp,
                    loading: false
                });
            })
            .catch (err => console.log(err))
    }

    initRestaurant = async () => {

        API.post('ReactSample','/items/init')
            .then(data => {
                alert('Successfully inserted restaurants');
                this.setState({
                    data: data,
                    loading: false
                });
            })
            .catch (err => console.log(err))
    }

    render() {
        console.log('data:' + JSON.stringify(this.state.data));
        return (
            <CSSTransitionGroup
            transitionName="sample-app"
            transitionEnterTimeout={500}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={true}>
            <div className="content">
                <h3>Comments Test</h3>
                <Comment comment={ this.state.comment }></Comment>
            </div>
            </CSSTransitionGroup>
        );
    }
}
