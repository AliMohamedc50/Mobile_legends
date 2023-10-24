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

  const build =
    showHero.build.length &&
    showHero.build.map((ele, i) => (
      <div key={i} className="">
        <img src={ele.path} alt="" />
        {/* <span className="text-white text-xs">{ele.name}</span> */}
      </div>
    ));

  const spell =
    showHero.recommended_spell.length &&
    showHero.recommended_spell.map((ele, i) => (
      <div key={i} className="text-white">
        <ul>
          <li className="flex items-center gap-3">
            <img src={ele.path} alt="" />
            <span className="text-2xl">{ele.name}</span>
          </li>
        </ul>
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
              <h3 className="mt-5 border-b-2 border-cyan-900">
                Release Date: <span> {showHero.release_date} </span>
              </h3>
              <h3 className="mt-5 mb-2 border-b-2 border-cyan-900 ">
                Lane Recc: <span> {showHero.lane_recc}</span>
              </h3>
              <h3 className="mt-5 mb-2 border-b-2 border-cyan-900">
                Price: <span> {showHero.price} </span>
              </h3>
              <h3 className="mt-5 mb-2 ">
                Damage Type: <span> {showHero.damage_type} </span>
              </h3>
              <div className="counters"></div>
            </div>
            <div className="hold_build">
              <div>
                <div className="hold_data">
                  <div className="label">Durability</div>
                  <div className="hold_sled">
                    <div
                      style={{
                        width: showHero.durability,
                        background: "#fffb00",
                      }}
                      className="slid "
                    ></div>
                  </div>
                  <div className="label">Offense</div>
                  <div className="hold_sled">
                    <div
                      style={{ width: showHero.offense, background: "#ffee00" }}
                      className="slid "
                    ></div>
                  </div>
                  <div className="label">Ability Effects</div>
                  <div className="hold_sled">
                    <div
                      style={{
                        width: showHero.ability_effects,
                        background: "#00d5ff",
                      }}
                      className="slid "
                    ></div>
                  </div>
                  <div className="label">Difficulty</div>
                  <div className="hold_sled">
                    <div
                      style={{
                        width: showHero.difficulty,
                        background: "#00ff4c",
                      }}
                      className="slid "
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div className="build">
              <h2 className="head">Default Build</h2>
              <div className="flex flex-row	justify-around">{build}</div>
            </div>
            <div className="imp">
              {/* <h2 className="head">Recommended Spell</h2> */}
              <h2 className="head">Spell</h2>
              <div className="mt-3">{spell}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoHero;
