// Gallery.js
import React from 'react';
import ImageComponent from './ImageComponent';

const images = [
  '/images/20210716_201945-011.jpeg',
  '/images/20230420_211006-01-01.jpeg',
  '/images/2019-02-09 04.54.48 1.jpg',
  '/images/2019-03-10 03.16.43 14.jpg',
  '/images/2019-03-20 02.10.59 1.jpg',
  '/images/IMG_20190529_100747_953.jpg',
  '/images/2019-03-10 03.16.35 1.jpg',


  // Add more image URLs here
];

function Gallery() {
  return (
    <div className="gallery">
      {images.map((imageUrl, index) => (
        <ImageComponent key={index} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Gallery;
