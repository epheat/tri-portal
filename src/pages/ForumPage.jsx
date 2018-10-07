import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { API } from 'aws-amplify';
import { NavLink } from 'react-router-dom';

import loadingIcon from '../assets/loading.gif';
import Comment from '../components/Comment';
import evanIcon from '../assets/images/icon.jpg';
import ForumPost from '../components/ForumPost';

class ForumPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            postList: [],
        }

        this.getPostList = this.getPostList.bind(this);
        this.createNewPost = this.createNewPost.bind(this);
    }
    
    // executed when the component lands on the page. Like Vue's 'mounted' function
    componentDidMount() {
        this.getPostList();
    }

    getPostList() {
        // get all posts
        API.get('triapi', '/posts').then( response => {
            this.setState({ loading: false, postList: response });
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
                        <NavLink to="/forum/new">New Post</NavLink>
                    </div>
                    <div className="forum-posts">
                    { this.state.loading && <img className="loading-icon" src={loadingIcon} />}
                    {
                        this.state.postList.map( post => 
                            <ForumPost key={post.post_id} post={post}></ForumPost>
                        )
                    }
                    </div>
                </div>
            </CSSTransitionGroup>
        )
    }
}

export default ForumPage;