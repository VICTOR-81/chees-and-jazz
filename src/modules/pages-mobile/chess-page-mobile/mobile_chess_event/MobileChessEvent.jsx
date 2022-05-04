import React, { useState } from 'react';

function MobileChessEvent(params) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			class={isExpanded ? 'chess_acordion_items active' : 'chess_acordion_items'}
			style={{ transition: 'all ease 0.3s' }}
			onClick={() => {
				setIsExpanded(!isExpanded);
			}}
		>
			<div class="chess_acordion_item_t">
				<div class="item_name">{params.el.name}</div>
				<div class="item_icon">
					<div class="item_icon_h"> </div>
					<div class="item_icon_v"> </div>
				</div>
			</div>
			<div class="chess_acordion_item_b">
				<div class="chess_img_m" style={{ maxHeight: '600px' }}>
					<img src={params.el.image} alt="" style={{ maxHeight: '600px', objectFit: 'cover' }} />
				</div>
				<div class="chess_events_info_m">
					<div class="chess_event_date_m">
						<p>{params.el.day}</p>
						<p>{params.el.time}</p>
					</div>
					<div class="chess_event_info_m">
						<div class="chess_event_content_m">{params.el.description}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobileChessEvent;
