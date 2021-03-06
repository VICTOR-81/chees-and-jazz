import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import slide_1 from '../../../../assets/images/events/Chess & Jazz Brunch 2021/slide_1.JPG';
import slide_2 from '../../../../assets/images/events/Chess & Jazz Brunch 2021/slide_2.JPG';
import slide_3 from '../../../../assets/images/events/Chess & Jazz Brunch 2021/slide_3.JPG';
import slide_4 from '../../../../assets/images/events/Chess & Jazz Brunch 2021/slide_4.jpg';
import slide_5 from '../../../../assets/images/events/Chess & Jazz Brunch 2021/slide_5.JPG';
import slide_6 from '../../../../assets/images/events/Chess & Jazz Brunch 2021/slide_6.jpg';
import slide_7 from '../../../../assets/images/events/Chess & Jazz Brunch 2021/slide_7.jpg';
import slide_8 from '../../../../assets/images/events/Chess & Jazz Brunch 2021/slide_8.jpg';

import './events_slider.scss';

// import required modules
import { Navigation } from 'swiper';

export default function EventsSlider1() {
	return (
		<>
			<Swiper loop={true} loopFillGroupWithBlank={true} navigation={true} modules={[Navigation]} className="mySwiper">
				<SwiperSlide>
					<img loading="lazy" src={slide_1} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_2} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_3} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_4} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_5} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_6} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_7} />
				</SwiperSlide>
				<SwiperSlide>
					<img loading="lazy" src={slide_8} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
