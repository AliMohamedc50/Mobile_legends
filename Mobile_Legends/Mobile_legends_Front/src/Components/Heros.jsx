/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { getHero } from '../Store/herosSlice';


function Heros() {
  const { heroslist } = useSelector((state) => state.heros);

  const disbach = useDispatch();
  const handelHerosList = heroslist.length
    ? heroslist.map((ele) => (
        <Link to={`/hero`}>
          <div
            onClick={() => disbach(getHero(ele))}
            className="relative top-0 left-0 card"
            key={ele.id}
          >
            <img
              className="w-full absolute h-full image-hero"
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
    <div className="heros bg relative">
      <h2 className="header">Roles</h2>

      <div className="roles">
        <div className='hold_role'>
          <img src="/src/assets/other_photos/mage_role.jfif" alt="" />
        </div>
        <div className='hold_role'>
          <img src="/src/assets/other_photos/assassin_role.jfif" alt="" />
        </div>
        <div className='hold_role'>
          <img src="/src/assets/other_photos/fighter_role.jfif" alt="" />
        </div>
        <div className='hold_role'>
          <img src="/src/assets/other_photos/marksman_role.jfif" alt="" />
        </div>
        <div className='hold_role'>
          <img src="/src/assets/other_photos/support_role.jfif" alt="" />
        </div>
        <div className='hold_role'>
          <img src="/src/assets/other_photos/tank_role.jfif" alt="" />
        </div>
      </div>
      <div className="hold_card flex border-spacing-1 ">{handelHerosList} </div>
    </div>
  );
}

export default Heros