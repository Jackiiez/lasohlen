import { Link } from "react-router";
import Footer from "./footer";
import NavBar from "./navbar";



export default function Loeb() {

  return (
    <>
       <NavBar/>
<section className="placeringer">
  <h1 className="title sponsore-heading">Lars på farten</h1>
  <div className="løbe-div"><p>Jeg har løbet cirka 34.500 km i mit liv og en menisk operation har begrænset mit løb til max 5 km i dag.
Drømmen var en gang at løbe samlet en gang rundt om jorden - 40.000 km</p>

<p className="title sponsore-heading">Højdepunkter:</p>
* En af mine 3-5 største sportslige bedrifter
* Copenhagen Marathon på 2:58:54
* Der var aldrig en krise undervejs. 
* Jeg lagde dog for hårdt ud, hvilket er en klassiker
* Det var kun min 4. maraton
* Jeg havde ikke taget løbetræner-uddannelsen endnu
* og heller ikke fundet min guidance Jack Daniels Running Formular:

<Link to={"https://www.saxo.com/dk/daniels-running-formula_jack-daniels_paperback_9781718203662?msclkid=377b5c9894c6158c9fb934e16c737476&utm_source=bing&utm_medium=cpc&utm_campaign=Standard%20Shopping%20%7C%20Engelsk&utm_term=4576442302288169&utm_content=Profitable"}>
link til Daniels&apos; Running Formula </Link>


 <Link to={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0gV5ZG1jtbFT1ACCKSLrSd3f1vrFNjioSe1r2rKwZwkunBDmd6KFXaeR37fFneXZfl?rdid=LLVkHqjMCmAxWE5T#"}>
 <img src="marton1.jpg" alt="" /></Link>
 <p>2.58.54 Copenhagen marathon 2000 {"<"} 3 T ({"< "}3 hours)</p>
</div>
  <hr className="loeb-hr" />
 <div className="løbe-div">

<p> Certificeret Motionist løbetræner fra Dansk Atletik Forbund</p>
<p>* Maraton 2.58.54</p>
<p>* Halvmaraton 1.23:56</p>
<p>* 10 km 37:03</p>
<p>* 5 km 18:16</p>
<p>* 2 km 6:00</p>
<p>* 1 km 2:58</p>
<p>* New York Maraton i 1994</p>
<p>* Berlin Maraton 3 stk.</p>
<p>* Athen Marathon 2004 her løb vi på blue-line fra OL ruten i Athen 3 måneder før</p>
<p>* DVS vi løb selv maraton ruten fra OL</p>
<p>* Deltagelse i New York Marathon 1994</p>
<p>* En sand løbefest</p>
<p>* De sidste 7 km i Central Park føltes som at deltage i en landskamp i Parken</p>
<p>* Vi blev båret af tilskuerne i mål</p>
<p>* Jeg får stadig gåsehud, når jeg skriver det ❤</p>
 <Link to={"https://www.facebook.com/photo/?fbid=9637431562985846&set=pcb.9558796594182677"}>
 <img src="marton.jpg" alt="" /></Link>

</div>








 <hr className="loeb-hr" />
  <h2 className="title sponsore-heading">Saunagus Jyllinge</h2>
<div className="løbe-div"><p>* Saunagus er genialt for krop og sjæl
* bedste sted:

https://www.saunagusjyllinge.dk/


www.saunagusjyllinge.dk</p>
<img src="sauna.jpg" alt="" />



</div>



</section>
  <Footer/>
    </>
  );
}
