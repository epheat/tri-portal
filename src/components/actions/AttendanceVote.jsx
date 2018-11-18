import React from 'react';
import classNames from 'classnames';

const UpDownVote = ({ onSelect, selected }) => {
    return (
        <div className="action-container attendance-vote-container">
            <div className={classNames("dot", {selected: selected})} onClick={onSelect} />
        </div>
    );
}

export default UpDownVote;