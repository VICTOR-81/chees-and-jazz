import React from 'react';
import { useTranslation } from 'react-i18next';

import MobileChessEvent from './mobile_chess_event/MobileChessEvent';

import imgchess from '../../../assets/images/heap/2018-07-07_15-13-37_AG (1) 1.png';
import imgautor from '../../../assets/images/heap/2019-07-26_19-20-39_GORSHENIN 1.png';
import asterisk from '../../../assets/icons/star.svg';
import slider_1 from '../../../assets/images/chess/chess2.JPG';
import slider_2 from '../../../assets/images/chess/chess3.jpeg';
import slider_3 from '../../../assets/images/chess/chess4.JPG';
import slider_4 from '../../../assets/images/chess/chess5.JPG';

import './chees_page_mobile.scss';

import { t } from 'i18next';

function ChessPageMobile() {
	const { t, i18n } = useTranslation();
	const events = [
		{
			day: t('chess_day'),
			time: '14:00 - 20:00',
			name: 'CHESS SCHOOL',
			person: false,
			description: t('chess_description1'),
			image: slider_1,
		},
		{
			day: t('chess_day'),
			time: '14:00 - 20:00',
			name: 'CHESS VILLAGE',
			person: false,
			description: t('chess_description2'),
			image: slider_2,
		},
		{
			day: t('chess_day'),
			time: '16:00 - 20:00',
			name: 'CHESS CUP',
			person: false,
			description: t('chess_description3'),
			image: slider_3,
		},
		{
			day: t('chess_day'),
			time: '19:00 - 20:00',
			name: 'CHESS SEANCE',
			person: false,
			description: t('chess_description4'),
			image: slider_4,
		},
	];
	return (
		<div class="mobile-container mobile-container_white" id="chess">
			<div class="m-content">
				<div class="jazz-marquee-w r-line">
					<div class="jazz-marquee jazz-marquee_white ">
						<span>ШАХМАТЫ ШАХМАТЫ&nbsp;</span>
					</div>
					<div class="jazz-marquee jazz-marquee_white jazz-marquee2">
						<span>ШАХМАТЫ ШАХМАТЫ&nbsp;</span>
					</div>
				</div>

				<div class="chess_acordion_m">
					{events.map((el, i) => {
						return <MobileChessEvent key={i} el={el} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default ChessPageMobile;
