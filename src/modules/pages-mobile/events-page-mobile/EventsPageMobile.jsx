import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './events_page_mobile.scss';
import asterisk from '../../../assets/icons/star.svg';
import eventcard1 from '../../../assets/images/heap/1eventcard.png';

import MobilePageSlider from './mobilePageGallery/MobileViewer';

// import image_pack_1 from '../../pages/events_page/events_sliders/image_pack_1';
// import image_pack_2 from '../../pages/events_page/events_sliders/image_pack_2';
// import image_pack_3 from '../../pages/events_page/events_sliders/image_pack_3';
// import image_pack_4 from '../../pages/events_page/events_sliders/image_pack_4';
// import image_pack_5 from '../../pages/events_page/events_sliders/image_pack_5';
// import image_pack_6 from '../../pages/events_page/events_sliders/image_pack_6';
// import image_pack_7 from '../../pages/events_page/events_sliders/image_pack_7';
// import image_pack_8 from '../../pages/events_page/events_sliders/image_pack_8';
// import image_pack_9 from '../../pages/events_page/events_sliders/image_pack_9';
// import image_pack_10 from '../../pages/events_page/events_sliders/image_pack_10';

import pack_1_1 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_1.JPG';
import pack_1_2 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_2.JPG';
import pack_1_3 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_3.JPG';
import pack_1_4 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_4.jpg';
import pack_1_5 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_5.JPG';
import pack_1_6 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_6.jpg';
import pack_1_7 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_7.jpg';
import pack_1_8 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_8.jpg';

import pack_2_1 from '../../../assets/images/events/CHESS & JAZZ BRUNCH 2020/slide_1.JPG';
import pack_2_2 from '../../../assets/images/events/CHESS & JAZZ BRUNCH 2020/slide_2.jpg';
import pack_2_3 from '../../../assets/images/events/CHESS & JAZZ BRUNCH 2020/slide_3.jpg';
import pack_2_4 from '../../../assets/images/events/CHESS & JAZZ BRUNCH 2020/slide_4.jpg';
import pack_2_5 from '../../../assets/images/events/CHESS & JAZZ BRUNCH 2020/slide_5.jpg';
import pack_2_6 from '../../../assets/images/events/CHESS & JAZZ BRUNCH 2020/slide_6.jpg';
import pack_2_7 from '../../../assets/images/events/CHESS & JAZZ BRUNCH 2020/slide_7.jpg';

import pack_3_1 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_1.JPG';
import pack_3_2 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_2.JPG';
import pack_3_3 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_3.JPG';
import pack_3_4 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_4.jpg';
import pack_3_5 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_5.JPG';
import pack_3_6 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_6.jpg';
import pack_3_7 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_7.jpg';
import pack_3_8 from '../../../assets/images/events/Chess & Jazz Brunch 2021/slide_8.jpg';

import pack_4_1 from '../../../assets/images/events/???????????? ???3/slide_1.JPG';
import pack_4_2 from '../../../assets/images/events/???????????? ???3/slide_2.JPG';
import pack_4_3 from '../../../assets/images/events/???????????? ???3/slide_3.JPG';
import pack_4_4 from '../../../assets/images/events/???????????? ???3/slide_4.JPG';
import pack_4_5 from '../../../assets/images/events/???????????? ???3/slide_5.JPG';
import pack_4_6 from '../../../assets/images/events/???????????? ???3/slide_6.JPG';
import pack_4_7 from '../../../assets/images/events/???????????? ???3/slide_7.JPG';

import pack_5_1 from '../../../assets/images/events/???????????? ???_2/slide_1.jpg';
import pack_5_2 from '../../../assets/images/events/???????????? ???_2/slide_2.jpg';
import pack_5_3 from '../../../assets/images/events/???????????? ???_2/slide_3.jpg';
import pack_5_4 from '../../../assets/images/events/???????????? ???_2/slide_4.jpg';
import pack_5_5 from '../../../assets/images/events/???????????? ???_2/slide_5.jpg';

import pack_6_1 from '../../../assets/images/events/???????????? ???1/slide_1.jpg';
import pack_6_2 from '../../../assets/images/events/???????????? ???1/slide_2.jpg';
import pack_6_3 from '../../../assets/images/events/???????????? ???1/slide_3.jpg';
import pack_6_4 from '../../../assets/images/events/???????????? ???1/slide_4.jpg';
import pack_6_5 from '../../../assets/images/events/???????????? ???1/slide_5.jpg';

import pack_7_1 from '../../../assets/images/events/?????????????????? 2018/slide_1.jpg';
import pack_7_2 from '../../../assets/images/events/?????????????????? 2018/slide_2.jpg';
import pack_7_3 from '../../../assets/images/events/?????????????????? 2018/slide_3.jpg';
import pack_7_4 from '../../../assets/images/events/?????????????????? 2018/slide_4.jpg';
import pack_7_5 from '../../../assets/images/events/?????????????????? 2018/slide_5.jpg';
import pack_7_6 from '../../../assets/images/events/?????????????????? 2018/slide_6.jpg';
import pack_7_7 from '../../../assets/images/events/?????????????????? 2018/slide_7.jpeg';

import pack_8_1 from '../../../assets/images/events/?????????????????? 2019/slide_1.JPG';
import pack_8_2 from '../../../assets/images/events/?????????????????? 2019/slide_2.JPG';
import pack_8_3 from '../../../assets/images/events/?????????????????? 2019/slide_3.JPG';
import pack_8_4 from '../../../assets/images/events/?????????????????? 2019/slide_4.JPG';
import pack_8_5 from '../../../assets/images/events/?????????????????? 2019/slide_5.jpg';
import pack_8_6 from '../../../assets/images/events/?????????????????? 2019/slide_6.jpeg';
import pack_8_7 from '../../../assets/images/events/?????????????????? 2019/slide_7.jpeg';
import pack_8_8 from '../../../assets/images/events/?????????????????? 2019/slide_8.jpeg';

import pack_9_1 from '../../../assets/images/events/??????????????????/slide_1.jpg';
import pack_9_2 from '../../../assets/images/events/??????????????????/slide_2.jpg';
import pack_9_3 from '../../../assets/images/events/??????????????????/slide_3.jpg';
import pack_9_4 from '../../../assets/images/events/??????????????????/slide_4.jpg';
import pack_9_5 from '../../../assets/images/events/??????????????????/slide_5.jpg';
import pack_9_6 from '../../../assets/images/events/??????????????????/slide_6.jpg';
import pack_9_7 from '../../../assets/images/events/??????????????????/slide_7.jpg';

import pack_10_1 from '../../../assets/images/events/????????????????/slide_1.jpg';
import pack_10_2 from '../../../assets/images/events/????????????????/slide_2.jpg';
import pack_10_3 from '../../../assets/images/events/????????????????/slide_3.jpg';
import pack_10_4 from '../../../assets/images/events/????????????????/slide_4.jpg';
import pack_10_5 from '../../../assets/images/events/????????????????/slide_5.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

import { t } from 'i18next';

function EventsPageMobile() {
	const { t, i18n } = useTranslation();

	const image_pack_1 = [pack_1_1, pack_1_2, pack_1_3, pack_1_4, pack_1_5, pack_1_6, pack_1_7, pack_1_8];
	const image_pack_2 = [pack_2_1, pack_2_2, pack_2_3, pack_2_4, pack_2_5, pack_2_6, pack_2_7];
	const image_pack_3 = [pack_3_1, pack_3_2, pack_3_3, pack_3_4, pack_3_5, pack_3_6, pack_3_7, pack_3_8];
	const image_pack_4 = [pack_4_1, pack_4_2, pack_4_3, pack_4_4, pack_4_5, pack_4_6, pack_4_7];
	const image_pack_5 = [pack_5_1, pack_5_2, pack_5_3, pack_5_4, pack_5_5];
	const image_pack_6 = [pack_6_1, pack_6_2, pack_6_3, pack_6_4, pack_6_5];
	const image_pack_7 = [pack_7_1, pack_7_2, pack_7_3, pack_7_4, pack_7_5, pack_7_6, pack_7_7];
	const image_pack_8 = [pack_8_1, pack_8_2, pack_8_3, pack_8_4, pack_8_5, pack_8_6, pack_8_7, pack_8_8];
	const image_pack_9 = [pack_9_1, pack_9_2, pack_9_3, pack_9_4, pack_9_5, pack_9_6, pack_9_7];
	const image_pack_10 = [pack_10_1, pack_10_2, pack_10_3, pack_10_4, pack_10_5];

	const events_2021 = [
		{
			slider: image_pack_1,
			title: 'Chess & Jazz Brunch 2021',
			date: t('events_date1'),
			location: t('events_moscow'),
			description: t('events_description1'),
			link: 'https://www.elle.ru/stil-zhizni/events/shakhmaty-eto-modno-gosti-brancha-chess-and-jazz-v-dukhe-italyanskoi-rivery/',
		},
	];
	const events_2020 = [
		{
			slider: image_pack_2,
			title: 'Chess & Jazz Brunch 2020',
			date: t('events_date2'),
			location: t('events_moscow'),
			description: t('events_description2'),
			link: 'https://www.buro247.ru/news/lifestyle/14-sep-2020-royal-studio-brunch-chess-jaz.html?gallery=180669&slide=5',
		},
	];

	const events_2019 = [
		{
			slider: image_pack_3,
			title: t('events_title1'),
			date: t('events_date3'),
			location: t('events_moscow'),
			description: t('events_description3'),
			link: 'https://www.buro247.ru/news/lifestyle/13-dec-2019-party-chess-and-jazz.html?gallery=180218&slide=1',
		},
		{
			slider: image_pack_4,
			title: t('events_title2'),
			date: t('events_date4'),
			location: t('events_moscow'),
			description: t('events_description4'),
			link: 'https://www.cosmo.ru/lifestyle/news/18-07-2019/shahmatnaya-vecherinka-partiya-lll-v-preddverie-festivalya-chess-and-jazz/',
		},
		{
			slider: image_pack_5,
			title: t('events_title3'),
			date: t('events_date5'),
			location: t('events_moscow'),
			description: t('events_description5'),
			link: 'https://www.cosmo.ru/lifestyle/stil-zhizni/v-moskve-proshla-vecherinka-partiya-isaia-v-petrovskom-passazhe/',
		},
		{
			slider: image_pack_8,
			title: 'Chess & Jazz 2019',
			date: t('events_date6'),
			location: t('events_moscow'),
			description: t('events_description6'),
			link: 'https://bazaar.ru/heroes/parties/kak-proshel-festival-chess-and-jazz/',
		},
		{
			slider: image_pack_9,
			title: t('events_title5'),
			date: t('events_date7'),
			location: t('events_almaty'),
			description: t('events_description7'),
			link: 'https://www.buro247.kz/buro-choise/events/kak-proshel-festival-chess-jazz.html',
		},
		{
			slider: image_pack_10,
			title: 'Chess & Jazz Singapore',
			date: t('events_date8'),
			location: t('events_singapore'),
			description: t('events_description8'),
			link: 'https://www.robbreport.com.sg/interview-with-salio-jazz-singer-songwriter-i-was-nine-when-i-wrote-my-first-song/',
		},
	];

	const events_2018 = [
		{
			slider: image_pack_6,
			title: t('events_title4'),
			date: t('events_date9'),
			location: t('events_moscow'),
			description: t('events_description9'),
			link: 'https://www.timeout.ru/msk/feature/481804',
		},
		{
			slider: image_pack_7,
			title: 'Chess & Jazz 2018',
			date: t('events_date10'),
			location: t('events_moscow'),
			description: t('events_description10'),
			link: 'https://www.kommersant.ru/doc/3681335',
		},
	];
	const [year, setYear] = useState(events_2021);
	const [decor, setDecor] = useState('2021');
	const [isCarousel, setIsCarousel] = useState(false);

	function closeCarousel() {
		setIsCarousel(false);
	}

	if (isCarousel) {
		return <MobilePageSlider close={closeCarousel} options={isCarousel} />;
	} else {
		return (
			<div className="mobile-container mobile-container_white" id="events">
				<div className="m-content">
					<div className="jazz-marquee-w r-line">
						<div className="jazz-marquee jazz-marquee_white ">
							<span>?????????????? ??????????????&nbsp;</span>
						</div>
						<div className="jazz-marquee jazz-marquee_white jazz-marquee2">
							<span>?????????????? ??????????????&nbsp;</span>
						</div>
					</div>

					<div className="m_events-swiper">
						<div className="events-swiper-pagination">
							<div
								className={decor === '2021' ? 'm_year-active' : 'm_year'}
								onClick={() => {
									setYear(events_2021);
									setDecor('2021');
								}}
							>
								2021
							</div>
							<div
								className={decor === '2020' ? 'm_year-active' : 'm_year'}
								onClick={() => {
									setYear(events_2020);
									setDecor('2020');
								}}
							>
								2020
							</div>
							<div
								className={decor === '2019' ? 'm_year-active' : 'm_year'}
								onClick={() => {
									setYear(events_2019);
									setDecor('2019');
								}}
							>
								2019
							</div>
							<div
								className={decor === '2018' ? 'm_year-active' : 'm_year'}
								onClick={() => {
									setYear(events_2018);
									setDecor('2018');
								}}
							>
								2018
							</div>
						</div>
						<div className="event-container">
							<Swiper style={{ height: 'auto' }} slidesPerView={1.05} spaceBetween={10}>
								{year.map((el, i) => {
									return (
										<SwiperSlide key={i} style={{ textAlign: 'left' }}>
											<div className="event_element" key={i} style={{ height: '100%', width: '100%', background: '#f4f3f3' }}>
												<div className="event_element_pic">
													<div
														className="event_element_pic_btn"
														onClick={() => {
															setIsCarousel(el);
														}}
													>
														{' '}
													</div>
													<img
														style={{ width: '100%', height: '100%', maxHeight: '400px', objectFit: 'cover' }}
														loading="lazy"
														src={el.slider[0]}
														alt=""
													/>
												</div>
												<div className="event_element_heder">{el.title}</div>
												<div className="event_element_content">{el.description}</div>
												<div className="event_element_links">
													<div className="event_element_date">
														<p>{el.date}</p>
														<p>{el.location}</p>
													</div>
													<div
														className="event_element_btn"
														onClick={() => {
															window.open(el.link);
														}}
													>
														<p>??????????????????</p>
													</div>
												</div>
											</div>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EventsPageMobile;
