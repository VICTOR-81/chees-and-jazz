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
			// name: 'Леонид Агутин',
			name: t('author-name'),
			date: '31.07',
			detail_date: t('date'),
			time: '18:30',
			time_end: '20:15',
			detailed: artist_detail1,
			description: t('artist_description'),
		},
		{
			// pic: artist2,
			pic: artist_avatar,
			// name: 'Portico Quartet',
			name: 'anons',
			date: '',
			detail_date: '',
			time_end: '',
			time: '',
			detailed: artist_avatar,
			description: '',
		},
		{
			// pic: artist2,
			pic: artist_avatar,
			// name: 'Portico Quartet',
			name: t('anons'),
			date: '',
			detail_date: '',
			time_end: '',
			time: '',
			detailed: artist_avatar,
			description: '',
		},
		{
			// pic: artist2,
			pic: artist_avatar,
			// name: 'Portico Quartet',
			name: t('anons'),
			date: '',
			detail_date: '',
			time_end: '',
			time: '',
			detailed: artist_avatar,
			description: '',
		},
	];

	const [isCarousel, setIsCarousel] = useState(null);

	function close() {
		setIsCarousel(null);
	}

	if (isCarousel === null) {
		return (
			<div class="mobile-container" style={{ height: '100vh' }}>
				<div class="m-content m-content-jazz">
					<div class="jazz-marquee-w">
						<div class="jazz-marquee ">
							<span>ДЖАЗ ДЖАЗ ДЖАЗ&nbsp;</span>
						</div>
						<div class="jazz-marquee jazz-marquee2">
							<span>ДЖАЗ ДЖАЗ ДЖАЗ&nbsp;</span>
						</div>
					</div>

					<div class="m-cards__container">
						{artists.map((el, i) => {
							return (
								<div
									class="m-card"
									key={i}
									onClick={() => {
										setIsCarousel(i);
									}}
								>
									<div class="m-card__pic">
										<img src={el.pic} alt="" />
									</div>
									<div class="m-card__date">
										{el.date}, {el.time}
									</div>
									<div class="m-card__name">{el.name}</div>
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
