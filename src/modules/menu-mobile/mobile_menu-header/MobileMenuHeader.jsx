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
						setBuyTicket(true);
					}}
				>
					<p>{t('buy a ticket1')}</p>
					<p>{t('buy a ticket2')}</p>
				</div>
			</div>
			<MobileMenuList displayed={menuMobileState} close={autoClose} />
			{buyTicket ? (
				<div
					style={{
						width: '100vw',
						height: '100vh',
						left: 0,
						top: 0,
						position: 'fixed',
						background: 'rgba(0, 0, 0, 0.6)',
						cursor: 'pointer',
						zIndex: 50,
					}}
					onClick={() => {
						setBuyTicket(false);
					}}
				>
					<iframe
						frameBorder="0"
						src="https://widget.afisha.yandex.ru/w/events/170293?regionId=213&clientKey=f3c2c9b5-b719-40ee-8ff2-6ac6f2f103c6&widgetName=w1&gaCookie=GA1.2.420932549.1651561439"
						className="undefined"
						referrerPolicy="unsafe-url"
						sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin allow-top-navigation allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
						style={{
							width: '70vw',
							height: '70vh',
							display: 'block',
							border: 'none',
							padding: '0px',
							margin: '0px',
							position: 'fixed',
							zIndex: '100',
							top: '15vh',
							left: '15vw',
						}}
					></iframe>
				</div>
			) : (
				''
			)}
		</>
	);
}

export default MobileMenuHeader;
