import React, { useState } from 'react';

import './page_styles/chess-events.scss';
import './page_styles/chess-lectures-button.scss';
import './page_styles/chess-marquee.scss';
import './page_styles/chess.scss';

import arrow from '../../../assets/icons/arrow-next.svg';
import sponsor from '../../../assets/images/heap/chess_village_sponsor.png';
import chess_img1 from '../../../assets/images/heap/chess_img1.JPG';

// import slider_1 from '../../../assets/images/chess/chess1.JPG';
// import slider_2 from '../../../assets/images/chess/chess2.JPG';
// import slider_3 from '../../../assets/images/chess/chess3.jpeg';
// import slider_4 from '../../../assets/images/chess/chess4.JPG';
// import slider_5 from '../../../assets/images/chess/chess5.JPG';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import ChessSlider from './chess_slider/ChessSlider';
import ChessEvents from './chess_events/ChessEvents';

const events = [
	{
		day: '30 ИЮЛЯ',
		time: '14:00 - 20:00',
		name: 'CHESS SCHOOL',
		person: false,
		description: 'Лучшие тренеры Российской шахматной федерации поделятся знаниями и приемами с теми, кто взял фигуру в руки впервые.',
	},
	{
		day: '30 ИЮЛЯ',
		time: '14:00 - 20:00',
		name: 'CHESS VILLAGE',
		person: false,
		description: 'Здесь гости фестиваля получат возможность сыграть шахматную партию бок о бок с гроссмейстерами мирового уровня.',
	},
	{
		day: '30 ИЮЛЯ',
		time: '16:00 - 20:00',
		name: 'CHESS UP',
		person: false,
		description: 'Пространство, предназначенное для турнира, состязаться в котором будут именитые шахматисты.',
	},
	{
		day: '30 ИЮЛЯ',
		time: '19:00 - 20:00',
		name: 'CHESS SEANCE',
		person: false,
		description: 'Лучшие тренеры Российской шахматной федерации поделятся знаниями и приемами с теми, кто взял фигуру в руки впервые.',
	},
];

function ChessPage(params) {
	const [image, setImage] = useState(0);

	function changeImage(index) {
		setImage(index);
	}

	return (
		<div className={params.child === true ? 'container chess-cont child' : 'container chess-cont'}>
			<div className="chess-content">
				<div className="chess-content__top">
					<div className="jazz-marquee-w">
						<div className="jazz-marquee chess-marquee">
							<div className={params.child ? 'chess_title title_cnj' : 'chess_title title_cnj initialized'}>ШАХМАТЫ ШАХМАТЫ&nbsp;</div>
						</div>
					</div>

					<div className="chess-right">
						<BtnTicket />
						{/* <div className="jazz__sponsor">
							ПРИ ПОДДЕРЖКЕ:
							<img src={sponsor} alt="" />
						</div> */}
					</div>
				</div>

				<div className="chess-content__bot">
					<div className="chess-table">
						<div className="chess-picture">
							<ChessSlider active={image} />
							{/* <img className='chess_img' src={chess_img1} alt="" /> */}
						</div>
						<div className="chess-events">
							<ChessEvents events={events} changeImage={changeImage} />
						</div>
					</div>
					<div className="lectures-button2">
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
						<div className="lectures-button__content2 ">ЛЕКТОРИЙ</div>
						<img src={arrow} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChessPage;
