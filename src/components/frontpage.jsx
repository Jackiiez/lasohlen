
import  { useState, useEffect, useRef } from 'react';
import Lightbox from '../components/lightbox';


export default function Frontpage() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRefs = useRef([]);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/videoer.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);

        if (Array.isArray(data.sponsors)) {
          setCards(data.sponsors);
        } else {
          console.error('Sponsors is not a valid array:', data.sponsors);
          setCards([]);
        }
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

console.log(cards)
console.log(currentImageIndex)

  
  // Animation on load for video cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);





  // Lightbox functions
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

  return (
    <>
      <div className="hero">
        <h1>Lars Ohlen {"(LAS"}</h1>
        <h1>the double trouble{")"}</h1>
      </div>

      <div className="hero-content">
        <section ref={setCardRef(0)} data-index={0} className={`movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
          <div className="content-container">
            <div className="about">
              <h2 className="about__heading">småt om mig</h2>
              <p>Dedikeret Fodboldgolfer med øgenavnet LAS</p>
              <p>Tidligere Maraton-løber og badmintonspiller</p>
              <p>Realkreditnørd med meget mere</p>
              <p>Altid klar med et godt råd om boligkøb</p>
              <p>Valg af lån i ejerbolig</p>
              <p>Godkendelse af økonomi og meget mere</p>
            </div>
            <div className="image-container">
              <div className="main-image-container">
                <img className="main-image" src="vinderet.jpg" alt="Main Image" onClick={() => openLightbox(['vinderet.jpg'], 0)} />
              </div>
              <div className="grid-images">
                <img className="champagne" src="vinderto.jpg" alt="Champagne" onClick={() => openLightbox(['vinderto.jpg'], 0)} />
                <img className="kærlighed" src="vinder3.jpg" alt="Kærlighed" onClick={() => openLightbox(['vinder3.jpg'], 0)} />
              </div>
            </div>
            <div className="image-container">
              <div className="main-image-container">
                <img className="main-image" src="DMvinder.jpg" alt="Main Image" onClick={() => openLightbox(['DMvinder.jpg'], 0)} />
              </div>
              <div className="grid-images">
                <img className="champagne" src="champange.jpg" alt="Champagne" onClick={() => openLightbox(['champange.jpg'], 0)} />
                <img className="kærlighed" src="kærlighed.jpg" alt="Kærlighed" onClick={() => openLightbox(['kærlighed.jpg'], 0)} />
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="coming-soon-container">
            <p>videoer</p>
            <div className="movies-grid slider">
              
              <div ref={setCardRef(1)} data-index={1} className={`movie-card ${visibleCards.includes(1) ? 'visible' : ''}`}>
                <video controls width="500">
                  <source src="video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="movie-info">
                  <h3>Football Video 1</h3>
                  <p>Watch this amazing football video!</p>
                </div>
              </div>
              <div ref={setCardRef(2)} data-index={2} className={`movie-card ${visibleCards.includes(2) ? 'visible' : ''}`}>
                <video controls width="500">
                  <source src="vip.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="movie-info">
                  <h3>Football Video 2</h3>
                  <p>Enjoy the highlights of the match!</p>
                </div>
              </div>
              <div ref={setCardRef(3)} data-index={3} className={`movie-card ${visibleCards.includes(3) ? 'visible' : ''}`}>
                <video controls width="500">
                  <source src="video3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="movie-info">
                  <h3>Football Video 3</h3>
                  <p>Check out this fantastic goal!</p>
                </div>
              </div>
              <div ref={setCardRef(4)} data-index={4} className={`movie-card ${visibleCards.includes(4) ? 'visible' : ''}`}>
                <video controls width="500">
                  <source src="sort-hvid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="movie-info">
                  <h3>Football Video 4</h3>
                  <p>Relive the best moments of the game!</p>
                </div>
              </div>
              <div ref={setCardRef(5)} data-index={5} className={`movie-card ${visibleCards.includes(5) ? 'visible' : ''}`}>
                <video controls width="500">
                  <source src="clean.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="movie-info">
                  <h3>Football Video 5</h3>
                  <p>Witness the thrilling finale!</p>
                </div>
              </div>
              <div ref={setCardRef(6)} data-index={6} className={`movie-card ${visibleCards.includes(6) ? 'visible' : ''}`}>
                <video controls width="500">
                  <source src="fodbold.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="movie-info">
                  <h3>Football Video 6</h3>
                  <p>Catch the excitement of the tournament!</p>
                </div>
              </div>
              <div ref={setCardRef(7)} data-index={7} className={`movie-card ${visibleCards.includes(7) ? 'visible' : ''}`}>
                <video controls width="500">
                  <source src="swedishopenvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="movie-info">
                  <h3>Football Video 7</h3>
                  <p>Catch the excitement of the tournament!</p>
                </div>
              </div>
              <div ref={setCardRef(8)} data-index={8} className={`movie-card ${visibleCards.includes(8) ? 'visible' : ''}`}>
                <video controls width="500">
                  <source src="swedishopenvideo2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="movie-info">
                  <h3>Football Video 7</h3>
                  <p>Catch the excitement of the tournament!</p>
                </div>
              </div>
            </div>
          </div>
          

        </section>
      </div>

      <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </>
  );
}
