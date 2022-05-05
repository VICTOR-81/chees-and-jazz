import React from 'react';
import { useTranslation } from 'react-i18next';

import './final_page_mobile.scss';
import asterisk from '../../../assets/icons/star.svg';
import instainst from '../../../assets/icons/instainst.svg';
import vkvk from '../../../assets/icons/vkvk.svg';
import youtubeyt from '../../../assets/icons/youtubeyt.svg';

function FinalPageMobile() {
	const { t, i18n } = useTranslation();

	return (
		<div className="mobile-container" id="contacts">
			<div className="m-content">
				<div className="m_header_final"> CHESS & JAZZ</div>
				<div className="m_map" style={{ height: '385px' }}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5534.113945273314!2d37.605156036174236!3d55.770565992726034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0YHQsNC0INGN0YDQvNC40YLQsNC2!5e0!3m2!1sru!2sru!4v1645356152850!5m2!1sru!2sru"
						width="100%"
						height="100%"
						style={{ border: 0, filter: 'grayscale(100%) invert(1)' }}
						allowFullScreen=""
						loading="lazy"
					></iframe>
				</div>
				<div className="m_socials-content">
					<div className="m_socials-place">
						<p>{t('final_date1')}</p>
						<p>{t('final_date2')}</p>
						<p>{t('final_date3')}</p>
					</div>
					<div className="m_socials_mail"> INFO@CHESSANDJAZZ.COM</div>
					<div className="m_socials-copy"> &copy;&nbsp;2022. {t('right')}</div>
					<div className="m_socials-icons">
						<button className="socials__btn">
							<img src={instainst} alt="" />
						</button>
						<button className="socials__btn">
							<img src={vkvk} alt="" />
						</button>
						<button className="socials__btn">
							<img src={youtubeyt} alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FinalPageMobile;
