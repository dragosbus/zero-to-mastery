import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => (
    <div className="link-form">
        <p>This magic will detect faces</p>
        <div className="form">
            <input onChange={onInputChange} type="text"/>
            <button onClick={onButtonSubmit}>Detect</button>
        </div>
    </div>
);

export default ImageLinkForm