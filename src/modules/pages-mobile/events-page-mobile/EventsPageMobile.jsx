import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './events_page_mobile.scss';
import asterisk from '../../../assets/icons/star.svg';
import eventcard1 from '../../../assets/images/heap/1eventcard.png';

// import EventsSlider1 from '../../pages/events_page/events_// sliders/EventsSlider1';
// import EventsSlider2 from '../../pages/events_page/events_// sliders/EventsSlider2';
// import EventsSlider3 from '../../pages/events_page/events_// sliders/EventsSlider3';
// import EventsSlider4 from '../../pages/events_page/events_// sliders/EventsSlider4';
// import EventsSlider5 from '../../pages/events_page/events_// sliders/EventsSlider5';
// import EventsSlider6 from '../../pages/events_page/events_// sliders/EventsSlider6';
// import EventsSlider7 from '../../pages/events_page/events_// sliders/EventsSlider7';
// import EventsSlider8 from '../../pages/events_page/events_// sliders/EventsSlider8';
// import EventsSlider9 from '../../pages/events_page/events_// sliders/EventsSlider9';
// import EventsSlider10 from '../../pages/events_page/events_// sliders/EventsSlider10';

import { Swiper, SwiperSlide } from 'swiper/react';

import { t } from 'i18next';

function EventsPageMobile() {
	const { t, i18n } = useTranslation();
	const events_2021 = [
		{
			// slider: <EventsSlider1 />,
			title: 'Chess & Jazz Brunch 2021',
			date: t('events_date1'),
			location: t('events_moscow'),
			description: t('events_description1'),
			link: 'https://www.elle.ru/stil-zhizni/events/shakhmaty-eto-modno-gosti-brancha-chess-and-jazz-v-dukhe-italyanskoi-rivery/',
		},
	];
	const events_2020 = [
		{
			// slider: <EventsSlider2 />,
			title: 'Chess & Jazz Brunch 2020',
			date: t('events_date2'),
			location: t('events_moscow'),
			description: t('events_description2'),
			link: 'https://www.buro247.ru/news/lifestyle/14-sep-2020-royal-studio-brunch-chess-jaz.html?gallery=180669&slide=5',
		},
	];

	const events_2019 = [
		{
			// slider: <EventsSlider3 />,
			title: t('events_title1'),
			date: t('events_date3'),
			location: t('events_moscow'),
			description: t('events_description3'),
			link: 'https://www.buro247.ru/news/lifestyle/13-dec-2019-party-chess-and-jazz.html?gallery=180218&slide=1',
		},
		{
			// slider: <EventsSlider4 />,
			title: t('events_title2'),
			date: t('events_date4'),
			location: t('events_moscow'),
			description: t('events_description4'),
			link: 'https://www.cosmo.ru/lifestyle/news/18-07-2019/shahmatnaya-vecherinka-partiya-lll-v-preddverie-festivalya-chess-and-jazz/',
		},
		{
			// slider: <EventsSlider5 />,
			title: t('events_title3'),
			date: t('events_date5'),
			location: t('events_moscow'),
			description: t('events_description5'),
			link: 'https://www.cosmo.ru/lifestyle/stil-zhizni/v-moskve-proshla-vecherinka-partiya-isaia-v-petrovskom-passazhe/',
		},
		{
			// slider: <EventsSlider8 />,
			title: 'Chess & Jazz 2019',
			date: t('events_date6'),
			location: t('events_moscow'),
			description: t('events_description6'),
			link: 'https://bazaar.ru/heroes/parties/kak-proshel-festival-chess-and-jazz/',
		},
		{
			// slider: <EventsSlider9 />,
			title: t('events_title5'),
			date: t('events_date7'),
			location: t('events_almaty'),
			description: t('events_description7'),
			link: 'https://www.buro247.kz/buro-choise/events/kak-proshel-festival-chess-jazz.html',
		},
		{
			// slider: <EventsSlider10 />,
			title: 'Chess & Jazz Singapore',
			date: t('events_date8'),
			location: t('events_singapore'),
			description: t('events_description8'),
			link: 'https://www.robbreport.com.sg/interview-with-salio-jazz-singer-songwriter-i-was-nine-when-i-wrote-my-first-song/',
		},
	];

	const events_2018 = [
		{
			// slider: <EventsSlider6 />,
			title: t('events_title4'),
			date: t('events_date9'),
			location: t('events_moscow'),
			description: t('events_description9'),
			link: 'https://www.timeout.ru/msk/feature/481804',
		},
		{
			// slider: <EventsSlider7 />,
			title: 'Chess & Jazz 2018',
			date: t('events_date10'),
			location: t('events_moscow'),
			description: t('events_description10'),
			link: 'https://www.kommersant.ru/doc/3681335',
		},
	];
	const [year, setYear] = useState(events_2021);
	const [decor, setDecor] = useState('2021');

	return (
		<div className="mobile-container mobile-container_white">
			<div className="m-content">
				<div className="jazz-marquee-w">
					<div className="jazz-marquee jazz-marquee_white ">
						<span>СОБЫТИЯ СОБЫТИЯ&nbsp;</span>
					</div>
					<div className="jazz-marquee jazz-marquee_white jazz-marquee2">
						<span>СОБЫТИЯ СОБЫТИЯ&nbsp;</span>
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
										<div className="event_element" key={i} style={{ height: '100%', background: '#f4f3f3' }}>
											<div className="event_element_pic">
												<div className="event_element_pic_btn"> </div>
												<img src={eventcard1} alt="" />
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
													<p>ПОДРОБНЕЕ</p>
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

export default EventsPageMobile;
