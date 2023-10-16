/* eslint-disable no-unused-vars */
import React from 'react'

function Header() {
  return (
      <div className="flex justify-between items-center text-white navbar">
        <div className="logo w-36">
          <img
            className="w-full"
            src="./src/assets/background/logo.jfif"
            alt=""
          />
        </div>
        <h1 className="text-3xl">Log in</h1>
        <h1 className="text-3xl">Sign Up</h1>
      </div>
  );
}

export default Header
