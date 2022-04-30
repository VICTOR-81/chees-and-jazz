import React from 'react';
import { useTranslation } from "react-i18next";
import './btn_ticket.scss';

function BtnTicket() {

	const { t, i18n } = useTranslation();
	const changeLanguage = (language) => {i18n.changeLanguage(language);};

	return (
		<div className="btnbuyticket" onClick={() => window.open('https://yookassa.ru/')}>
			{/* <span>&nbsp;купить билет&nbsp;&nbsp;купить билет&nbsp;</span>
			<span>&nbsp;купить билет&nbsp;&nbsp;купить билет&nbsp;</span> */}
			<span>&nbsp;{t("buy a ticket")}&nbsp;&nbsp;{t("buy a ticket")}&nbsp;</span>
			<span>&nbsp;{t("buy a ticket")}&nbsp;&nbsp;{t("buy a ticket")}&nbsp;</span>
		</div>
	);
}

export default BtnTicket;
