import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
    }

    getPostList() {
        // TODO: ajax call to get most recent posts
        // for now, I'll return an array of dummy data
        return [
            {

            }
        ]
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
                    </div>
                    <Comment comment={ this.state.comment }></Comment>
                </div>
            </CSSTransitionGroup>
        )
    }
}

export default ForumPage;