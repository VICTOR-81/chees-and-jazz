import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import arrow from '../../../../assets/icons/arrow-next.svg';
import plus from '../../../../assets/icons/plus_icon.svg';
import minus from '../../../../assets/icons/minus_icon.svg';

import { t } from 'i18next';

function EventBLock(params) {
	const { t, i18n } = useTranslation();
	const [isOpened, setIsOpened] = useState(params.open_default ? true : false);

	return (
		<>
			<div className="events__content-items__item active">
				<div>{t(params.event_data.title)}</div>
				<div
					style={{ height: '40px', width: '40px', cursor: 'pointer' }}
					onClick={() => {
						setIsOpened(!isOpened);
					}}
				>
					<img src={isOpened ? minus : plus} alt="" />
				</div>
			</div>
			<div className={isOpened ? 'events__content-items__wrapper active' : 'events__content-items__wrapper'}>
				<div className="events__content-items__left">
					<div className="events__content-items__img">{params.event_data.slider}</div>
				</div>
				<div className="events__content-items__right">
					<div className="events__content-items__top">
						<div className="events__content-items__date">
							<span>{t(params.event_data.date)}</span>
							<span>{t(params.event_data.location)}</span>
						</div>
						<div className="events__content-items__link">
							<a
								href={params.event_data.link}
								onClick={(e) => {
									e.preventDefault();
									window.open(e.target.href);
								}}
							>
								{t('events_more')}
							</a>
						</div>
					</div>
					<div className="events__content-items__text">{t(params.event_data.description)}</div>
				</div>
			</div>
		</>
	);
}

export default EventBLock;
