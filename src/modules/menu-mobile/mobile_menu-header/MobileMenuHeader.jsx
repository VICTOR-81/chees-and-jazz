import React, { useState, useEffect } from 'react';
import { PageContext } from '../../../PageContext';

import MobileMenuBtnBuyTicket from './mobile_menu-btnbyticket/MobileMenuBtnBuyTicket';
import MobileMenuList from '../mobile_menu-list/MobileMenuList';
import MobileMenuCommunication from '../mobile_menu-communication/MobileMenuCommunication';
import './mobile_menu-header.scss';
import MobileMenuBurger from './mobile_menu-burger/MobileMenuBurger';
import MobileMenuBody from '../mobile_menu-body/MobileMenuBody';

import asterisk from '../../../assets/icons/star.svg';

function MobileMenuHeader() {
	const [menuMobileState, setMenuMobileState] = useState(false);

	useEffect(() => {
		menuMobileState ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'scroll');
	});

	return (
		<>
			<div class="m-menu" style={{ position: 'fixed', background: '#FFF', zIndex: 10 }}>
				<div
					class="m-menu__btn"
					onClick={() => {
						setMenuMobileState(!menuMobileState);
					}}
				>
					<div class="m__btn_top m__btn_top_white"></div>
					<div class="m__btn_middle m__btn_middle_white"></div>
					<div class="m__btn_bot m__btn_bot_white"></div>
				</div>
				<div class="m-menu__content m-menu__content_white">
					<span>30-31 июля 20221</span>
					<img src={asterisk} alt="" />
					<span>Сад «Эрмитаж2»</span>
					<img src={asterisk} alt="" />
					<span>30-31 июля 20223</span>
					<img src={asterisk} alt="" />
					<span>Сад «Эрмитаж»4</span>
					<img src={asterisk} alt="" />
					<span>30-31 июля 20225</span>
				</div>
				<div class="m-menu__buy">
					<p>КУПИТЬ</p>
					<p>БИЛЕТ</p>
				</div>
			</div>
			<MobileMenuList displayed={menuMobileState} />
		</>
	);
}

export default MobileMenuHeader;
