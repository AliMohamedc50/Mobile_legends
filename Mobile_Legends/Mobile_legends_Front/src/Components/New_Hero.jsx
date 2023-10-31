/* eslint-disable no-unused-vars */
import React from 'react'

function New_Hero() {
  return (
    <div>
      <div className='bg'>
        <div className="new_hero h-96 w-full flex justify-around items-center p-8 bg-slate-900">
          <div className="image_about">
            <img
              className="w-full h-full"
              src="/src/assets/about/about.jfif"
              alt=""
            />
          </div>
          <div className="title_about ml-3 ">
            <h2 className="text-3xl font-semibold text-cyan-400">
              Mobile Legends: Bang Bang{" "}
            </h2>
            <p className="text-white">
              Enjoy the Classic MOBA on Your Mobile. <br /> Challenge Top
              Players All Over the World!
            </p>
            <button className="btn text-white mt-5">More...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New_Hero
