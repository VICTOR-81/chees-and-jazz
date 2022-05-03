import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import arrow from '../../../assets/icons/arrow-next.svg';
import artist2 from '../../../assets/images/heap/Portico_Quartet.png';
import artist1 from '../../../assets/images/heap/image_82.png';
import artist_detail1 from '../../../assets/images/artists/agutin.jpg';
import artist_detail2 from '../../../assets/images/artists/portico-quartet.jpg';
import asterisk from '../../../assets/icons/star.svg';
import artist_avatar from '../../../assets/images/artists/artist-avatar.jpg';

import './jazz_page_mobile.scss';

import ArtistPageMobile from '../../artist_page-mobile/ArtistPageMobile';
import { t } from 'i18next';

function JazzPageMobile() {
	const { t, i18n } = useTranslation();

	const artists = [
		{
			pic: artist_detail1,
			name: t('author-name'),
			date: '31.07',
			detail_date: t('date'),
			time: '18:30',
			time_end: '20:15',
			detailed: artist_detail1,
			description: t('artist_description'),
		},
	];

	const [isCarousel, setIsCarousel] = useState(null);

	function close() {
		setIsCarousel(null);
	}

	if (isCarousel === null) {
		return (
			<div className="mobile-container" style={{ height: '100vh' }} id="jazz">
				<div className="m-content m-content-jazz">
					<div className="jazz-marquee-w r-line">
						<div className="jazz-marquee">
							<span>ДЖАЗ ДЖАЗ ДЖАЗ&nbsp;</span>
						</div>
						<div className="jazz-marquee jazz-marquee2">
							<span>ДЖАЗ ДЖАЗ ДЖАЗ&nbsp;</span>
						</div>
					</div>

					<div className="m-cards__container">
						{artists.map((el, i) => {
							return (
								<div
									className="m-card"
									key={i}
									onClick={() => {
										setIsCarousel(i);
									}}
								>
									<div className="m-card__pic">
										<img src={el.pic} alt="" style={{ objectFit: 'cover' }} />
									</div>
									<div className="m-card__date">
										{el.date}, {el.time}
									</div>
									<div className="m-card__name">{el.name}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	} else {
		return <ArtistPageMobile artist={artists} slide={isCarousel} close={close} />;
	}
}

export default JazzPageMobile;
