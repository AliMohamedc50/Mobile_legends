/* eslint-disable no-unused-vars */
import React from 'react'

function About_Us() {
    return (
      <div>
        <div className="about h-80 w-full flex justify-around items-center p-8">
          <div className="image_about">
            <img
              className="w-full h-full" 
              src="/src/assets/about/about.jfif"
              alt=""
            />
          </div> 
          <div className="title_about ml-3 ">
            <h2 className='text-3xl font-semibold text-cyan-400'>Mobile Legends: Bang Bang </h2>
            <p className='text-white'>
                Enjoy the Classic MOBA on Your Mobile. <br /> Challenge Top Players All
                Over the World!
            </p>
            <button className='btn text-white mt-5'>More...</button>
          </div>
        </div>
      </div>
    );
}

export default About_Us
