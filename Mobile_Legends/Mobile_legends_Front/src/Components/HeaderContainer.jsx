/* eslint-disable no-unused-vars */
import React from 'react'
import Landingpage from './landingpage';
import Header from './Header';
import Heros from './Heros';
import About_Us from './About_Us';

function HeaderContainer() {
    return (
      <div>
        <Header />
        <Landingpage />
        <About_Us />
        <Heros />
      </div>
    );
}

export default HeaderContainer
