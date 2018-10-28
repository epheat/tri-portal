/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {API} from 'aws-amplify';
import Notification from '../components/Notification';

import moment from 'moment';

export default class Home extends Component {

    state = {
        data: [],
        loading: null,
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
        return (
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionAppearTimeout={300}
                transitionLeaveTimeout={200}
                transitionAppear={true}
                transitionEnter={true}
                transitionLeave={true}
            >
                <div className="home-page">
                    <div className="page-content">
                        <h1>Triangle Portal</h1>
                        <p>
                            Welcome to the Triangle Portal! This is your one-stop shop for the latest triangle events, announcements, and discussions.
                        </p>
                        <Notification
                            content={<p>Attention CS majors! We need contributors to improve and maintain the Triangle Portal!</p>}
                            type="info"
                        >
                        </Notification>
                        <Notification
                            content={<p>Attention CS majors! We need contributors to improve and maintain the Triangle Portal!</p>}
                            type="warn"
                        >
                        </Notification>
                        <Notification
                            content={<p>Attention CS majors! We need contributors to improve and maintain the Triangle Portal!</p>}
                            type="danger"
                        >
                        </Notification>
                    </div>
                </div>
            </CSSTransitionGroup>
        );
    }
}
