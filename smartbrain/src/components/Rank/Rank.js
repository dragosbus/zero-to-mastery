import React from 'react';

const Rank = (props) => (
    <div className="rank">
        <div>{`${props.name} your rank is ${props.entries}`}</div>
    </div>
);

export default Rank;