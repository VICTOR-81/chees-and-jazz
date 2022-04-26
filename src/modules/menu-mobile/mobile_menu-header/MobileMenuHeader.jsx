import React, { useState, useContext } from 'react';
import { PageContext } from '../../../PageContext';

import MobileMenuBtnBuyTicket from "./mobile_menu-btnbyticket/MobileMenuBtnBuyTicket";
import MobileMenulist from '../mobile_menu-list/MobileMenuList';
import MobileMenuCommunication from '../mobile_menu-communication/MobileMenuCommunication';
import './mobile_menu-header.scss'
import MobileMenuBurger from './mobile_menu-burger/MobileMenuBurger';
import MobileMenuBody from '../mobile_menu-body/MobileMenuBody';

function MobileMenuHeader() {
  // const [page, setPage] = useContext(PageContext);
  const [menuMobileState, setMenuMobileState] = useState(true);
  
  // const params = page.pages[page.current];
  // const theme = {
	// 	background: page.pages[page.current].theme === 'dark' && !menuMobileState ? '#000' : '#fff',
	// 	borderRight: page.pages[page.current].theme === 'dark' && !menuMobileState ? '1px solid #F4F3F3' : '1px solid #F4F3F3',
	// };
  return(
    <>
    <div className="mobilemenu__header" >
      
      {/* <MobileMenuBurger /> */}

    <div className="mobilemenu__burger" onClick={() => setMenuMobileState(!menuMobileState)}>
      <div className="mobilemenu__burger-item animation__burger"></div>
      <div className="mobilemenu__burger-item animation__burger"></div>
    </div>

      <div className="mobilemenu__header-title">
      фестиваль шахмат и джаза 2022
      </div>
      <MobileMenuBtnBuyTicket />
    </div>
    {/* <div style={{ position: 'relative' }}> */}
    {/* <div className="mobilemenu_body" displayed={menuMobileState} transit_to={0}>
      <MobileMenulist displayed={menuMobileState} transit_to={0} />
      <MobileMenuCommunication displayed={menuMobileState} transit_to={0} />
    </div> */}
    {/* </div> */}
    <div style={{ position: 'relative'}}>
    <MobileMenuBody displayed={menuMobileState} transit_to={0}/>
    </div>
    </>
  );

};

export default MobileMenuHeader;