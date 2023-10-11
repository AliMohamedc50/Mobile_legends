/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { getHero } from '../Store/herosSlice';


function Heros() {

  const { heroslist } = useSelector((state) => state.heros);

  const disbach = useDispatch();





  const handelHerosList = heroslist.length
    ? heroslist.map((ele) => (
        <Link to={`/hero/${ele.id}`}>
          <div
            onClick={() => disbach(getHero(ele))}
            className="relative top-0 left-0 card"
            key={ele.id}
          >
            <img
              className="w-full absolute h-full image"
              src={`${ele.image}`}
              alt=""
            />
            <div className="title ">
              <h1>Neme: {ele.name} </h1>
              <h1>Roll: {ele.role}</h1>
            </div>
          </div>
        </Link>
      ))
    : null;

  return (
    <div>
      <h2>All</h2>
      <div className="hold_card flex">{handelHerosList} </div>
    </div>
  );
}

export default Heros


        // "image": "./src/assets/WhatsApp Image 2023-05-27 at 2.16.33 AM.jpeg"
