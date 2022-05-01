import React from 'react';

import './final_page_mobile.scss';
import asterisk from '../../../assets/icons/star.svg';
import instainst from '../../../assets/icons/instainst.svg';
import vkvk from '../../../assets/icons/vkvk.svg';
import youtubeyt from '../../../assets/icons/youtubeyt.svg';

function FinalPageMobile() {
	return (
		<div class="mobile-container">
			<div class="m-content">
				<div class="m_header_final"> CHESS & JAZZ</div>
				<div class="m_map" style={{ height: '385px' }}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5534.113945273314!2d37.605156036174236!3d55.770565992726034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0YHQsNC0INGN0YDQvNC40YLQsNC2!5e0!3m2!1sru!2sru!4v1645356152850!5m2!1sru!2sru"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullscreen=""
						loading="lazy"
					></iframe>
				</div>
				<div class="m_socials-content">
					<div class="m_socials-place">
						<p> 30—31 июля 2022</p>
						<p> Фестиваль шахмат и джаза </p>
						<p>Москва, сад «Эрмитаж»</p>
					</div>
					<div class="m_socials_mail"> INFO@CHESSANDJAZZ.COM</div>
					<div class="m_socials-copy"> &copy;&nbsp;2022. Все права защищены</div>
					<div class="m_socials-icons">
						<button class="socials__btn">
							<img src={instainst} alt="" />
						</button>
						<button class="socials__btn">
							<img src={vkvk} alt="" />
						</button>
						<button class="socials__btn">
							<img src={youtubeyt} alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FinalPageMobile;
