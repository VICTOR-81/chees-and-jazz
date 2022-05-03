import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './btn_ticket.scss';

function BtnTicket() {
	const { t, i18n } = useTranslation();
	const [buyTicket, setBuyTicket] = useState(false);

	return (
		<>
			<div
				// className="btnbuyticket"
				className={i18n.translator.language == 'ru' ? 'btnbuyticket' : 'btnbuyticket btnbuyticket-en'}
				onClick={() => {
					setBuyTicket(true);
				}}
			>
				{/* <span>&nbsp;купить билет&nbsp;&nbsp;купить билет&nbsp;</span>
				<span>&nbsp;купить билет&nbsp;&nbsp;купить билет&nbsp;</span> */}
				<span>
					&nbsp;{t('buy a ticket')}&nbsp;&nbsp;{t('buy a ticket')}&nbsp;
				</span>
				<span>
					&nbsp;{t('buy a ticket')}&nbsp;&nbsp;{t('buy a ticket')}&nbsp;
				</span>
			</div>
			{buyTicket ? (
				<div
					style={{
						width: '100vw',
						height: '100vh',
						left: 0,
						top: 0,
						position: 'fixed',
						background: 'rgba(0, 0, 0, 0.6)',
						cursor: 'pointer',
						zIndex: 50,
					}}
					onClick={() => {
						setBuyTicket(false);
					}}
				>
					<iframe
						frameBorder="0"
						src="https://widget.afisha.yandex.ru/w/events/170293?regionId=213&clientKey=f3c2c9b5-b719-40ee-8ff2-6ac6f2f103c6&widgetName=w1&gaCookie=GA1.2.420932549.1651561439"
						className="undefined"
						referrerPolicy="unsafe-url"
						sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin allow-top-navigation allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
						style={{
							width: '70vw',
							height: '70vh',
							display: 'block',
							border: 'none',
							padding: '0px',
							margin: '0px',
							position: 'fixed',
							zIndex: '100',
							top: '15vh',
							left: '15vw',
						}}
					></iframe>
				</div>
			) : (
				''
			)}
		</>
	);
}

export default BtnTicket;
