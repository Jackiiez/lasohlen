"use client"

import  { useEffect, useState } from 'react';
import Lightbox from '../components/lightbox';
import { Link } from 'react-router';
import Footer from './footer';
import NavBar from './navbar';


export default function Salg() {
   
    const [lightboxImages, setLightboxImages] = useState([]);
    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [cards, setCards] = useState([]);

console.log(currentImageIndex)
    useEffect(() => {
        fetch('/salg.json')
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

   <NavBar/>

            <div className='cards'>
                <h1 className='salgs-heading'>Hej og velkommen til min salgs-side,føl dig endelig velkommen til at kigge på 
                    </h1>
                <h2 className='salgs-heading'>  nogen af de artikler, som jeg har til salg 😀</h2>
 


                <div className='outter-card-div'>
                    {cards.map((card, index) => (

                        <div key={index} className="itemdiv">
                            <div className="card">
                                <h3 className='item-title'>{card.name}</h3>
                              




                                <img className='itemimg' onClick={() => openLightbox([card.img], 0)} src={card.img} alt={`${card.name} Image`} />



                                <Link to={card.facebook} className='cardtext'>{card.facebook ? `Kontakt mig på min facebook/messenger  : ${card.facebook}` : 'No Facebook link available.'}</Link>
                                <Link to="mailto:Larsohlen67@gmail.com" className='cardtext'>{card.link}</Link>
                            </div>
                        </div>
                    ))}</div>




            </div>
              <Footer/>
            <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
        </>
    );
}