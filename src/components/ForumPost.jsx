import React from 'react';
import UpDownVote from './actions/UpDownVote';
// stateful react component to display a forum post in list view
// todo: click on a forum post to redirect to the post page, to view comments, etc.
class ForumPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = { upVoted: false, downVoted: false }

        this.onUpVote = this.onUpVote.bind(this);
        this.onDownVote = this.onDownVote.bind(this);
    }

    componentDidMount() {
        // todo: API call to get user's action status on this ForumPost
    }

    submitAction() {
        // todo: API call on ForumActions / ForumVotes table
    }

    onUpVote() {
        console.log("upvote");
        this.setState(prevState => (
            {
                upVoted: !prevState.upVoted,
                downVoted: false,
            }
        ));
    }
    onDownVote() {
        console.log("downvote");
        this.setState(prevState => (
            {
                downVoted: !prevState.downVoted,
                upVoted: false,
            }
        ));
    }

    render() {
        return (
            <div className="forum-post">
                <div className="actions-and-text">
                    <div className="actions">
                        {/* Todo: use different action based on post type */}
                        <UpDownVote
                            onUpVote={this.onUpVote}
                            onDownVote={this.onDownVote}
                            upVoted={this.state.upVoted}
                            downVoted={this.state.downVoted}
                        />
                    </div>
                    <div className="text">
                        <h2 className="title">{ this.props.post.title }</h2>
                        <div className="author">{ this.props.post.author_username }</div>
                        <p className="content">{ this.props.post.content }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForumPost;