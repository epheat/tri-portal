import React from 'react';
import BrotherCard from './BrotherCard';

const MemberGrid = ({ members }) => {
    return (
        <div className="member-grid">
            {
                members.map( brother => 
                    <BrotherCard
                        key={ brother.id }
                        { ...brother }
                    />
                )
            }
        </div>
    )
}

export default MemberGrid;