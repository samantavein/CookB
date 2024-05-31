import React from 'react';
import ImageComponent from './ImageComponent';

const images = [
  '/images/220-2.jpg',

  // Add more image URLs here
];


function AboutMe() {
    return ( 

        
      <div className="aboutme">
        {images.map((imageUrl, index) => (
          <ImageComponent key={index} imageUrl={imageUrl} />
        ))}


        <h3>Capturing the beauty of everyday details through photography!</h3>

        <div className="instagram-icon">
          <a href="https://www.instagram.com/photogramvisuals/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram Icon" />
          </a>
        </div>
      </div>
    );
  }
  

export default AboutMe;