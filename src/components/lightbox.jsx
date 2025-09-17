import { useState } from 'react';


const Lightbox = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !images || images.length === 0) return null;
    return (
    <div className="overlay">
      <div className="lightbox">
        <button className="close" onClick={onClose}>✖</button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="image" />
      </div>
    </div>
  );
};

export default Lightbox