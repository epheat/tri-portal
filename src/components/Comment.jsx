import React from 'react';
import moment from 'moment';

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

class Comment extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.comment.account.icon);
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
        this.setState({ writingReply: false });
    }

    render() {
        return (
            <div className="tri-comment-container">
                <AccountDetail account={this.props.comment.account} timePosted={this.props.comment.timePosted}></AccountDetail>
                <p className="light">{ this.props.comment.timePosted }</p>
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