import React from 'react';
import { useTranslation } from "react-i18next";

function ChessEvents(params) {

	const { t, i18n } = useTranslation();
	
	return params.events.map((el, i) => {
		return (
			<div
				className="chess-event"
				key={i}
				onMouseEnter={(e) => {
					e.currentTarget.classList.add('event-active');
					params.changeImage(i);
				}}
				onMouseLeave={(e) => {
					e.currentTarget.classList.remove('event-active');
				}}
			>
				<div className="event-date">
					<p>{t(el.day)}</p>
					<p>{el.type}</p>
				</div>
				<div className="event-name">{el.name}</div>
				{el.person ? (
					<div className="event-author">
						<div className="event-author-pic">
							{' '}
							<img src={el.person.avatar} alt="" />
						</div>
						<div className="event-author-name">{el.person.name}</div>
					</div>
				) : (
					''
				)}
				<div className="event-text">{t(el.description)}</div>
			</div>
		);
	});
}

export default ChessEvents;
