import React from 'react';
import classNames from 'classnames';

const SearchBar = ({ value, onChange, placeholder }) => {
    return (
        <div className="tri-search-bar-container">
            <input
                className="tri-search-bar input-effect effect-10"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type="text"
            />
            <span className="focus-bg"></span>
        </div>
    );
}

export default SearchBar;