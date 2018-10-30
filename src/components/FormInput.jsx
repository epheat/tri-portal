import React from 'react';
import SearchBar from './SearchBar.jsx';

const FormInput = ({ fieldName, value, callback, textarea }) => {
    return (
        <div className="tri-form-input-container">
            <div className="tri-form-label">{ fieldName }</div>
            {
                textarea ?
                <textarea
                    className="tri-form-input"
                    value={value}
                    onInput={callback}
                    rows={6}
                />
                :
                <SearchBar
                    value={value}
                    onChange={callback}
                />
            }
        </div>
    );
}

export default FormInput;
