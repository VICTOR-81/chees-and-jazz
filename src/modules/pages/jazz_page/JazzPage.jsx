import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring } from 'react-spring';

import './page_styles/jazz_cards.scss';
import './page_styles/jazz_marquee.scss';
import './page_styles/jazz_chess-btn.scss';
import './page_styles/jazz.scss';

import arrow from '../../../assets/icons/arrow-next.svg';
import artist_avatar from '../../../assets/images/artists/artist-avatar.jpg';
import artist2 from '../../../assets/images/heap/Portico_Quartet.png';
import artist1 from '../../../assets/images/heap/image_82.png';
import artist_detail1 from '../../../assets/images/artists/agutin.jpg';
// import artist_avatar from '../../../assets/images/artists/portico-quartet.jpg';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import ArtistSquare from './artist_square/ArtistSquare';
import ArtistPage from './../../artist_page/ArtistPage';
import ChessPage from '../chess_page/ChessPage';

import { PageContext } from '../../../PageContext';

const artists = [
	{
		pic: artist_detail1,
		// name: 'Леонид Агутин',
		name: 'author-name',
		date: '31.07',
		detail_date: 'date',
		time: '18:30',
		time_end: '20:15',
		detailed: artist_detail1,
		description: 'artist_description',
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
		name: 'anons',
		date: '',
		detail_date: '',
		time_end: '',
		time: '',
		detailed: artist_avatar,
		description: '',
	},
];

function JazzPage(params) {
	const [isArtist, setIsArtist] = useState(null);
	const [pageContext, setPageContext] = useContext(PageContext);
	const { t, i18n } = useTranslation();
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	// const artistForward = useSpring({
	// 	from: { transform: 'translateX(0px)' },
	// 	to: { transform: 'translateX(-100vw)' },
	// });
	// const artistBackwards = useSpring({
	// 	from: { transform: 'translateX(0px)' },
	// 	to: { transform: 'translateX(100vw)' },
	// });

	function goForwardArtist() {
		if (+isArtist < artists.length - 1) {
			setIsArtist(+isArtist + 1);
		} else {
			setIsArtist(null);
			pageContext.swipeForward();
		}
	}
	function goBackwardsArtist() {
		if (+isArtist > 0) {
			setIsArtist(+isArtist - 1);
		} else {
			setIsArtist(null);
		}
	}

	function changeContext(number) {
		if (isArtist === null) {
			setIsArtist(number);
		} else if (isArtist > -1 && isArtist < artists.length - 1) {
			setIsArtist(number);
		} else {
			setIsArtist(null);
		}
	}

	// if (isArtist == 0) {
	// 	styles.left = 'calc(100vw-80px)';
	// } else {
	// 	styles.left = 'calc(' + '-' + isArtist * 100 + 'vw - 80px)';
	// }

	useEffect(() => {
		isArtist !== null ? pageContext.setContext('artist') : pageContext.setContext('scroll');
	});

	if (isArtist == null) {
		// pageContext.setContext('scroll');

		return (
			<div className={params.child === true ? 'container jazz-cont child' : 'container jazz-cont'}>
				<div className="jazz-content">
					<div className="jazz-content__top">
						<div className="jazz-marquee-w" style={{ paddingTop: '40px' }}>
							<div
								className={
									params.child
										? 'jazz_title title_cnj'
										: i18n.translator.language == 'ru'
										? 'jazz_title title_cnj initialized'
										: 'jazz_title title_cnj initialized jazz_title-en'
								}
							>
								{t('jazz')} {t('jazz')}&nbsp;
							</div>
						</div>

						<div className="jazz-right">
							<BtnTicket />
							<div className="jazz__sponsor">
								ПРИ ПОДДЕРЖКЕ:
								<img src="assets/icons/Harman_Kardon_Logosupported.svg" alt="" />
							</div>
						</div>
					</div>

					<div className="jazz-content__bot jazz-content__bot-absolute">
						<div className="all_cards">
							<ArtistSquare artists={artists} context={changeContext} />
						</div>
					</div>
				</div>
				<div
					className="chess-button2"
					onClick={() => {
						pageContext.swipeForward();
					}}
				>
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{t('chess')}</div>
					<img src={arrow} alt="" />
				</div>
			</div>
		);
	} else {
		const styles = {
			display: 'flex',
			width: '900vw',
			position: 'relative',
			transition: 'all ease 0.3s',
			left: isArtist == 0 ? 'calc(100vw - 80px)' : 'calc(' + '-' + (isArtist - 1) * 100 + 'vw - 80px)',
		};
		console.log(styles);
		return (
			<div
				className="artists_big_picture"
				style={{ display: styles.display, width: styles.width, position: styles.position, left: styles.left, transition: styles.transition }}
				onWheel={(e) => {
					if (pageContext.context !== 'scroll') {
						if (e.deltaY == 100) {
							goForwardArtist();
						} else if (e.deltaY == -100) {
							goBackwardsArtist();
						}
					}
				}}
			>
				{artists.map((el, i) => {
					return <ArtistPage artist={el} key={i} data-index={i} goBack={goBackwardsArtist} goForward={goForwardArtist} />;
				})}
			</div>
		);
	}
}

export default JazzPage;
