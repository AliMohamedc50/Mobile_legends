/* eslint-disable no-unused-vars */
import React from 'react'

function About_Us() {
    return (
      <div>
        <div className="about h-80 w-full flex p-8 ">
          <div className="image">
            <img
              className="w-full h-full"
              src="/src/assets/about/about.jfif"
              alt=""
            />
          </div>
          <div className="title">
            <h2>Mobile Legends: Bang Bang </h2> 
            <p>
                Enjoy the Classic MOBA on Your Mobile. Challenge Top Players All
                Over the World!
            </p>
          </div>
        </div>
      </div>
    );
}

export default About_Us
