import React from "react";

import imgchess from '../../../assets/images/heap/2018-07-07_15-13-37_AG (1) 1.png';
import imgautor from '../../../assets/images/heap/2019-07-26_19-20-39_GORSHENIN 1.png'
import asterisk from '../../../assets/icons/star.svg';
import './chees_page_mobile.scss';

function ChessPageMobile() {

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
                        <span>ШАХМАТЫ ШАХМАТЫ&nbsp;</span>
                    </div>
                    <div class="jazz-marquee jazz-marquee_white jazz-marquee2">
                        <span>ШАХМАТЫ ШАХМАТЫ&nbsp;</span>
                    </div>
                </div>

                <div class="chess_acordion_m">
                    <div class="chess_acordion_items ">
                        <div class="chess_acordion_item_t">
                            <div class="item_name">CHESS SCHOOL</div>
                            <div class="item_icon">
                                <div class="item_icon_h"> </div>
                                <div class="item_icon_v"> </div>
                            </div>
                        </div>
                        <div class="chess_acordion_item_b">
                            <div class="chess_img_m">
                                <img src="assets/images/2018-07-07_15-13-37_AG (1) 1.png" alt="" />
                            </div>
                            <div class="chess_events_info_m">
                                <div class="chess_event_date_m">
                                    <p>31 июля</p>
                                    <p>14:00 - 20:00</p>
                                </div>
                                <div class="chess_event_info_m">
                                    <div class="chess_event_author_m">
                                        <img src="assets/images/2019-07-26_19-20-39_GORSHENIN 1 (1).png" alt="" />
                                        <p>Сергей Карякин</p>
                                    </div>
                                    <div class="chess_event_content_m">
                                        <p>Здесь гости фестиваля получат</p>
                                        <p> возможность сыграть шахматную </p>
                                        <p>партию бок о бок с гроссмейстерами</p>
                                        <p>мирового уровня.</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chess_acordion_items active">
                        <div class="chess_acordion_item_t">
                            <div class="item_name">CHESS SCHOOL</div>
                            <div class="item_icon">
                                <div class="item_icon_h"> </div>
                                <div class="item_icon_v"> </div>
                            </div>
                        </div>
                        <div class="chess_acordion_item_b">
                            <div class="chess_img_m">
                                <img src={imgchess} alt="" />
                            </div>
                            <div class="chess_events_info_m">
                                <div class="chess_event_date_m">
                                    <p>31 июля</p>
                                    <p>14:00 - 20:00</p>
                                </div>
                                <div class="chess_event_info_m">
                                    <div class="chess_event_author_m">
                                        <img src={imgautor} alt="" />
                                        <p>Сергей Карякин</p>
                                    </div>
                                    <div class="chess_event_content_m">
                                        <p>Здесь гости фестиваля получат</p>
                                        <p> возможность сыграть шахматную </p>
                                        <p>партию бок о бок с гроссмейстерами</p>
                                        <p>мирового уровня.</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chess_acordion_items ">
                        <div class="chess_acordion_item_t">
                            <div class="item_name">CHESS SCHOOL</div>
                            <div class="item_icon">
                                <div class="item_icon_h"> </div>
                                <div class="item_icon_v"> </div>
                            </div>
                        </div>
                        <div class="chess_acordion_item_b">
                            <div class="chess_img_m">
                                <img src="assets/images/2018-07-07_15-13-37_AG (1) 1.png" alt="" />
                            </div>
                            <div class="chess_events_info_m">
                                <div class="chess_event_date_m">
                                    <p>31 июля</p>
                                    <p>14:00 - 20:00</p>
                                </div>
                                <div class="chess_event_info_m">
                                    <div class="chess_event_author_m">
                                        <img src="assets/images/2019-07-26_19-20-39_GORSHENIN 1 (1).png" alt="" />
                                        <p>Сергей Карякин</p>
                                    </div>
                                    <div class="chess_event_content_m">
                                        <p>Здесь гости фестиваля получат</p>
                                        <p> возможность сыграть шахматную </p>
                                        <p>партию бок о бок с гроссмейстерами</p>
                                        <p>мирового уровня.</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chess_acordion_items ">
                        <div class="chess_acordion_item_t">
                            <div class="item_name">CHESS SCHOOL</div>
                            <div class="item_icon">
                                <div class="item_icon_h"> </div>
                                <div class="item_icon_v"> </div>
                            </div>
                        </div>
                        <div class="chess_acordion_item_b">
                            <div class="chess_img_m">
                                <img src="assets/images/2018-07-07_15-13-37_AG (1) 1.png" alt="" />
                            </div>
                            <div class="chess_events_info_m">
                                <div class="chess_event_date_m">
                                    <p>31 июля</p>
                                    <p>14:00 - 20:00</p>
                                </div>
                                <div class="chess_event_info_m">
                                    <div class="chess_event_author_m">
                                        <img src="assets/images/2019-07-26_19-20-39_GORSHENIN 1 (1).png" alt="" />
                                        <p>Сергей Карякин</p>
                                    </div>
                                    <div class="chess_event_content_m">
                                        <p>Здесь гости фестиваля получат</p>
                                        <p> возможность сыграть шахматную </p>
                                        <p>партию бок о бок с гроссмейстерами</p>
                                        <p>мирового уровня.</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

  );

};

export default ChessPageMobile;