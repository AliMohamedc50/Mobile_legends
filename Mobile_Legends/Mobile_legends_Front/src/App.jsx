/* eslint-disable no-unused-vars */

import { Fragment, useEffect } from 'react';
import './App.css'
import Header from './Components/Header';
import { getHeros } from './Store/herosSlice';
import { useDispatch } from 'react-redux';
import Heros from './Components/Heros';
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import InfoHero from './Components/InfoHero';

function App() {

    const dispache = useDispatch()
  useEffect(() => {
    dispache(getHeros());
  }, [dispache]);
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heros />} />
          <Route path="/hero" element={<InfoHero />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App












// ,
//     {
//         "id": "3",
//         "name": "Ling",
//         "role": "Assassin"
//     },
//     {
//         "id": "4",
//         "name": "Atlas",
//         "role": "Tank"
//     },
//     {
//         "id": "5",
//         "name": "Kimmy",
//         "role": "Marksman"
//     },
//     {
//         "id": "6",
//         "name": "Estes",
//         "role": "Suppport"
//     }
