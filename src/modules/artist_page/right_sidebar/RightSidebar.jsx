import React from 'react';
import './right_sidebar.scss';
import arrowleft from '../../../assets/icons/big-arrow-left.svg';
import arroright from '../../../assets/icons/big-arrow-right.svg';

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
				<div className="runningline">Джаз Джаз Джаз&nbsp;</div>
			</div>
		</div>
	);
}

export default RightSidebar;
