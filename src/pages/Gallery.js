import React from 'react';
import ReactGallery from 'react-photo-gallery';

const photos = [
  { src: 'annabelle.jpg', width: 2000, height: 3000 },
  { src: 'bridesmaids.jpg', width: 2000, height: 3000 },  
  { src: 'matchingbags.jpg', width: 960, height: 540 },    
  { src: 'baptismblanket.jpg', width: 200, height: 200 },  
  { src: 'katie.jpg', width: 720, height: 960 },    
];

export default function Gallery(props){
    return <ReactGallery photos={photos} />
}
