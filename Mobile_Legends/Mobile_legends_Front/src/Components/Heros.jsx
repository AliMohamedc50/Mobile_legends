/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHero, getRole, getHeros } from "../Store/herosSlice";


function Heros() {
  const { heroslist, loader } = useSelector((state) => state.heros);

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
        <div onClick={() => {disbach(getRole("Mage"))}} className="hold_role">
          <img  src="/src/assets/other_photos/mage_role.jfif" alt="" />
        </div>
        <div className="hold_role">
          <img src="/src/assets/other_photos/assassin_role.jfif" alt="" />
        </div>
        <div className="hold_role">
          <img src="/src/assets/other_photos/fighter_role.jfif" alt="" />
        </div>
        <div className="hold_role">
          <img src="/src/assets/other_photos/marksman_role.jfif" alt="" />
        </div>
        <div className="hold_role">
          <img src="/src/assets/other_photos/support_role.jfif" alt="" />
        </div>
        <div className="hold_role">
          <img src="/src/assets/other_photos/tank_role.jfif" alt="" />
        </div>
      </div>


<h1 onClick={() => {disbach(getHeros())}} >All</h1>
      {loader ? (
         <div className="loader">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
          <div className="bar6"></div>
          <div className="bar7"></div>
          <div className="bar8"></div>
          <div className="bar9"></div>
          <div className="bar10"></div>
          <div className="bar11"></div>
          <div className="bar12"></div>
        </div>
      ) : (
        <div className="hold_card flex border-spacing-1 ">
          {handelHerosList}
        </div>
      )}
    </div>
  );
}

export default Heros;
