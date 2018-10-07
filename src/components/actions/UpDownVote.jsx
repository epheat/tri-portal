import React from 'react';
import classNames from 'classnames';

const UpDownVote = ({ onUpVote, onDownVote, upVoted, downVoted }) => {
    return (
        <div className="up-down-vote-container">
            <div className={classNames("upvote", {voted: upVoted})} onClick={onUpVote}></div>
            <div className="dot"></div>
            <div className={classNames("downvote", {voted: downVoted})} onClick={onDownVote}></div>
        </div>
    );
}

export default UpDownVote;