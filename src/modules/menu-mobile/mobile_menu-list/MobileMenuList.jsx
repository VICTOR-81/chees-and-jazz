import React from 'react';

import './mobile_menu-list.scss';

import { useSpring, animated } from 'react-spring';

function MobileMenuList(params) {
	const { x } = useSpring({
		x: params.displayed ? 0 : 10,
	});

	return (
		<animated.div
			className="mobilemenu__list"
			style={{
				left: x.to((x) => `-${x * 10}vw`),
				position: 'fixed',
				background: '#fff',
				height: '100%',
				width: '100%',
				margin: 0,
				padding: '16px',
				boxSizing: 'border-box',
				zIndex: 10,
				top: '48px',
			}}
		>
			<ul>
				<li>
					<span>01 /</span>
					<a href="/jazzmobile">Джаз</a>
				</li>
				<li>
					<span>02 /</span>
					<a href="/chessmobile">Шахматы</a>
				</li>

				<li>
					<span>03 /</span>
					<a href="">События</a>
				</li>
				<li>
					<span>04 /</span>
					<a href="/startmobile">Контакты</a>
				</li>
			</ul>
		</animated.div>
	);
}

export default MobileMenuList;
