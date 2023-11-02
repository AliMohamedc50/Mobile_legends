/* eslint-disable no-unused-vars */
import React from 'react'
import Landingpage from './landingpage';
import Header from './Header';
import Heros from './Heros';
import About_Us from './About_Us';
import New_Hero from './New_Hero';

function HeaderContainer() {

  return (
    <div>
      <Header />
      <Landingpage />
      <About_Us />
      <Heros />
      <New_Hero />
    </div>
  );
}

export default HeaderContainer
