/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'

function Heros() {


//     const src = URL.createObjectURL("../assets/react.svg");
// console.log(src)

    const { heroslist } = useSelector((state) => state.heros);


// console.log(heroslist)



    const handelHerosList = heroslist.length
      ? heroslist.map((ele) => (
          <div className='relative top-0 left-0 card' key={ele.id} >
            <img className='w-full absolute h-full image' src={`./src/assets/image_hero/${ele.image}`} alt="" />
            <div className="title ">
              <h1>Neme: {ele.name} </h1>
              <h1>Roll: {ele.role}</h1>
            </div>
          </div>
        ))
      : null;
      
    
      return (
        <div>
          <h2>All</h2>
          <div className='hold_card flex' >{handelHerosList} </div>
          
          
        </div>
      );
}

export default Heros


        // "image": "./src/assets/WhatsApp Image 2023-05-27 at 2.16.33 AM.jpeg"
