import React from 'react';
import { API } from 'aws-amplify';
import Comment from '../components/Comment';
import SearchBar from '../components/SearchBar';
import TriButton from '../components/TriButton';
import moment from 'moment';
import uuid from 'uuid';

import profile from '../assets/images/crest.png';

class ForumPostView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // comments will not be a property of post. It must be managed through separate APIs, so
            // go ahead and decouple them.
            post: null,
            comments: [],
            error: "",
            loading: true,
            commentsLoading: true,
            commentInput: ""
        }

        this.updateComment = this.updateComment.bind(this);
        this.submitTopLevelComment = this.submitTopLevelComment.bind(this);
        this.clearComment = this.clearComment.bind(this);
    }

    componentWillMount() {
        // ajax call to load post from post_id
        API.get('triapi', '/posts/' + this.props.match.params.post_id).then( response => {
            console.log(response);
            this.setState({ loading: false, post: response[0], error: null });
        }).catch( err => {
            console.log(err);
            this.setState({ loading: false, error: err.message });
        })

        // ajax call to load comments for this post_id
        API.get('triapi', '/comments/' + this.props.match.params.post_id).then( response => {
            console.log(response);
            this.setState({ commentsLoading: false });
        }).catch( err => {
            console.log(err);
            this.setState({ loading: false, error: err.message });
        })
    }

    updateComment(e) {
        let comment = e.target.value;
        this.setState({ commentInput: comment });
    }

    submitTopLevelComment() {
        // TODO: API call to submit top level comment
        // TODO: confirmation for submit comment
        console.log("Submit comment.");
        let currentTime = moment.unix();
        let commentContent = this.state.commentInput;
        let comment = { content: commentContent, top_level: true }

        API.post('triapi', '/comments', { body: comment }).then( response => {
            console.log(response);
            let comment_id = response.commentId;

            let newComments = this.state.comments;
            newComments.splice(0, 0, {
                comment_id: comment_id,
                account: {
                    icon: profile,
                    name: "epheat",
                    role: "admin"
                },
                timestamp: currentTime,
                content: commentContent,
                children: [],
            })
    
            this.setState({ commentInput: "", comments: newComments });
        }).catch( err => {
            console.log(err);
            this.setState({ error: err.message });
        })
    }

    clearComment() {
        // TODO: confirmation popup, if commentInput isn't empty
        if (this.commentInput != "") {

        }
        console.log("Clear comment.");
        this.setState({ commentInput: "" });
    }

    render() {
        return (
            <div className="forum-post-view">
                <div className="page-content">
                    { this.state.error }
                    {
                        this.state.loading ? <div>loading</div>
                        :
                        (
                            <div>
                                <h1>{ this.state.post.title }</h1>
                                <h3>{ this.state.post.author_username }</h3>
                                <p>{ this.state.post.content }</p>
                            </div>
                        )
                    }
                    <div className="comments-container">
                        <h3>Comments:</h3>
                        {/* TODO: comments-reply-bar as a Component */}
                        {/* use it here and in Comment.jsx */}
                        <div className="comments-reply-bar">
                            <SearchBar
                                value={this.state.commentInput}
                                onChange={this.updateComment}
                                placeholder="Leave a comment..."
                            />
                            <div className="comments-actions">
                                <TriButton
                                    onClick={this.submitTopLevelComment}
                                    text="Post"
                                    type="success"
                                />
                                <TriButton
                                    onClick={this.clearComment}
                                    text="Clear"
                                    type="warn"
                                />
                            </div>
                        </div>
                        {
                            !this.state.loading && 
                            this.state.comments &&
                            this.state.comments.map( comment => 
                                (<Comment
                                    key={comment.comment_id}
                                    comment={comment}
                                />)
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ForumPostView;