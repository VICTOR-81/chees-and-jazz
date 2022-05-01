import React from 'react';
import { useTranslation } from 'react-i18next';

import img from '../../../../assets/icons/Rectangle7.svg';

function ArtistSquare(params) {
	const { t, i18n } = useTranslation();

	return params.artists.map((el, i) => {
		return (
			<div
				className="jazz__card"
				key={i}
				data-key={i}
				data-index={i}
				style={{ cursor: 'pointer' }}
				onClick={(e) => {
					const id = e.currentTarget.dataset.index;
					console.log('id ' + id);
					params.context(id);
				}}
			>
				<img src={el.pic} alt="" />
				<div className="jazz__card-popup">
					<div className="jazz__card-top">
						<div className="jazz__card-date">
							<div>{el.date}</div>
							<div>{el.time}</div>
						</div>
						<button className="jazz__card-arrow">
							<img src={img} alt="" />
						</button>
					</div>
					<div className="jazz__card-bot">
						<div className="card-bot-marquee-w">
							<div className="card-bot-marquee">
								<span>{t(el.name)}&nbsp; &nbsp;</span>
							</div>
							<div className="card-bot-marquee card-bot-marquee2">
								<span>{t(el.name)}&nbsp; &nbsp;</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	});
}

export default ArtistSquare;
