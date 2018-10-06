import React from 'react';

const ForumPost = ({ post }) => {
    return (
        <div className="forum-post">
            <div className="actions-and-text">
                <div className="actions">
                    <div className="upvote"></div>
                    <div className="dot"></div>
                    <div className="downvote"></div>
                </div>
                <div className="text">
                    <h2 className="title">{ post.title }</h2>
                    <div className="author">{ post.author_username }</div>
                    <p className="content">{ post.content }</p>
                </div>
            </div>
        </div>
    );
}

export default ForumPost;