import React from 'react';
import './right_sidebar.scss';
import arrowleft from '../../../assets/icons/big-arrow-left.svg';
import arroright from '../../../assets/icons/big-arrow-right.svg';
import { t } from 'i18next';

function RightSidebar(params) {
	return (
		<div className="rightsidebar">
			<div className="btnnavigation">
				<button
					onClick={() => {
						params.goBack();
					}}
				>
					<img src={arrowleft} alt="" />
				</button>
				<button
					onClick={() => {
						params.goForward();
					}}
				>
					<img src={arroright} alt="" />
				</button>
			</div>
			<div className="runningline__wrapper">
				<div className="runningline">{t("jazz")} {t("jazz")} {t("jazz")}&nbsp;</div>
			</div>
		</div>
	);
}

export default RightSidebar;
