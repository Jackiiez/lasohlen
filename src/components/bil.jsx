import{  useState } from 'react';
import Lightbox from '../components/lightbox';
import Footer from './footer';
import NavBar from './navbar';
export default function Bil() {

  const [lightboxImages, setLightboxImages] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);//


console.log(currentImageIndex)



  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (<>
   <NavBar/>
    <section className='bil-section'>
      <h1 className="sponsore-heading">Alle mine sponsorer på min bil</h1>
      <p className="intro-text">Jeg er super glad for Peugeot. Bilen er miljøvenlig og har et flot design med masser af plads.
        Den er perfekt til både hverdag, træningsture, samt turneringer i både Danmark og hele Europa!</p>
      <p className="intro-text">Select sport 1947 ønsker ikke reklamer på biler, de er dog en kæmpe spiller for mine makkere og mig i beklædning, samt villige sponsorer af præmier til vores podier til de 5 afdelinger
        af Nordjyske Mesterskaber.</p>



        
      <div className='side-img-div'>
        <img className='side-img' src='bil1.jpg' alt='Left Side Image' onClick={() => openLightbox(['bil1.jpg'], 0)} />
        <img className='side-img' src='bil7.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil7.jpg'], 0)} />
         <img className='side-img' src='bil3.png' alt='Right Side Image' onClick={() => openLightbox(['bil3.png'], 0)} />
      </div>


      <div className='side-img-div'>
        <img className='side-img' src='bil7.jpg' alt='Left Side Image' onClick={() => openLightbox(['bil7.jpg'], 0)} />
        <img className='side-img' src='bil12.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil12.jpg'], 0)} /> 
        <img className='side-img' src='bil9.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil9.jpg'], 0)} /></div>
            <div className='side-img-div'>
           <img className='side-img' src='bil14.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil14.jpg'], 0)} />
            <img className='side-img' src='bil13.jpg' alt='Left Side Image' onClick={() => openLightbox(['bil13.jpg'], 0)} />
     
        <img className='side-img' src='bil15.jpg' alt='Right Side Image' onClick={() => openLightbox(['bil15.jpg'], 0)} /></div>
                 <div className='side-img-div'>

        <img className='side-img' src='bil2.png' alt='Left Side Image' onClick={() => openLightbox(['bil2.png'], 0)} />
              <img className='side-img' src='bil6.jpg' alt='Left Side Image' onClick={() => openLightbox(['bil6.jpg'], 0)} />
                  <img className='side-img' src='bil16.jpg' alt='Left Side Image' onClick={() => openLightbox(['bil16.jpg'], 0)} />
      </div>


    </section>
    <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
      <Footer/></>
  );
};


