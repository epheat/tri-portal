import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { API } from 'aws-amplify';
import { NavLink } from 'react-router-dom';

import loadingIcon from '../assets/loading.gif';
import Comment from '../components/Comment';
import evanIcon from '../assets/images/icon.jpg';
import ForumPost from '../components/ForumPost';
import SearchBar from '../components/SearchBar';
import TriButton from '../components/TriButton';

class ForumPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            postList: [],
            filteredList: [],
            searchTerm: "",
            error: null,
        }

        this.getPostList = this.getPostList.bind(this);
        this.createNewPost = this.createNewPost.bind(this);
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }
    
    // executed when the component lands on the page. Like Vue's 'mounted' function
    componentDidMount() {
        this.getPostList();
    }

    getPostList() {
        API.get('triapi', '/posts').then( response => {
            this.setState({ loading: false, postList: response, error: null });
            this.computeFilteredList();
        }).catch( err => {
            console.log(err);
            this.setState({ loading: false, error: err.message });
        });
    }

    createNewPost() {
        console.log("hi");
    }

    computeFilteredList() {
        this.setState(prevState => {
            return ({
                filteredList: this.state.postList.filter( post => {
                    return prevState.searchTerm == "" || post.title.includes(prevState.searchTerm);
                })
            })
        })
    }

    updateSearchTerm(e) {
        let term = e.target.value;
        this.setState({ searchTerm: term });
        this.computeFilteredList();
    }

    filteredList() {
        return this.state.postList.filter( post => {
            return this.state.searchTerm == "" || post.title.includes(this.state.searchTerm);
        })
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
                    <div className="page-content">
                        <h1>Discussions/Posts</h1>
                        <div className="forum-actions">
                            <TriButton
                                to="/forum/new"
                                text="New Post"
                                type="success"
                            />
                        </div>
                        <div className="forum-search-bar">
                            <SearchBar
                                value={this.state.searchTerm}
                                onChange={this.updateSearchTerm}
                                placeholder="Search"
                            />
                        </div>
                        <div className="forum-posts">
                        { this.state.loading && <img className="loading-icon" src={loadingIcon} />}
                        { this.state.error && <p className="error">{ this.state.error }</p>}
                        {
                            // for each post, in the postList, create a ForumPost component.
                            // each child in a .map() should have a unique 'key' property
                            this.state.filteredList.map( post => 
                                <ForumPost key={post.post_id} post={post}></ForumPost>
                            )
                        }
                        { (!this.state.loading && !this.state.error && this.state.filteredList.length == 0) && <span>No posts :(</span> }
                        </div>
                    </div>
                </div>
            </CSSTransitionGroup>
        )
    }
}

export default ForumPage;