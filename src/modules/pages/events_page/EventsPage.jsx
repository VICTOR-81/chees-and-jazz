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
            <div className="events__content-items__wrapper active">
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
                      <a href="https://www.elle.ru/stil-zhizni/events/shakhmaty-eto-modno-gosti-brancha-chess-and-jazz-v-dukhe-italyanskoi-rivery/">Перейти на сайт</a>
                    </div>
                  </div>
                  <div className="events__content-items__text">
                  Chess & Jazz Brunch состоялся 22 августа в одном из самых красивых мест столицы - Императорском яхт клубе. На один день гости события перенеслись в атмосферу итальянской ривьеры. Мы танцевали под алматинский джаз M’Dee и звуки трубы от Антохи MC, слушали песни морю Тоси Чайкиной и двигались в такт с Untone Chernov и Oudima. Чемпион Европы Эрнесто Инаркиев провел сеанс одновременной игры в шахматы, а затем сыграли блиц-турнир. Получился прекрасный день!
                  </div>
              </div>
            </div>
//////////////////////////////////////////////////////////////////////////////////////////////////            
            <div className="events__content-items__item">
              <div>Chess & Jazz Brunch 2020</div>
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
                      <span>13 сентября 2020</span>
                      <span>Москва</span>
                    </div>
                    <div className="events__content-items__link">
                      <a href="https://www.buro247.ru/news/lifestyle/14-sep-2020-royal-studio-brunch-chess-jaz.html?gallery=180669&slide=5">Перейти на сайт</a>
                    </div>
                  </div>
                  <div className="events__content-items__text">
                  Первый Chess & Jazz Brunch стартовал 13 сентября 2020 года в атмосферном дворе пространства Royal Studio на Малой Ордынке. Хедлайнером шахматно-джазовой встречи стал Леван Горозия, который представил новый альбом “Рассвет”. Дресс-код дня preppy style тщательно был соблюден всем гостями события. Танцевали и играли в шахматы почти что до самого утра.
                  </div>
              </div>
            </div>
//////////////////////////////////////////////////////////////////////////////////////////////////////////////            
            <div className="events__content-items__item">
              <div>Партия IV</div>
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
                      <span>12 декабря 2019</span>
                      <span>Москва</span>
                    </div>
                    <div className="events__content-items__link">
                      <a href="https://www.buro247.ru/news/lifestyle/13-dec-2019-party-chess-and-jazz.html?gallery=180218&slide=1">Перейти на сайт</a>
                    </div>
                  </div>
                  <div className="events__content-items__text">
                  Первый Chess & Jazz Brunch стартовал 13 сентября 2020 года в атмосферном дворе пространства Royal Studio на Малой Ордынке. Хедлайнером шахматно-джазовой встречи стал Леван Горозия, который представил новый альбом “Рассвет”. Дресс-код дня preppy style тщательно был соблюден всем гостями события. Танцевали и играли в шахматы почти что до самого утра.
                  </div>
              </div>
            </div>
/////////////////////////////////////////////////////////////////////////////////////////////////            
            <div className="events__content-items__item">
              <div>Партия III</div>
              <div>
                <img src={plus} alt="" />
                <img src={minus} alt="" />
              </div>
            </div>
            <div className="events__content-items__wrapper active">
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
                      <span>18 июля 2019</span>
                      <span>Москва</span>
                    </div>
                    <div className="events__content-items__link">
                      <a href="https://www.cosmo.ru/lifestyle/news/18-07-2019/shahmatnaya-vecherinka-partiya-lll-v-preddverie-festivalya-chess-and-jazz/">Перейти на сайт</a>
                    </div>
                  </div>
                  <div className="events__content-items__text">
                  Официальной пре-пати к фестивалю Chess & Jazz 2019 стала Партия III. Место действия - веранда и внутренний оазис ресторана Blanc в Хохловском переулке. В главных ролях - Zoloto и Gayana. 
                  </div>
              </div>
            </div>

            <div className="events__content-items__item">
              <div>Партия II</div>
              <div>
                <img src={plus} alt="" />
                <img src={minus} alt="" />
              </div>
            </div>
            <div className="events__content-items__wrapper active">
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
                      <span>12 декабря 2019</span>
                      <span>Москва</span>
                    </div>
                    <div className="events__content-items__link">
                      <a href="https://www.cosmo.ru/lifestyle/news/18-07-2019/shahmatnaya-vecherinka-partiya-lll-v-preddverie-festivalya-chess-and-jazz/">Перейти на сайт</a>
                    </div>
                  </div>
                  <div className="events__content-items__text">
                  Однажды вас спросят, что вы любите больше - играть в шахматы или ходить на концерты? И вы ответите - Партию, потому что она собирает душевных шахматных оппонентов и джазменов в одном месте. Партия II прошла при поддержке неаполитанского бренда ISAIA в Петровском Пассаже, который в этот вечер был закрыт специально для наших гостей. Сергей Карякин провел блиц турнир перед концертом очаровательной джазовой певицы из Италии Francesca Tandoi. Владелец бренда и член семьи ISAIA Джанлука Исайя с удовольствием поддержал концепцию шахматно-джазовых вечеринок и, приехав в Москву, пообщался со всеми гостями за коктейлем. 
                  </div>
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