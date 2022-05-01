import React, { useEffect, useState, useContext } from 'react';

import MobileMenuHeader from '../../menu-mobile/mobile_menu-header/MobileMenuHeader';
import './page_styles-mobile/start_page-mobile.scss';
// import './page_styles-mobile/logo-mobile.scss';
import './page_styles-mobile/picture-mobile.scss';
// import './page_styles-mobile/authors-mobile.scss';
import './page_styles-mobile/menu-mobile.scss';
// import agutin from '../../../assets/images/heap/Cardagutin.png';
// import jordan from '../../../assets/images/heap/Cardjordan.png';
// import portio from '../../../assets/images/heap/Cardportico.png';
// import dorn from '../../../assets/images/heap/Carddorn.png';
import heading from '../../../assets/icons/H1Chess&Jazz.svg';
// import arrow from '../../../assets/icons/arrow-next.svg';
import asterisk from '../../../assets/icons/star.svg';

import MPSlider from './slider_mp/MPSlider';
import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import { PageContext } from '../../../PageContext';

function StartPageMobile(params) {
	// const [page, setPage] = useContext(PageContext);

	return (
		<>
			<div className="mobile-container" style={{ paddingTop: '48px' }}>
				<div className="m-content m-content-sp">
					<div className="m-header">
						<img src={heading} alt="" />
					</div>
					<div className="main-page-mobile__picture" style={{ position: 'relative', height: '400px' }}>
						{/* <span> */}
						<MPSlider />
						{/* </span> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default StartPageMobile;
