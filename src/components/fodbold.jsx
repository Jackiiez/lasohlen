import { Link } from "react-router";
import Footer from "./footer";
import NavBar from "./navbar";

export default function Fodbold() {
  return (
    <>
       <NavBar/>
      <h1 className="sponsore-heading">Mine personlige favorit hold</h1>

      <section className="grid-container">
        <div>
          <Link to="/broenby"> <img src="bif.png" alt="Image 3" className="image" /></Link>
          <h2 className="fodbold-heading">Brøndby IF</h2>
        </div>
        <div>
          <Link to="/liverpool"> <img src="liverpool.png" alt="Image 2" className="image" /></Link>
          <h2 className="fodbold-heading">Liverpool FC</h2>
        </div>
        <div>
          <Link to="/barcalona" ><img src="barcalona.png" alt="Image 1" className="image" /></Link>
          <h2 className="fodbold-heading">FC Barcelona</h2>
        </div>
        <div>
          <Link to="/fif"><img src="fif.jpg" alt="Image 4" className="image" /></Link>
          <h2 className="fodbold-heading">FIF-Hillerød</h2>
          <p className='intro-text'>Her er det hold som har en meget personlig plads i mit hjerte.</p>
          <p className='intro-text'>Grunde til det her hold er en af mine personlige favoriter er fordi min søn og hans bedste venner spiller sammen på holdet</p>
          <p className='intro-text'>på trods af at det bare er et hygge hold så gør det mig inderligt glad at se min søn og hans venner spille kampe selvom det udelukkende er hygge bold</p>
        </div>
      </section>
        <Footer/>
      </>
  );
};