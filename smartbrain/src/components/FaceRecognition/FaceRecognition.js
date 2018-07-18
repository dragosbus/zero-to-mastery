import React from 'react';

const FaceRecognition = ({imageUrl, box}) => (
    <div className="face-reg">
        <img id="image" src={imageUrl} alt=""/>
        <div className="box-face" style={{top: box.topRow, right:box.rightCol, bottom:box.bottomRow, left: box.leftCol}}></div>
    </div>
);

export default FaceRecognition;