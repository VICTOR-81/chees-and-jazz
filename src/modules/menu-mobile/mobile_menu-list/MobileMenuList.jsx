import React, { useState } from 'react';

import './mobile_menu-list.scss';

import { useSpring, animated } from 'react-spring';
import { Manipulation } from 'swiper';
import i18n from '../../../i18n';

function MobileMenuList(params) {
	const { x } = useSpring({
		x: params.displayed ? 0 : 10,
	});

	const menu = [
		{
			num: '01',
			anchor: 'jazz',
			title: 'Джаз',
		},
		{
			num: '02',
			anchor: 'chess',
			title: 'Шахматы',
		},
		{
			num: '03',
			anchor: 'events',
			title: 'События',
		},
		{
			num: '04',
			anchor: 'contacts',
			title: 'Контакты',
		},
	];

	const [clang, setClang] = useState(i18n.language);

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
				{menu.map((el, i) => {
					return (
						<li key={i}>
							<span>{el.num} /</span>
							<a
								href={`#${el.anchor}`}
								onClick={(e) => {
									e.preventDefault();
									params.close();
									const targ = document.querySelector(`#${el.anchor}`);
									targ.scrollIntoView({ behavior: 'smooth', block: 'start' });
								}}
							>
								{el.title}
							</a>
						</li>
					);
				})}
				<li>
					<span>**/</span>
					{clang === 'ru' ? (
						<a
							onClick={() => {
								i18n.changeLanguage('en');
								setClang(i18n.language);
							}}
						>
							ENGLISH VERSION
						</a>
					) : (
						<a
							onClick={() => {
								i18n.changeLanguage('ru');
								setClang(i18n.language);
							}}
						>
							РУССКАЯ ВЕРСИЯ
						</a>
					)}
				</li>
			</ul>
		</animated.div>
	);
}

export default MobileMenuList;
