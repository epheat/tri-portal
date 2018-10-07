import React from 'react';

const FormInput = ({ fieldName, value, callback }) => {
    return (
        <div className="tri-form-input-container">
            <div className="tri-form-label">{ fieldName }</div>
            <input
                className="tri-form-input"
                value={value}
                onInput={callback}
            />
        </div>
    );
}

export default FormInput;
