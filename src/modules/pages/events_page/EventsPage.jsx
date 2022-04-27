import React from 'react';

import arrow from '../../../assets/icons/arrow-next.svg';
import plus from '../../../assets/icons/plus_icon.svg';
import minus from '../../../assets/icons/minus_icon.svg';
import left_arrow from '../../../assets/icons/left-big-arrow.svg';
import right_arrow from '../../../assets/icons/right-big-arrow.svg';
import eventcard1 from '../../../assets/images/heap/1eventcard.png';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';

import './events.scss'

function EventsPage(params) {

  const contacts = 'КОНТАКТЫ';

  return(

    <div className={params.child === true ? 'container events-cont child' : 'container events-cont'}>
     <div className="events__container">
      <div className="gastronomybox__title-inner">
          <div className="gastronomybox__title">
            События События&nbsp;
          </div>
        </div>
        <div className="events__content">
          <div className="events__content-top">
            <div className="events__years">
              <div className="events__years-item active">2021</div>
              <div className="events__years-item">2020</div>
              <div className="events__years-item">2019</div>
              <div className="events__years-item">2018</div>
            </div>
            <BtnTicket />
          </div>
          <div className="events__content-items">
            <div className="events__content-items__item active">
              <div>Chess & Jazz Brunch 2021</div>
              <div>
                <img src={plus} alt="" />
                <img src={minus} alt="" />
              </div>
            </div>
            <div className="events__content-items__wrapper">
              <div className="events__content-items__left">
                  <div className="events__content-items__img">
                    <img src={eventcard1} alt="" />
                    <div className="events__content-items__btn">
                      <button>
                        <img src={left_arrow} alt="" />
                      </button>
                      <button>
                        <img src={right_arrow} alt="" />
                      </button>
                    </div>
                  </div>
              </div>
              <div className="events__content-items__right">
                  <div className="events__content-items__top">
                    <div className="events__content-items__date">
                      <span>22 августа 2021 </span>
                      <span>Москва</span>
                    </div>
                    <div className="events__content-items__link">
                      <a href="">Перейти на сайт</a>
                    </div>
                  </div>
                  <div className="events__content-items__text">
                  Традиционный Brunch, который состоялся 22 августа 2021 в одном из самых красивых мест столицы — Императорском яхт клубе. Один незабываемый день в атмосфере итальянской ривьеры. Начиная с 15:00 играем в шахматы на набережной Москвы реки, танцуем и готовимся к фестивалю Chess & Jazz 2021 под алматинский джаз M’Dee и звуки трубы от Антохи MC, слушаем песни морю Тоси Чайкиной и двигаемся в такт с Untone Chernov и Oudima.
                  </div>
              </div>
            </div>
            <div className="events__content-items__item">
              <div>Chess & Jazz Brunch 2020</div>
              <div>
                <img src={plus} alt="" />
                <img src={minus} alt="" />
              </div>
            </div>
            <div className="events__content-items__item">
              <div>Chess & Jazz Festival 2019</div>
              <div>
                <img src={plus} alt="" />
                <img src={minus} alt="" />
              </div>
            </div>
            <div className="events__content-items__item">
              <div>Chess & Jazz Festival Singapore</div>
              <div>
                <img src={plus} alt="" />
                <img src={minus} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="chess-button2">
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