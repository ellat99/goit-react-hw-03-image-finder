import React from 'react';
const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={imageUrl} alt={alt} />
    </li>
  );
};
export default ImageGalleryItem;
