
import  { useEffect, useRef, useState } from 'react';
import Lightbox from '../components/lightbox';
import Footer from './footer';
import NavBar from './navbar';

export default function Galleri() {
  const [sections, setGalleryItems] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRefs = useRef([]);


console.log(currentImageIndex)
  const [visibleItems, setVisibleItems] = useState({});

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const loadMoreItems = (sectionHeading) => {
    setVisibleItems(prev => ({
      ...prev,
      [sectionHeading]: (prev[sectionHeading] || 0) + 15
    }));
  };

  const showLessItems = (sectionHeading) => {
    setVisibleItems(prev => ({
      ...prev,
      [sectionHeading]: Math.max((prev[sectionHeading] || 0) - 15, 15)
    }));
  };

  useEffect(() => {
    fetch('/gallery.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setGalleryItems(data.sections || []);
        
        const initialVisibleItems = {};
        data.sections.forEach(section => {
          initialVisibleItems[section.heading] = 15; 
        });
        setVisibleItems(initialVisibleItems);
      })
      .catch(error => {
        console.error('Error fetching gallery items:', error);
      });
  }, []);

  return (
    <>
       <NavBar/>
      <div className="gallery-container">
        <h2 className="gallery-title">Velkommen til højdepunkter og gode minder i mit liv </h2>
        {Array.isArray(sections) && sections.length > 0 ? (
          sections.map(section => (
            <div key={section.heading} className="gallery-section">
              <h2 className="section-heading">{section.heading}</h2>
              <div className="gallery">
                {section.galleryItems.slice(0, visibleItems[section.heading] || 0).map(item => (
                  <div key={item.id} className="gallery-item" ref={setCardRef(item.id)}>
                    {item.image.endsWith('.mp4') ? (
                      <video
                        className="gallery-video"
                        src={item.image}
                        alt={item.title}
                        controls
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="gallery-image"
                        onClick={() => openLightbox([item.image], 0)}
                      />
                    )}
                  </div>
                ))}
              </div>
              {visibleItems[section.heading] < section.galleryItems.length && (
                <button onClick={() => loadMoreItems(section.heading)} className="load-more-button">
                  Load More
                </button>
              )}
              {visibleItems[section.heading] > 15 && (
                <button onClick={() => showLessItems(section.heading)} className="show-less-button">
                  Show Less
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No gallery items available.</p>
        )}
          <Footer/>
        <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
      </div>
    </>
  );
}
