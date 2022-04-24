import React, { useState, useContext } from 'react';
import './mobile_menu-burger.scss'

function MobileMenuBurger() {
  // const [menuState, setMenuState] = useState(false);
  return(

    // <div className="mobilemenu__burger" onClick={() => setMenuState(!menuState)}>
    <div className="mobilemenu__burger">
      <div className="mobilemenu__burger-item animation__burger"></div>
      <div className="mobilemenu__burger-item animation__burger"></div>
    </div>

  );

};

export default MobileMenuBurger;