/* eslint-disable no-unused-vars */
import React from 'react'
import Countdown from "react-countdown";


function New_Hero() {


  
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        <div className="time font-semibold text-slate-100 flex justify-around">
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>
          :
          <span>
            {seconds}
          </span>
        </div>
        <div className='text_time flex text-sm font-medium text-slate-900 gap-1 justify-between'>
          <div>Days </div>
          <div>hours </div>
          <div>minutes </div>
          <div>seconds </div>
        </div>
      </span>
    );
  }
};
  return (
    <div>
      <div className="bg">
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
              
            </h2>
            <p className="text-white">
              Enjoy the Classic MOBA on Your Mobile. <br /> Challenge Top
              Players All Over the World!
            </p>
            <div className=" bg-pink-500 mt-5 py-5 px-16 w-full rounded-xl text-4xl inline-block">
              <Countdown
                intervalDelay={0}
                date={Date.now() + 172800000}
                renderer={renderer}
              />
            </div>{" "}
            <br />
            <button className="btn text-white mt-5">More...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New_Hero
