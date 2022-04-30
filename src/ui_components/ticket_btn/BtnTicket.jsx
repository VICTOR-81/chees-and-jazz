import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import './btn_ticket.scss';

function BtnTicket() {
	const { t, i18n } = useTranslation();
	// const [ticket, setTicket] = useState(i18n.translator.language);
	return (
		<div 
		// className="btnbuyticket" 
		className={i18n.translator.language == 'ru' ? 'btnbuyticket' : 'btnbuyticket btnbuyticket-en'}
		onClick={() => window.open('https://yookassa.ru/')}
		>
			{/* <span>&nbsp;купить билет&nbsp;&nbsp;купить билет&nbsp;</span>
			<span>&nbsp;купить билет&nbsp;&nbsp;купить билет&nbsp;</span> */}
			<span>&nbsp;{t("buy a ticket")}&nbsp;&nbsp;{t("buy a ticket")}&nbsp;</span>
			<span>&nbsp;{t("buy a ticket")}&nbsp;&nbsp;{t("buy a ticket")}&nbsp;</span>
		</div>
	);
}

export default BtnTicket;
