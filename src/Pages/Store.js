import React from 'react';
import { Gallery } from "react-gesture-gallery";

import './Store.css';

const images = [
  '../Images/store-0-min.png',
  '../Images/store-1-min.png',
  '../Images/store-2-min.png',
  '../Images/store-3-min.png'
];

const Store = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        if (index === 3) {
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
        marginLeft: "10vw",
        marginRight: "10vw", 
        background: "black",
        height: "90vh",
        width: "80vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
      className='center absolute-center'
    >
      {images.map(image => (
        <img  objectFit="contain" key={image} alt='rotating views of the establishment' src={require(`../Images/store-${index}-min.png`)} />
      ))}
    </Gallery>
        );
};

export default Store;