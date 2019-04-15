import React from 'react';
import BrotherCard from './BrotherCard';

const MemberList = ({ members }) => {
    return (
        <div className="member-list">
            {
                members.map( (member, index) =>
                    <BrotherCard
                        side={ index%2 == 0 ? 'left' : 'right' }
                        { ...member }
                    />
                )
            }
        </div>
    )
}

export default MemberList;