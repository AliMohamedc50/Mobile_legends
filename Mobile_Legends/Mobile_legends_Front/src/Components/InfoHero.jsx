/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";



function InfoHero() {
  const { showHero } = useSelector((state) => state.heros);

  // console.log(showHero.image);

  return (
    <div>
              <img src="src/assets/image_hero/Cecilion_Cosmetics (1).jpg" alt="" />
      <div className="hold_card">
        {showHero && (
          <>
            <div className="hold_image">
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
