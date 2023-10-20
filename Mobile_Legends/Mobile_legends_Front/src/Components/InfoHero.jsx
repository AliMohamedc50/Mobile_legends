/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

function InfoHero() {
  const { showHero } = useSelector((state) => state.heros);


const skins =
  showHero.skins.length &&
  showHero.skins.map((ele, i) => (

    <div  key={i}>
      <img src={ele.path} alt="" />
    </div>
  ));


  return (
    <div>
      <div className="hold_card">
        {showHero && (
          <>
            <div className="hold_skins">{skins} </div>
            <div className="hold_image ">
              <img className="w-full img_bg" src={showHero.background} alt="" />
            </div>
            <div className="info_hero">
              <h1>
                {showHero.name} ({showHero.role})
              </h1>
              <h3>
                Release Date: <span> {showHero.release_date} </span>
              </h3>
              <h3>
                Lane Recc: <span> {showHero.lane_recc}</span>
              </h3>
              <h3>
                Price: <span> {showHero.price} </span>
              </h3>
              <h3>
                Damage Type: <span> {showHero.damage_type} </span>
              </h3>
            </div>
            <div className="imp"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoHero;
