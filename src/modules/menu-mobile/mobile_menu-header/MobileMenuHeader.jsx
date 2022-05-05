import React, { useState, useEffect } from 'react';
import { PageContext } from '../../../PageContext';
import { useTranslation } from 'react-i18next';

import MobileMenuBtnBuyTicket from './mobile_menu-btnbyticket/MobileMenuBtnBuyTicket';
import MobileMenuList from '../mobile_menu-list/MobileMenuList';
import MobileMenuCommunication from '../mobile_menu-communication/MobileMenuCommunication';
import './mobile_menu-header.scss';
import MobileMenuBurger from './mobile_menu-burger/MobileMenuBurger';
import MobileMenuBody from '../mobile_menu-body/MobileMenuBody';

import asterisk from '../../../assets/icons/star.svg';

function MobileMenuHeader() {
	const [menuMobileState, setMenuMobileState] = useState(false);
	const [buyTicket, setBuyTicket] = useState(false);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		menuMobileState ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'scroll');
	});
	function autoClose() {
		setMenuMobileState(!menuMobileState);
	}

	return (
		<>
			<div className="m-menu" style={{ position: 'fixed', background: '#FFF', zIndex: 10 }}>
				<div
					className={menuMobileState ? 'm-menu__btn open' : 'm-menu__btn closed'}
					onClick={() => {
						setMenuMobileState(!menuMobileState);
					}}
				>
					<div className="m__btn_top m__btn_top_white"></div>
					<div className="m__btn_middle m__btn_middle_white"></div>
					<div className="m__btn_bot m__btn_bot_white"></div>
				</div>
				<div className="m-menu__content m-menu__content_white">
					<span>{t('date')}</span>
					<img src={asterisk} alt="" />
					<span>{t('garden')}</span>
					<img src={asterisk} alt="" />
					<span>{t('date')}</span>
					<img src={asterisk} alt="" />
					<span>{t('garden')}</span>
					<img src={asterisk} alt="" />
					<span>{t('date')}</span>
				</div>
				<div
					className="m-menu__buy"
					onClick={() => {
						window.open(
							'https://widget.afisha.yandex.ru/w/events/170293?regionId=213&clientKey=f3c2c9b5-b719-40ee-8ff2-6ac6f2f103c6&gaCookie=GA1.2.2017337387.1650973359'
						);
					}}
				>
					<p>{t('buy a ticket1')}</p>
					<p>{t('buy a ticket2')}</p>
				</div>
			</div>
			<MobileMenuList displayed={menuMobileState} close={autoClose} />
		</>
	);
}

export default MobileMenuHeader;
