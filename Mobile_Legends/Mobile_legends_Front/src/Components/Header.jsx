/* eslint-disable no-unused-vars */
import React from 'react'

function Header() {
  return (
    <div className="flex justify-between items-center text-white navbar">
      <div className="flex justify-between items-center">
        <div className="logo w-36">
          <img
            className="w-full"
            src="./src/assets/other_photos/logo.jfif"
            alt=""
          />
        </div>
        <span className="mx-2 w-1 h-10 bg-slate-800 rounded-full "></span>
        <div className="search">
          <span className="material-symbols-outlined text-slate-300">
            search
          </span>
          <input type="text" className="" />
        </div>
      </div>
      <div className="buttons">
        <button className="btn mx-5">Log in</button>
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Header
