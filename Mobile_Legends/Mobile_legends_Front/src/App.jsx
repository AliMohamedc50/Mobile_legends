/* eslint-disable no-unused-vars */

import { Fragment, useEffect } from 'react';
import './App.css'
import Header from './Components/Header';
import { getHeros } from './Store/herosSlice';
import { useDispatch } from 'react-redux';
import Heros from './Components/Heros';

function App() {

    const dispache = useDispatch()
  useEffect(() => {
    dispache(getHeros());
  }, [dispache]);
  return  (
    <Fragment>
      <Header />
      <Heros />
    </Fragment>
  )
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
