import React from 'react';
import moment from 'moment';

/**
 * props:
 *  account: {
 *      icon: url_for_icon
 *      name: username
 *      role: user_role
 *  }
 */
const AccountDetail = ({ account }) => {
    return (
        <div className="tri-account-detail">
            <img className="icon" src={ account.icon }></img>
            <div className="text">
                <h3 className="name">{ account.name }</h3>
                <p className="role">{ account.role }</p>
            </div>
        </div>
    );
};


/**
 * props:
 *  comment: {
 *      account: AccountDetail
 *      timePosted: timestamp
 *      content: comment_content
 *      children: [
 *          Comment,
 *          ...
 *      ]
 *  }
 * 
 */
class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            writingReply: false,
            reply: "",
        }

        // function bindings
        this.toggleLike = this.toggleLike.bind(this);
        this.openReply = this.openReply.bind(this);
        this.cancelReply = this.cancelReply.bind(this);
    }

    toggleLike() {
        this.setState( prevState => ({
            liked: !prevState.liked,
        }));
    }

    openReply() {
        this.setState({ writingReply: true });
    }

    cancelReply() {
        if (this.state.reply) {
            // launch a confirmation modal "you will lose progress"
        }
        this.setState({ writingReply: false });
    }

    submitReply() {

    }

    render() {
        return (
            <div className="tri-comment-container">
                <AccountDetail account={this.props.comment.account}></AccountDetail>
                <p className="light">{ moment(this.props.comment.timePosted).format('MM/DD, hh:mm a') }</p>
                <div className="comment-body">
                    <p>{ this.props.comment.content }</p>
                </div>
                <div className="comment-actions">
                    <div className="link-button" onClick={this.toggleLike}>{ this.state.liked ? "Unlike" : "Like"}</div>
                    <div className="link-button" onClick={this.openReply}>Reply</div>
                </div>
                {
                    this.state.writingReply &&
                    <div className="reply">
                        <textarea rows="6"></textarea>
                        <div className="link-button" onClick={this.cancelReply}>Cancel</div>
                        <div className="link-button" onClick={this.submitReply}>Submit</div>
                    </div>
                }
                <div className="comment-children">
                    {
                        this.props.comment.children &&
                        this.props.comment.children.map( comment =>
                            <Comment comment={comment} />
                        )
                    }
                </div>
            </div>
        );
    }
};

export default Comment;