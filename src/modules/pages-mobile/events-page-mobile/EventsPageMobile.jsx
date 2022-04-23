import React from "react";

import './events_page_mobile.scss';
import asterisk from '../../../assets/icons/star.svg';
import eventcard1 from '../../../assets/images/heap/1eventcard.png'

function EventsPageMobile() {

  return(

    <div class="mobile-container mobile-container_white">
            <div class="m-menu">
                <div class="m-menu__btn">
                    <div class="m__btn_top m__btn_top_white"></div>
                    <div class="m__btn_middle m__btn_middle_white"></div>
                    <div class="m__btn_bot m__btn_bot_white"></div>

                </div>
                <div class="m-menu__content m-menu__content_white">
                    <span>30-31 июля 20221</span>
                    <img src={asterisk} alt="" />
                    <span>Сад «Эрмитаж2»</span>
                    <img src={asterisk} alt="" />
                    <span>30-31 июля 20223</span>
                    <img src={asterisk} alt="" />
                    <span>Сад «Эрмитаж»4</span>
                    <img src={asterisk} alt="" />
                    <span>30-31 июля 20225</span>
                </div>
                <div class="m-menu__buy">
                    <p>КУПИТЬ</p>
                    <p>БИЛЕТ</p>
                </div>
            </div>


            <div class="m-content">

                <div class="jazz-marquee-w">
                    <div class="jazz-marquee jazz-marquee_white ">
                        <span>СОБЫТИЯ СОБЫТИЯ&nbsp;</span>
                    </div>
                    <div class="jazz-marquee jazz-marquee_white jazz-marquee2">
                        <span>СОБЫТИЯ СОБЫТИЯ&nbsp;</span>
                    </div>
                </div>

                <div class="m_events-swiper">
                    <div class="events-swiper-pagination">
                        {/* <!-- для наглядности вставленно --> */}
                        <div class="swiper-pagination-bullet-active">2021</div>
                        <div class="swiper-pagination-bullet">2020</div>
                        <div class="swiper-pagination-bullet">2019</div>
                        <div class="swiper-pagination-bullet">2018</div>
                    </div>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="swiper-slide_pic">
                                <div class="swiper-slide_pic_btn"> </div>
                                <img src={eventcard1} alt="" />
                            </div>
                            <div class="swiper-slide_heder">
                                CHESS & JAZZ BRUNCH 2021
                            </div>
                        </div>
                        <div class="swiper-slide_content">
                            <p>Традиционный Brunch, который состоялся 22 августа 2021 в </p>
                            <p> одном из самых красивых мест столицы — Императорском </p>
                            <p> яхт клубе. Один незабываемый день...</p>
                        </div>
                        <div class="swiper-slide_links">
                            <div class="swiper-slide_date">
                                <p>22 августа 2021</p>
                                <p>Москва</p>
                            </div>
                            <div class="swiper-slide_btn">
                                <p>ПЕРЕЙТИ</p>
                                <p>НА САЙТ</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

  );

};

export default EventsPageMobile;