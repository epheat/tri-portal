import React from 'react';

import profile from '../assets/images/icon.jpg';

const BrotherCard = ({ name, image, role, pledgeClass }) => {
    return (
        <div className="brother-card">
            <img className="brother-image" src={profile} />
            <div className="card-text">
                <h3>{ name } - { role }</h3>
                <p>{ pledgeClass }</p>
            </div>
        </div>
    );
}

export default BrotherCard;