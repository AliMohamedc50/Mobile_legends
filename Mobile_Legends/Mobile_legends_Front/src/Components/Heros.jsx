/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'

function Heros() {


//     const src = URL.createObjectURL("../assets/react.svg");
// console.log(src)

    const { heroslist } = useSelector((state) => state.heros);


// console.log(heroslist)
    const handelHerosList = 
      heroslist.length ?  (heroslist.map((ele) => (
        // console.log(ele)
        // <span>
        // {ele}
        // </span>
        <div key={ele.id}>
            <span>Neme: {ele.name} </span>
            <span>Roll: {ele.roll}</span>
        </div>
      ))) : null
      
    
      return (
        <div>
          <h2>All</h2>
          <div>{handelHerosList} </div>
        </div>
      );
}

export default Heros
