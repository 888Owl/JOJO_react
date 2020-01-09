import React from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";

import './Store.css';

const images = [
    'https://i.ibb.co/VDV5Bb1/store-0-min.jpg',
    'https://i.ibb.co/9tfF8TP/store-1-min.jpg',
    'https://i.ibb.co/vPTyqgZ/store-2-min.jpg',
    'https://i.ibb.co/2YGQQhZ/store-3-min.jpg'
];

const Store = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        if (index === images.length) {
          setIndex(0);
        } else {
          setIndex(prev => prev + 1);
        }
      }, 3000);
      return () => clearInterval(timer);
    }, [index]);   
    return(
        <Gallery
      style={{
        background: "black",
        height: "100vh",
        width: "100vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
        );
};

export default Store;