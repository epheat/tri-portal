import React from 'react';
import classNames from 'classnames';

const Notification = ({ content, type }) => {

    const icons = () => {
        return {
            info: 'info',
            warn: 'warning',
            danger: 'block',
        }
    }

    return (
        <div className={classNames("tri-notification-container", {info: type == 'info'}, {warn: type == 'warn'}, {danger: type == 'danger'},)}>
            <div className="icon">
                <i className="material-icons">{icons()[type]}</i>
            </div>
            { content }
        </div>
    );
}

export default Notification;