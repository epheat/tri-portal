import React from 'react';
// stateless functional react component to display a forum post in list view
// todo: click on a forum post to redirect to the post page, to view comments, etc.
const ForumPost = ({ post }) => {
    return (
        <div className="forum-post">
            <div className="actions-and-text">
                <div className="actions">
                    <div className="vote-container">
                        <div className="upvote"></div>
                        <div className="dot"></div>
                        <div className="downvote"></div>
                    </div>
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