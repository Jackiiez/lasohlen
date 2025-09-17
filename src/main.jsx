import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { GloabelContext } from "./gloabelContext";
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Barcalona from "./components/barcalona.jsx";
import Baner from "./components/baner.jsx";
import Bil from "./components/bil.jsx";
import Bog from "./components/bog.jsx";
import Broenby from "./components/broenby.jsx";
import Fif from "./components/fif.jsx";
import Fodbold from "./components/fodbold.jsx";
import Fodboldgolf from "./components/fodboldgolf.jsx";
import Galleri from "./components/galleri.jsx";
import Liverpool from "./components/liverpool.jsx";
import Loeb from "./components/loeb.jsx";
import Sponsors from "./components/sponsors.jsx";
import Salg from "./components/salg.jsx";





//router hvor vi putter komponenter ind og laver flere sider
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },  {
    path: "/baner",
    element: <Baner/>
  },  {
    path: "/barcalona",
    element: <Barcalona />
  },  {
    path: "/bil",
    element: <Bil />
  },
    {
    path: "/bog",
    element: <Bog />
  },
    {
    path: "/broenby",
    element: <Broenby />
  },
    {
    path: "/fif",
    element: <Fif />
  },
    {
    path: "/fodbold",
    element: <Fodbold />
  },
    {
    path: "/fodboldgolf",
    element: <Fodboldgolf/>
  },
    {
    path: "/galleri",
    element: <Galleri/>
  },
    {
    path: "/liverpool",
    element: <Liverpool/>
  },
    {
    path: "/loeb",
    element: <Loeb />
  },  {
    path: "/sponsors",
    element: <Sponsors />
  },  {
    path: "/salg",
    element: <Salg/>
  },
 
  
  //  {
  //   path: "/",
  //   element: <Search />
  // },
])
//vi laver et state som vi ka gemme i vores context
const MyProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  return <GloabelContext.Provider value={{ color, setColor }}>{children}</GloabelContext.Provider>;
};






createRoot(document.getElementById('root')).render(



  //vi putter vores context rundt om vores projekt
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>



)
