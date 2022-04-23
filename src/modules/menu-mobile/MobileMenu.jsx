import React, { useState, useContext } from 'react';
import { PageContext } from '../../PageContext';

import MobileMenuCommunication from "./mobile_menu-communication/MobileMenuCommunication";
import MobileMenuHeader from "./mobile_menu-header/MobileMenuHeader";
import MobileMenulist from "./mobile_menu-list/MobileMenuList";
import './mobille_menu.scss'
import '../../fonts/fonts.scss'

function MobileMenu() {
  // const [page, setPage] = useContext(PageContext);
	// const params = page.pages[page.current];
	// const [menuState, setMenuState] = useState(false);
	// console.log(params);
	// const theme = {
	// 	background: page.pages[page.current].theme === 'dark' && !menuState ? '#000' : '#fff',
	// 	borderRight: page.pages[page.current].theme === 'dark' && !menuState ? '1px solid #F4F3F3' : '1px solid #F4F3F3',
	// };
	// const buttons = {
	// 	vk: page.pages[page.current].theme === 'dark' && !menuState ? light_vk : vk,
	// 	inst: page.pages[page.current].theme === 'dark' && !menuState ? light_inst : inst,
	// 	yt: page.pages[page.current].theme === 'dark' && !menuState ? light_yt : yt,
	// 	menu_toggle: page.pages[page.current].theme === 'dark' && !menuState ? light_menu : menu_toggle,
	// 	top_btn: page.pages[page.current].theme === 'dark' && !menuState ? light_menu_cross : menu_cross,
	// };

	// if (page.current === 0) {
	// 	buttons.top_btn = menu_idle;
	// }

	// const menu_top = menuState ? (
	// 	'ФЕСТИВАЛЬ ШАХМАТ И ДЖАЗА 2022'
	// ) : (
	// 	<img
	// 		style={{ cursor: 'pointer' }}
	// 		src={buttons.top_btn}
	// 		alt=""
	// 		onClick={() => {
	// 			page.swipeBack();
	// 		}}
	// 	/>
	// );

  return (

    <div className="mobilemenu hide">
      <div className="mobile__container">
        <MobileMenuHeader />
        {/* <MobileMenulist displayed={menuState} transit_to={0} /> */}
        {/* <MobileMenuCommunication displayed={menuState} transit_to={0} /> */}
				 <MobileMenulist />
         <MobileMenuCommunication />
      </div>
    </div>

  );

};

export default MobileMenu;