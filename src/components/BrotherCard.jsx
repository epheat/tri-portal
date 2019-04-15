import React from 'react';
import classNames from 'classnames';

import profile from '../assets/images/crest.png';

const BrotherCard = ({ name, image, role, pledgeClass, side }) => {
    const img = image ? image : profile;
    return (
        <div className={classNames("brother-card", side)}>
            <img className="brother-image" src={img} />
            <div className="card-text">
                <h3>{ name }</h3>
                <h4>{ role }</h4>
                <p>{ pledgeClass }</p>
            </div>
        </div>
    );
}

export default BrotherCard;