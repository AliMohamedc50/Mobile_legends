/* eslint-disable no-unused-vars */
import React from 'react'
import Landingpage from './landingpage';
import Header from './Header';
import Heros from './Heros';

function HeaderContainer() {
    return (
      <div>
        <Header />
        <Landingpage />
        <Heros />
      </div>
    );
}

export default HeaderContainer
