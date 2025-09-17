
import { Link } from 'react-router';
import Lightbox from '../components/lightbox';

import { useEffect, useRef, useState } from 'react';
import Footer from './footer';
import NavBar from './navbar';
export default function Broenby() {







   const [lightboxImages, setLightboxImages] = useState([]);
      const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

console.log(currentImageIndex)




      const openLightbox = (images, index) => {
        setLightboxImages(images);
        setCurrentImageIndex(index);
        setLightboxOpen(true);
      };
    
      const closeLightbox = () => {
        setLightboxOpen(false);
      };









  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
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

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  const [cards, setCards] = useState([]);




  
  useEffect(() => {
    fetch('/broendby.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);

        if (Array.isArray(data.broendby)) {
          setCards(data.broendby);
        } else {
          console.error('Sponsors is not a valid array:', data.broendby);
          setCards([]);
        }
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);
  return (
    <>
       <NavBar/>
      <section className='fif-section'>
        <div className='fif-info-div'> <Link className='intro-text' to={""}><h1 className='sponsore-heading'>Brøndby IF</h1></Link>
          <Link className='intro-text' to={""}>


            <img className='fif-logo' src="bif.png" alt="" /></Link>
          {/* <p className='intro-text'>Her er det hold som har en meget personlig plads i mit hjerte.</p>
          <p className='intro-text'>Grunde til det her hold er en af mine personlige favoriter er fordi min søn og hans bedste venner spiller sammen på holdet</p>
          <p className='intro-text'>på trods af at det bare er et hygge hold så gør det mig inderligt glad at se min søn og hans venner spille kampe selvom det udelukkende er hygge bold</p> */}


          <img className='klubhus' src="cykel.jpg" alt="" onClick={() => openLightbox(["cykel.jpg"], 0)} />
        </div>
        <div className="comming-soon-container">

          <div className="movies-grid slider">
            {cards.map(card => (
              <div key={card.id} className="movie-card">

                <img src={card.img} alt={card.name} onClick={() => openLightbox([card.img], 0)} />

                <div className="movie-info">
                  <h3>{card.name}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>




      <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>

        <hr />

        <h2 className='posts-heading'>Brøndby stunder ⚽️🏆🥇</h2>
        <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0JmziuTQDRG14dr3kuQP8iLTTicF6APGazihP3b469Z2D9tLp2qpH8TCWzEegnESFl?rdid=gFb4MW3Ed5pUWQre#"}>
          Klik her eller på billedet for at gå vidre til Postet</Link>
        <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0JmziuTQDRG14dr3kuQP8iLTTicF6APGazihP3b469Z2D9tLp2qpH8TCWzEegnESFl?rdid=gFb4MW3Ed5pUWQre#"}>
          <img className='posts-img' src="bif-tur.jpg" alt="" />
        </Link><p className='posts-text'>Life is good ❤️☀️💙💛⚽️ hov Mr Vibæk og Emil Stabil .....</p>

      </div>
      
      <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>

        <hr />

        <h2 className='posts-heading'>Så vandt vi igen⚽️🏆🥇</h2>
        <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0mVMrBwTx39D1G66uGhBXFcb44K5cvSJwWdRvcgkBxET42uYJ3q41cYqawZ97JLLTl?rdid=sOCE55cJS6nI4MFv#"}>
          Klik her eller på billedet for at gå vidre til Postet</Link>
        <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0mVMrBwTx39D1G66uGhBXFcb44K5cvSJwWdRvcgkBxET42uYJ3q41cYqawZ97JLLTl?rdid=sOCE55cJS6nI4MFv#"}>
          <img className='posts-img' src="bifven.jpg" alt="" />
        </Link><p className='posts-text'>SEJR 🐣💙⚽️
4 - 3 ‼️🐣💙⚽️</p>

      </div>


{/* //////////////////////////////////////////////////////////////////////////// */}

      <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>

        <hr />

        <h2 className='posts-heading'>God minder💙💙</h2>
        <Link href={"https://www.facebook.com/thomas.voss.923/posts/pfbid025FKZRJNTVQfSDMzTfidNrbDbURfzDZfN6EcLzfH8gLpKxZD69Ge2LBZrNnSndHNNl?rdid=FV8g1qpvDU9AE3HR#"}>
          Klik her eller på billedet for at gå vidre til Postet</Link>
        <Link href={"https://www.facebook.com/thomas.voss.923/posts/pfbid025FKZRJNTVQfSDMzTfidNrbDbURfzDZfN6EcLzfH8gLpKxZD69Ge2LBZrNnSndHNNl?rdid=FV8g1qpvDU9AE3HR#"}>
          <img className='posts-img' src="minder.jpg" alt="" />
        </Link><p className='posts-text'>🐣💙⚽️
 ‼️🐣💙⚽️</p>

      </div>
      {/* //////////////////////////////////////////////////////////////////////////// */}

      <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>

        <hr />

        <h2 className='posts-heading'>Brøndby have fest💙💙</h2>

 <video controls width="950">
              <source src="bif-function.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
     

       <p className='posts-text'>🐣💙⚽️
 ‼️🐣💙⚽️</p>

      </div>
         <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>

        <hr />

        <h2 className='posts-heading'>Danske mestre 2021💙💙</h2>

 <video controls width="950">
              <source src="danske-mestre1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
             <video controls width="950">
              <source src="danske-mestre2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
             <video controls width="950">
              <source src="danske-mestre3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
             <video controls width="950">
              <source src="danske-mestre4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
             <video controls width="950">
              <source src="danske-mestre5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
             <video controls width="950">
              <source src="danske-mestre6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
             <video controls width="950">
              <source src="danske-mestre7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
     


      </div>
        <Footer/>
           <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </>

  );
};

