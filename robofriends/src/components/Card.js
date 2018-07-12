import React from 'react';


export const Card = (props) =>{
    let imgSrc = `https://robohash.org/${props.img}`;
    return(
        <li>
            <img src={imgSrc} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </li>
    );
};