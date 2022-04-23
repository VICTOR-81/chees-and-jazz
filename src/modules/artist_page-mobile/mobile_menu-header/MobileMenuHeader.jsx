import React from "react";
import MobileMenuBtnBuyTicket from "./mobile_menu-btnbyticket/MobileMenuBtnBuyTicket";
import MobileMenuBurger from "./mobile_menu-burger/MobileMenuBurger";
import './mobile_menu-header.scss'

function MobileMenuHeader() {

  return(

    <div className="mobilemenu__header">
      <MobileMenuBurger />
      <div className="mobilemenu__header-title">
      фестиваль шахмат и джаза 2022
      </div>
      <MobileMenuBtnBuyTicket />
    </div>

  );

};

export default MobileMenuHeader;