import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { API } from 'aws-amplify';

import Comment from '../components/Comment';
import evanIcon from '../assets/images/icon.jpg';

class ForumPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postList: null,
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

        this.getPostList = this.getPostList.bind(this);
        this.createNewPost = this.createNewPost.bind(this);
    }
    
    // executed when the component lands on the page. Like Vue's 'mounted' function
    componentDidMount() {
        this.setState({ postList: this.getPostList() });
    }

    getPostList() {
        // TODO: ajax call to get most recent posts
        // apiName might be triportal73c3a9ad??
        API.get('triapi', '/posts/abcd').then( response => {
            console.log(response);
        }).catch( err => {
            console.log(err);
        })
    }

    createNewPost() {
        console.log("hi");
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
                <div className="forum-page">
                <h1>Discussions/Posts</h1>
                    <div className="forum-search-bar">
                        search bar
                        <button onClick={this.createNewPost}>new post</button>
                    </div>
                    {/* <Comment comment={ this.state.comment }></Comment> */}
                </div>
            </CSSTransitionGroup>
        )
    }
}

export default ForumPage;