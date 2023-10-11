/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";



function InfoHero() {
  const { showHero } = useSelector((state) => state.heros);

  // console.log(showHero.image);
  return (
    <div>
      <div className="hold_card">
        {showHero && (
          <>
            <div className="hold_image">
              {/* <img
            className="w-11 h-28"
            src={`${showHero.image}`}
            alt=""
          /> */}
              <img
                src=""
                alt=""
              />
              {/* <img src={`./src/assets/image_hero/${showHero.image}`} alt="" /> */}
            </div>
            <div className="info_hero">
              <h3>
                {showHero.name} ({showHero.role})
              </h3>
              <h3>Release Date: </h3>
              <h3>Lane Recc: </h3>
              <h3>Price: </h3>
              <h3>Damage Type: </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoHero;
