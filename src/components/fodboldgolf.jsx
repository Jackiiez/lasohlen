

import { Link } from 'react-router';
import Lightbox from '../components/lightbox';
import { useEffect, useRef, useState } from 'react';
import Footer from './footer';
import NavBar from './navbar';

export default function Fodboldgolf() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);



  const [lightboxImages, setLightboxImages] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);




console.log(currentImageIndex)
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



  // Lightbox functions






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
    <div className={`fodboldgolf-container`}>
      <h2 className='sponsore-heading'>Fodboldgolferen LAS ⚽️⛳️🕳</h2>
      <article>
        <div className='mails'>
          <p>kildedalfg@gmail.com</p>
          <p>frederikssund.fodboldgolf.klub@gmail.com</p>
        </div>
        <h2 className='sponsore-heading'>Mine podier🏆</h2>
        <p className='placeringer'>
          • Verdensmester i 55+<br />
          • 41 podier🏆<br />
          • 🥇19 stk. 🥈8 stk. 🥉14 stk.<br />
          • Vigtigste titler:<br />
          • 🏆Verdensmester i single i 55 + i 2023<br />
          • 🇫🇷 Frankrig Open i single overall i 2024<br />
          • Vandt med 12 skud - største internationale sejr i 6 år!<br />
          • 🇪🇸 Spanien Open i herredouble i 2018 og 2021<br />
          • 🇫🇮 Finland Open i herredouble i 2019<br />
          • 🇩🇰 Danish Open i herredouble 2024<br />
          • Spillet i alt 81 anlæg med mindst 18 huller<br />
          • Jeg har spillet præcis 100 baner med 18 huller, som vil frigiver dene hjememside ligenu<br />
          • Jeg har måske spillet aller flest baner af alle i hele verden ifølge de ”erfarne”<br />
          • Verdensrangliste højdepunkter:<br />
          • 55+ nummer 1 i verden<br />
          • Herredouble nummer 2 i verden<br />
          • Herresingle nummer 7 i verden<br />
          • Alias udover LAS<br />
          • THE GRUMPHY OLD MAN😡<br />
          • alias WORLD CHAMPION 55+<br />
          • Old Boys Football golf ⚽️⛳️🕳️<br />
          • Lars OHLEN🇩🇰
        </p>

        <p>
          * Jeg har spillet 81 anlæg med mindst 18 huller ⚽️⛳️🕳<br />
          * Jeg har spillet 100 baner i alt med 18 huller ⚽️⛳️🕳<br />
          * sandsynligvis den i verden, der har spillet allerflest ⚽️⛳️🕳
        </p>




        {/* <hr className="divider" /> */}




        <div className={`fodboldgolf-grid`}>


          <div ref={setCardRef(0)} data-index={0} className={`movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
            <p>
              *Swedish Open 2022 jeg er i mit livs topform, har lige vundet Czeck Open og Danish <br />
              Open i 55+ og her kommer Vibæk og jeg KÆMPE foran efter 9 af 36 huller. Det<br />
              kunne vi ikke tåle og spillede os af podiet 😂😂🤣😢. To puts fra min fod - hul 1
            </p>

            <video controls width="500">
              <source src="swedishopenvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>



          <div ref={setCardRef(1)} data-index={1} className={`movie-card ${visibleCards.includes(1) ? 'visible' : ''}`}>
            <p>
              *Swedish Open 2022 jeg er i mit livs topform, har lige vundet Czeck Open og Danish <br />
              Open i 55+ og her kommer Vibæk og jeg KÆMPE foran efter 9 af 36 huller. Det<br />
              kunne vi ikke tåle og spillede os af podiet 😂😂🤣😢. To puts fra min fod - hul 3
            </p>

            <video controls width="500">
              <source src="swedishopenvideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>


          <div ref={setCardRef(2)} data-index={2} className={`movie-card ${visibleCards.includes(2) ? 'visible' : ''}`}>
            <p>
              * En af nye bedste vennerne Thomas Skov Rasmussen:<br />
              * hjælper mig med at arrangere EM i Fodboldgolf<br />
              * laver den vildeste artikel om international Fodboldgolf
            </p>

            <img className='fg-img' src="ven.jpg" alt="" onClick={() => openLightbox(['ven.jpg'], 0)} />
          </div>



          <div ref={setCardRef(3)} data-index={3} className={`movie-card ${visibleCards.includes(3) ? 'visible' : ''}`}>
            <p>
              Maj 2022 andet stævne, hvor jeg også deltager i 55+.
            </p>
            <p>Jeg vinder Czeck Open 2022 foran Strandberg og Niedermeyer,</p>
            <p> som på samme bane i 2021 blev nr. 1 og 2 til VM i 55+</p>

            <img className='fg-img' src="czec.jpg" alt="" onClick={() => openLightbox(['czec.jpg'], 0)} />
          </div>




          <div ref={setCardRef(4)} data-index={4} className={`movie-card ${visibleCards.includes(4) ? 'visible' : ''}`}>
            <p>
              DM 2022 i Ørsted Ørredvand, nu Ørsted Outdoor. Jeg bliver nr. 4 efter at have ligget
            </p>
            <p>nr. 3 til 6 over alle 4 runder i single. Har faktisk bronzen til hul 14 i finalerunden, men </p>
            <p> 3 putter, hvor Secher sætter 1. put og så napper makker Secher bronzen</p>

            <img className='fg-img' src="dmorrsted2022.jpg" alt="" onClick={() => openLightbox(['dmorrsted2022.jpg'], 0)} />
          </div>


          <div ref={setCardRef(5)} data-index={5} className={`movie-card ${visibleCards.includes(5) ? 'visible' : ''}`}>
            <p>
              Juni 2022 vinder Danish Open 55+
            </p>

            <img className='fg-img' src="danishopen2022.jpg" alt="" onClick={() => openLightbox(['danishopen2022.jpg'], 0)} />
          </div>



          <div ref={setCardRef(6)} data-index={6} className={`movie-card ${visibleCards.includes(6) ? 'visible' : ''}`}>
            <p>
              Vintertour marts 2023 jeg vinder omspillet om bronze over makker Vibæk. Daniel og
            </p>
            <p>jeg står på samme podie som nr. 1 og 3 i Odsherred Eventen </p>


            <img className='fg-img' src="vintertour2023.jpg" alt="" onClick={() => openLightbox(['vintertour2023.jpg'], 0)} />
          </div>

          <div ref={setCardRef(7)} data-index={7} className={`movie-card ${visibleCards.includes(7) ? 'visible' : ''}`}>
            <p>
              Resultat fra Vintertour marts 2023:
            </p>


            <img className='fg-img' src="vintertour2023-resultat.jpg" alt="" onClick={() => openLightbox(['vintertour2023-resultat.jpg'], 0)} />
          </div>


          <div ref={setCardRef(8)} data-index={8} className={`movie-card ${visibleCards.includes(8) ? 'visible' : ''}`}>
            <p>Med indunder Ørsted Outdoor - måske du har lagt dem over på Sponsorsiden nu, værsgo:</p>
            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02zjsTWtdqYKhSew6ryrUjwyVvAc5GND3ho3XYUEKULaEgFGYypU9irEWNg1aEtRJ4l?rdid=qfmmx32NNGgoifEP#"}>
              <img className='fg-img' src="fodboldcamp.jpg" alt="" onClick={() => openLightbox(['fodboldcamp.jpg'], 0)} />
            </Link>

          </div>



          <div ref={setCardRef(9)} data-index={9} className={`movie-card ${visibleCards.includes(9) ? 'visible' : ''}`}>
            <p>Sparke-træning den jeg skrev om med Fitness<br />
              * Træning af de lange spark
            </p>
            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0wzkcEptNLUMxTUuxoPhHgdobg7zPuQ5TKYKDHtjDGhgUA1E3X6pvFYDPHJZbvCE2l?rdid=VjHbV4FBJK3DdrHc#"}>
              <img className='fg-img' src="sparke.jpg" alt="" />
            </Link>
          </div>

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>* HIO (Hole In One) 🏆<br />
              * Fodboldgolf FÆNGSLET Horsens ⚽️⛳️🕳<br />
              * Stærk sidevind 🌬
            </p>
            <Link to={"https://www.facebook.com/reel/1293610341722231?rdid=TQ9nv2PMkyOGUYxE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1CRTxkKSeW%2F#"}>
              <img className='fg-img' src="hoi.jpg" alt="" />
            </Link>
          </div>


          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Slovakiet open 2025.
              Jeg er GRUMPHY OLD MAN 😡
            </p>
            <Link to={"https://www.facebook.com/story.php?story_fbid=23991878600447903&id=100001572951936&mibextid=wwXIfr&rdid=EEVU0anFl7ndswxu#"}>
              <img className='fg-img' src="grumpyoldman.jpg" alt="" />
            </Link>
          </div>
          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>STØRSTE internationale sejr i 6 år - French Open 2024
            </p>
            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0c38D5K4DnCfkGu9mHDvQsxoPSnoPq9D5PZSYjx4yS9yxdRiSH1gWavu8EeP5djfel?rdid=wAe6qfyiaYKZD4n8#"}>
              <img className='fg-img' src="frenchopen-winner.jpg" alt="" />
            </Link>
          </div>
          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>* Fitness hos Fyssen for at styrke hele kroppen til ⚽️⛳️🕳</p>
            <p>* Trænet 3 gange om ugen siden midt oktober</p>
            <p>* Medmindre jeg er ude til turnering</p>
            <p>* Det er kedeligt, men føles samtidigt godt 🏋️‍♂️</p>
            <p>* og kroppen er bare ekstremt meget bedre</p>
            <p>* måske også fordi jeg har tabt 18 kilo siden marts</p>

            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid034jPudK2wr4fmbmQ5N2u7qKR1WkDq9HQusk867jZCMX5Cpkwc2dWR97ucDaAeZQ4Al?rdid=uWPi7BCN09ACI4nC#"}>
              <img className='fg-img' src="træner.jpg" alt="" />
            </Link>
          </div>



          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>* Træning af de lange spark</p>


            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0wzkcEptNLUMxTUuxoPhHgdobg7zPuQ5TKYKDHtjDGhgUA1E3X6pvFYDPHJZbvCE2l?rdid=1yJSHiBZ8Oy9g6Ne#"}>
              <img className='fg-img' src="sparketræning.png" alt="" />
            </Link>
          </div>
          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Nordjysk fodboldgolf</p>
            <p>* Niels Vendelboe har altid bakket vores sport op
              * Afholdt massevis af Nordjyske Opens
              * DM
              * været tæt på at afholde Danish Open
              * Støttet op om DFGU, da vi havde en baneejer-union
              * God mand

              https://nordjyskfodboldgolf.dk/
              nordjyskfodboldgolf.dk</p>


            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0TBBXbZGpsdVFQY4FpY3vJTyKrCaSzXL99RbQxHhZFCpmA7DDGXBexudZy1Hej5QHl?rdid=6KlKxH2Zhh1QUqib#"}>
              <img className='fg-img' src="nordjysk-logo.jpg" alt="" />
            </Link>
          </div>
          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Nordjysk fodboldgolf</p>
            <p>* Niels Vendelboe har altid bakket vores sport op
              * Afholdt massevis af Nordjyske Opens
              * DM
              * været tæt på at afholde Danish Open
              * Støttet op om DFGU, da vi havde en baneejer-union
              * God mand

              https://nordjyskfodboldgolf.dk/
              nordjyskfodboldgolf.dk</p>


            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0C4t1yMHDdsUUxShKaqtNaJLvbwAX8bDB8qKg3KVKs7miNKYRKR4r4x4mDzk2jNxTl?rdid=UM69T1crbOSn3ABp#"}>
              <img className='fg-img' src="hegnholtfg.png
              " alt="" />
            </Link>
          </div>

          {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Nordjysk fodboldgolf</p>
            <p>* Dunja og jeg tager EM-sølv i mix-double
* Dunja spiller det bedste fodboldgolf jeg nogensinde har set
* Sætter alle pots i umulige og mulige vinkler
* Er i zonen som var det et Runners-High
* Faktisk kan jeg ikke kommunikere med hende under hele runden
* Dunja brænder et langt første spark med venstre
* Vender sig om og siger bare Nu sætter du den!
* Bolden ligger i tyk rough 
* Et sted vi aldrig har ligget før
* og min højre fod tør ikke andet end at sætte den
* faktisk fortjente vi guld 
* Ronnies kommentar bekræfter den gode runde ⚽️⛳️🕳🥈🥈🏆🇩🇰</p>


            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02bLprnYJKd1KLYyj7qz4bVYgy5QTcxJvZ1BRsxgetY1ceLE9TtLGMC1sWYJi63fYBl?rdid=eYovtN6p8K3dERPb#"}>
              <img className='fg-img' src="mix.jpg
              " alt="" />
            </Link>
          </div>

           {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Danish-open winner 2024🏆</p>
            <p>E N D E L I G Bo ❤️🏆🍾🥂🇩🇰
Danish Open vindere 2024 🥇🥇
</p><p>og sikke en dejlig weekend med skønne gæster herhjemme Andreea Cédric et Arnaud Arnold Schwarzenegger 💪🏻
Dunja 2 x podie, også mig 😊 og bedste søndag af alle med minus 38😊🤩🥳 merci 🇫🇷🇩🇰</p>


            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid027Ac6VpSoVoNeQAckDbuNuLCWCWrrJmVjCEy1NjmFiQYwVwuVL7w4LCqu99BFDC7Tl?rdid=P3wSkfwMDNMvQ9V3#"}>
              <img className='fg-img' src="danish-open24.jpg
              " alt="" />
            </Link>
          </div>
             {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>French-open 2024🍾</p>
         <p>🎤📹 Lars Ohlen 🇩🇰 had participated in the inauguration of the field a few months before the
   French Open 2023 and took great pleasure in returning to this field that he loves 🥰</p>


            <Link to={"https://www.facebook.com/auvergnefootgolf/posts/2707477136090603?rdid=y0sioWaSqO5HhZiz#"}>
              <img className='fg-img' src="french-open24.png
              " alt="" />
            </Link>
          </div>

               {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Danmarks-mesterskab bronze🍾</p>
         <p>* DM bronze i double i Herning 202
* Jeg sætter det afgørende put over 10 meter
* Bolden går i vand, hvis jeg brænder
* Det var FEDT ⚽️⛳️🕳</p>


            <Link to={"https://www.facebook.com/danskfodboldgolfforening/posts/pfbid0ZwMbFLXWeYgrnqSu4Davi3gu9V9hAourMPqstxbZMXHs1j6dYQi5X528ytB3GW3Sl?rdid=GMG10n8odNZFNTwL#"}>
              <img className='fg-img' src="dm-bronze.jpg
              " alt="" />
            </Link>
          </div>
              {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Nummer 3 og nummer 5 den her sæson med min søn⚽️⛳️🕳</p>
         <p>* Daniel bliver nr. 3 på årets rangliste 2023
* Makker Bo bliver nr. 4
* Jeg bliver nr. 5
* Det kan noget ⚽️⛳️🕳</p>


            <Link to={"https://www.facebook.com/Aber2750/posts/pfbid02SfuvyFkAUeUg67WV5nwPHWfSetzJdHTusUEzbcQjzAxtXk65JfGqhzMb9746wsbBl?rdid=MJtL7YgUILeYhEN6#"}>
              <img className='fg-img' src="daniel-3.jpg
              " alt="" />
            </Link>
          </div>
                 {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>I går sluttede sæsonen, der blev ved med at gi{"⚽️⛳️🕳️"}💪🏻🏆</p>
         <p>* Verdensmester i 55+
* Så mange skønne venskaber
i 🇩🇰 og Europa, tak hver og en😊
* Masser af skønne ture❤️
* Hele 13 podier alt inkl 😃
* DM sølv i double 🥈🥈🇩🇰
 og meget meget mere - glæder mig til 2024{"⚽️⛳️🕳️"}
Glædelig jul og godt nytår 🎅🏻🎆😉</p>


            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0252DS3kAQF9cF5oP6rRHwBPaFpcPZTWw9u7FR9cqFhwiJsGV7CCqLfDh2FCUXY3p1l?rdid=VELnxJSANRMNYWZ4#"}>
              <img className='fg-img' src="seasonend.jpg
              " alt="" />
            </Link>
          </div>

            {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>DM sølv i double 🇩🇰🥈🥈</p>
         <p>* DM sølv med Secher
* 1 skud fra omspil om GULD
* Til gengæld vinder vi så sølvet efter 6 hullers omspil !</p>


            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0ZP92knX6ctHTZzcnHPFpGk6fDkcpVTsF39jvFwXJgfrcLptmi3z6vKnt95DG7qT3l?rdid=rnoR0rlKfaOfNAgG#"}>
              <img className='fg-img' src="dmsølv.jpg
              " alt="" />
            </Link>
          </div>

               {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Anden double sejr i Spanish Open Med Secher Lækker Lækker i 2023🏆</p>
         


            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0ZP92knX6ctHTZzcnHPFpGk6fDkcpVTsF39jvFwXJgfrcLptmi3z6vKnt95DG7qT3l?rdid=rnoR0rlKfaOfNAgG#"}>
              <img className='fg-img' src="spanishopenvinder.jpg
              " alt="" />
            </Link>
          </div>
                     {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>LAS PÅ PODIET ⚽️⛳️🕳</p>
                <p>* min karrieres første single podie
* og nu har jeg stået der 22 gange i single
* vintertour hulspil i Skejby 2021
* faktisk tæt på at vinde
* men jeg var mæt af at komme i 3-mandsfinalen
* og derved så tilfreds med mit første podie</p>
         


            <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid021fiFGnynpWMxkJNWsFPsAmeuvmQTDCtw3uyBNK6RdBok8yd5cJJPETrTkjUCcbiZl?rdid=E7iK8l4NSwUivLvw#"}>
              <img className='fg-img' src="podie.jpg
              " alt="" />
            </Link>
          </div>


            {/* ///////////////////////////// */}

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Youx i Frankrig ⚽️⛳️🕳</p>
                <p>Youx, Frankrig - Youx Love Footballgolf ❤️</p>
         


            <Link to={"https://www.facebook.com/cedric.caruana.9/posts/pfbid02drQvWLiKHh44Xr7JhDJo6m3Z5ZzwbpsX8Y95rspJ3sGw5RhxvWsZYydHo577t9ZHl?rdid=aNC6Bb9vsQMkQmHl#"}>
              <img className='fg-img' src="youx.jpg
              " alt="" />
            </Link>
          </div>




        </div>
        

      </article>
        <Footer/>
      <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </div></>
  );
}
