// ImageComponent.js
import React from 'react';

const ImageComponent = ({ imageUrl }) => (
  <div className="image">
    <img src={imageUrl} alt="Adventure" />
  </div>
);

export default ImageComponent;

