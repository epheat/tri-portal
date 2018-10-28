import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// button component we should use throughout the site to keep a consistent look.
// props:
//   text - what is displayed on the button
//   type - [success, info, warn, danger] - what color / style the button should have
//   onClick - callback function to be executed on click. Be sure to bind this in the parent component
const TriButton = ({ text, type, onClick, to }) => {

    const button = (
        <div
            className={classNames('tri-button',
                {success: type == 'success'},
                {info: type == 'info'},
                {warn: type == 'warn'},
                {danger: type == 'danger'})}
            onClick={onClick}
        >
            { text }
        </div>
    )

    return (
        <div className="tri-button-container">
            {
                to ?
                <Link className="tri-button-link" to={to}>
                    { button }
                </Link>
                :
                button
            }
        </div>
    )
}

export default TriButton;