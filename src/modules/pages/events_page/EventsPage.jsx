import React, { useContext, useState } from 'react';

import arrow from '../../../assets/icons/arrow-next.svg';
import plus from '../../../assets/icons/plus_icon.svg';
import minus from '../../../assets/icons/minus_icon.svg';
import left_arrow from '../../../assets/icons/left-big-arrow.svg';
import right_arrow from '../../../assets/icons/right-big-arrow.svg';
import eventcard1 from '../../../assets/images/heap/1eventcard.png';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import EventBLock from './event_block/EventBlock';

import { PageContext } from '../../../PageContext';

import './events.scss';
import EventsSlider1 from './events_sliders/EventsSlider1';
import EventsSlider2 from './events_sliders/EventsSlider2';
import EventsSlider3 from './events_sliders/EventsSlider10';
import EventsSlider4 from './events_sliders/EventsSlider4';
import EventsSlider5 from './events_sliders/EventsSlider5';
import EventsSlider6 from './events_sliders/EventsSlider6';
import EventsSlider7 from './events_sliders/EventsSlider7';
import EventsSlider8 from './events_sliders/EventsSlider8';
import EventsSlider9 from './events_sliders/EventsSlider9';
import EventsSlider10 from './events_sliders/EventsSlider10';

const events_2021 = [
	{
		slider: <EventsSlider1 />,
		title: 'Chess & Jazz Brunch 2021',
		date: '22 августа 2021',
		location: 'Москва',
		description: `Chess & Jazz Brunch состоялся 22 августа в одном из самых красивых мест столицы - Императорском яхт клубе. На один день
        гости события перенеслись в атмосферу итальянской ривьеры. Мы танцевали под алматинский джаз M’Dee и звуки трубы от Антохи
        MC, слушали песни морю Тоси Чайкиной и двигались в такт с Untone Chernov и Oudima. Чемпион Европы Эрнесто Инаркиев провел
        сеанс одновременной игры в шахматы, а затем сыграли блиц-турнир. Получился прекрасный день!`,
		link: 'https://www.elle.ru/stil-zhizni/events/shakhmaty-eto-modno-gosti-brancha-chess-and-jazz-v-dukhe-italyanskoi-rivery/',
	},
];

const events_2020 = [
	{
		slider: <EventsSlider5 />,
		title: 'Партия II',
		date: '13 сентября 2020',
		location: 'Москва',
		description: `	Первый Chess & Jazz Brunch стартовал 13 сентября 2020 года в атмосферном дворе пространства Royal Studio на Малой Ордынке.
    Хедлайнером шахматно-джазовой встречи стал Леван Горозия, который представил новый альбом “Рассвет”. Дресс-код дня preppy
    style тщательно был соблюден всем гостями события. Танцевали и играли в шахматы почти что до самого утра.`,
		link: 'https://www.buro247.ru/news/lifestyle/14-sep-2020-royal-studio-brunch-chess-jaz.html?gallery=180669&slide=5',
	},
];

const events_2019 = [
	{
		slider: <EventsSlider3 />,
		title: 'Партия IV',
		date: '12 декабря 2019',
		location: 'Москва',
		description: `Первый Chess & Jazz Brunch стартовал 13 сентября 2020 года в атмосферном дворе пространства Royal Studio на Малой Ордынке.
      Хедлайнером шахматно-джазовой встречи стал Леван Горозия, который представил новый альбом “Рассвет”. Дресс-код дня preppy
      style тщательно был соблюден всем гостями события. Танцевали и играли в шахматы почти что до самого утра.`,
		link: 'https://www.buro247.ru/news/lifestyle/13-dec-2019-party-chess-and-jazz.html?gallery=180218&slide=1',
	},
	{
		slider: <EventsSlider4 />,
		title: 'Партия III',
		date: '18 июля 2019',
		location: 'Москва',
		description: `Официальной пре-пати к фестивалю Chess & Jazz 2019 стала Партия III. Место действия - веранда и внутренний оазис ресторана
    Blanc в Хохловском переулке. В главных ролях - Zoloto и Gayana.`,
		link: 'https://www.cosmo.ru/lifestyle/news/18-07-2019/shahmatnaya-vecherinka-partiya-lll-v-preddverie-festivalya-chess-and-jazz/',
	},
	{
		slider: <EventsSlider5 />,
		title: 'Партия II',
		date: '24 апреля 2019',
		location: 'Москва',
		description: `Однажды вас спросят, что вы любите больше - играть в шахматы или ходить на концерты? И вы ответите - Партию, потому что она
    собирает душевных шахматных оппонентов и джазменов в одном месте. Партия II прошла при поддержке неаполитанского бренда
    ISAIA в Петровском Пассаже, который в этот вечер был закрыт специально для наших гостей. Сергей Карякин провел блиц турнир
    перед концертом очаровательной джазовой певицы из Италии Francesca Tandoi. Владелец бренда и член семьи ISAIA Джанлука Исайя
    с удовольствием поддержал концепцию шахматно-джазовых вечеринок и, приехав в Москву, пообщался со всеми гостями за
    коктейлем.`,
		link: 'https://www.cosmo.ru/lifestyle/stil-zhizni/v-moskve-proshla-vecherinka-partiya-isaia-v-petrovskom-passazhe/',
	},
	{
		slider: <EventsSlider8 />,
		title: 'Chess & Jazz 2019',
		date: '13 декабря 2018',
		location: 'Москва',
		description: `	В 2019 году Chess & Jazz стал масштабнее, но не поменял концепцию. Фестиваль объединил Live от мировых звезд джаза в самом
    центре Москвы и возможность сыграть шахматную партию бок о бок с гроссмейстерами, сохранив главные принципы: импровизацию и
    сочетание культур. В 2019 году фестиваль впервые прошел в формате двух дней: гала-открытие в пятницу вечером и полноценный
    фестивальный день в субботу (все билеты были проданы). На сцене Harman Kardon выступили: Gregory Porter, JMSN, Haelos, Gogo
    Penguin, Zoloto, Gayana и Lrk Trio. Фестиваль стал победителем премии “Все цвета джаза” в номинации “Лучший фестиваль”.`,
		link: 'https://bazaar.ru/heroes/parties/kak-proshel-festival-chess-and-jazz/',
	},
];

const events_2018 = [
	{
		slider: <EventsSlider6 />,
		title: 'Партия I',
		date: '13 декабря 2018',
		location: 'Москва',
		description: `Первая “партийная” встреча состоялась 13 декабря 2018 года в Центральном Доме Шахматиста в компании трехкратного лауреата
    премии Грэмми, основателя легендарной группы Snarky Puppy - Билла Лоурена. Концертом музыкальная часть Партии I не
    ограничилась. В одной из комнат Дома была оборудована джазовая гостиная, где музыкальный журналист Виктор Радзиевский прочел
    лекцию об истории джаза.`,
		link: 'https://www.timeout.ru/msk/feature/481804',
	},
	{
		slider: <EventsSlider7 />,
		title: 'Chess & Jazz 2018',
		date: '13 декабря 2018',
		location: 'Москва',
		description: `Первый фестиваль Chess & Jazz состоялся 7 июля в Саду “Эрмитаж”. Chess & Jazz это событие, где встречаются стиль и
    интеллект. На один день Сад “Эрмитаж” превратился в джазовую гостиную под открытым небом с живой музыкой, шахматными
    турнирами, приятными встречами и расслабленными беседами. Хедлайнером фестиваля стал пятикратный обладатель “Грэмми” Cee Lo
    Green. На одной сцене с ним выступили: Cory Henry & Funk Apostles, Kamaal Williams, Secret Atelier, Антоха MC и Moscow
    Ragtime Band. В Chess Village наши гости смогли сыграть шахматные партии со всемирно известными гроссмейстерами: Сергеем
    Карякиным, Теймуром Раджабовым, Владимиром Поткиным и Эрнесто Инаркиевым. Событие прошло с большим успехом и стало
    победителем премии Event.ru “Лучшая премьера городского ежегодного события”`,
		link: 'https://www.kommersant.ru/doc/3681335',
	},
	{
		slider: <EventsSlider9 />,
		title: 'Chess & Jazz Алматы',
		date: '30 Августа 2019',
		location: 'Алматы',
		description: `30 Августа 2019 г. в Алматы прошел первый за всю историю Казахстана фестиваль интеллектуальной игры и музыки Chess & Jazz на
    Esentai Square по инициативе Esentai Mall и при поддержке одноименной команды из Москвы. Впервые на одну сцену в Алматы
    вышли грузинская певица Нино Катамадзе и исполнитель из Казахстана, артист Zoloto. Весь день для гостей работал лекторий
    CHESSНОЕ СЛОВО. Каждый желающий мог испытать себя в шахматах и сразиться с гроссмейстерами Жансаей Абдумалик и Рустамом`,
		link: 'https://www.buro247.kz/buro-choise/events/kak-proshel-festival-chess-jazz.html',
	},
	{
		slider: <EventsSlider10 />,
		title: 'Chess & Jazz Singapore',
		date: '20 марта 2019',
		location: 'Сингапур',
		description: `Chess & Jazz покорил Сингапур, а Сингапур нас. 20 марта 2019 г. фестиваль Chess & Jazz впервые прошел в Сингапуре при
    поддержке инвестиционного холдинга Altergate. Событие состоялось в уникальном месте, католическом монастыре Chijmes Hall,
    под сводами которого спела и очаровала всех гостей грузинская певица SALIO, победитель Akademia Music Awards 2017.`,
		link: 'https://www.robbreport.com.sg/interview-with-salio-jazz-singer-songwriter-i-was-nine-when-i-wrote-my-first-song/',
	},
];

function EventsPage(params) {
	const contacts = 'КОНТАКТЫ';

	const [pageContext, setPageContext] = useContext(PageContext);
	const [eventYear, setEventYear] = useState(events_2021);

	console.log(pageContext);

	return (
		<div className={params.child === true ? 'container events-cont child' : 'container events-cont'}>
			<div className="events__container">
				<div className="gastronomybox__title-inner">
					<div className="gastronomybox__title">События События&nbsp;</div>
				</div>
				<div className="events__content">
					<div className="events__content-top">
						<div className="events__years">
							<div
								className={eventYear === events_2021 ? 'events__years-item active' : 'events__years-item'}
								onClick={() => {
									setEventYear(events_2021);
								}}
							>
								2021
							</div>
							<div
								className={eventYear === events_2020 ? 'events__years-item active' : 'events__years-item'}
								onClick={() => {
									setEventYear(events_2020);
								}}
							>
								2020
							</div>
							<div
								className={eventYear === events_2019 ? 'events__years-item active' : 'events__years-item'}
								onClick={() => {
									setEventYear(events_2019);
								}}
							>
								2019
							</div>
							<div
								className={eventYear === events_2018 ? 'events__years-item active' : 'events__years-item'}
								onClick={() => {
									setEventYear(events_2018);
								}}
							>
								2018
							</div>
						</div>
						<BtnTicket />
					</div>
					<div
						className="events__content-items"
						onMouseEnter={() => {
							pageContext.setContext('default');
						}}
						onMouseLeave={() => {
							pageContext.setContext('scroll');
						}}
					>
						{eventYear.map((el, i) => {
							return <EventBLock key={i} open_default={i === 0 ? true : false} event_data={el} />;
						})}
					</div>
				</div>
				<div
					className="chess-button2"
					onClick={() => {
						pageContext.swipeForward();
					}}
				>
					<div className="chess-button__content2 ">{contacts}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{contacts}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{contacts}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{contacts}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{contacts}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{contacts}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{contacts}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{contacts}</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">{contacts}</div>
					<img src={arrow} alt="" />
				</div>
			</div>
		</div>
	);
}

export default EventsPage;
