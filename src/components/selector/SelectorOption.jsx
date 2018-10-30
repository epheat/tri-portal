import React from 'react';
import classNames from 'classnames';

const SelectorOption = ({ selected, children, onClick, index }) => {
    const handleClick = () => {
        onClick(index)
    }
    return (
        <div
            className={classNames('selector-option', { selected: selected })}
            onClick={handleClick}
        >
            { children }
        </div>
    )
}

export default SelectorOption;