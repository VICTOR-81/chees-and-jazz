import React, { useEffect, useState, useContext } from 'react';

// import './page_styles/jazz_cards.scss';
// import './page_styles/jazz_marquee.scss';
// import './page_styles/jazz_chess-btn.scss';
// import './page_styles/jazz.scss';

import arrow from '../../../assets/icons/arrow-next.svg';
import artist2 from '../../../assets/images/heap/Portico_Quartet.png';
import artist1 from '../../../assets/images/heap/image_82.png';
import artist_detail1 from '../../../assets/images/artists/agutin.jpg';
import artist_detail2 from '../../../assets/images/artists/portico-quartet.jpg';
import asterisk from '../../../assets/icons/star.svg';

import './jazz_page_mobile.scss';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
// import ArtistSquare from './artist_square/ArtistSquare';
import ArtistPage from './../../artist_page/ArtistPage';
import { PageContext } from '../../../PageContext';

function JazzPageMobile() {

  return(

    <div class="mobile-container">
            <div class="m-menu">
                <div class="m-menu__btn">
                    <div class="m__btn_top"></div>
                    <div class="m__btn_middle"></div>
                    <div class="m__btn_bot"></div>

                </div>
                <div class="m-menu__content">
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


            <div class="m-content m-content-jazz">

                <div class="jazz-marquee-w">
                    <div class="jazz-marquee ">
                        <span>ДЖАЗ ДЖАЗ ДЖАЗ&nbsp;</span>
                    </div>
                    <div class="jazz-marquee jazz-marquee2">
                        <span>ДЖАЗ ДЖАЗ ДЖАЗ&nbsp;</span>
                    </div>
                </div>

                <div class="m-cards__container">
                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src={artist2} alt="" />
                        </div>
                        <div class="m-card__date">30 июля, 20:00</div>
                        <div class="m-card__name">Jordan Raikey</div>
                    </div>
                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src={artist1} alt="" />
                        </div>
                        <div class="m-card__date">30 июля, 21:00</div>
                        <div class="m-card__name">Леонид Агутин</div>
                    </div>

                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/Portico Quartet.png" alt="" />
                        </div>
                        <div class="m-card__date">31 июля, 19:00</div>
                        <div class="m-card__name">Jordan Raikey</div>
                    </div>
                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/Иван Дорн.png" alt="" />
                        </div>
                        <div class="m-card__date">31 июля, 18:30</div>
                        <div class="m-card__name">Леонид Агутин</div>
                    </div>

                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/image 84.png" alt="" />
                        </div>
                        <div class="m-card__date">30 июля, 20:00</div>
                        <div class="m-card__name">Леонид Агутин</div>
                    </div>
                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/Curtis Harding.png" alt="" />
                        </div>
                        <div class="m-card__date">30 июля, 21:00</div>
                        <div class="m-card__name">Jordan Raikey</div>
                    </div>

                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/image 59.png" alt="" />
                        </div>
                        <div class="m-card__date">31 июля, 19:00</div>
                        <div class="m-card__name">Jordan Raikey</div>
                    </div>
                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/image 75.png" alt="" />
                        </div>
                        <div class="m-card__date">30 июля, 21:00</div>
                        <div class="m-card__name">Леонид Агутин</div>
                    </div>
                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/image 83.png" alt="" />
                        </div>
                        <div class="m-card__date">30 июля, 21:00</div>
                        <div class="m-card__name">Леонид Агутин</div>
                    </div>
                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/image 53.png" alt="" />
                        </div>
                        <div class="m-card__date">30 июля, 20:00</div>
                        <div class="m-card__name">Jordan Raikey</div>
                    </div>
                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/Cory Henry.png" alt="" />
                        </div>
                        <div class="m-card__date">30 июля, 21:00</div>
                        <div class="m-card__name">Леонид Агутин</div>
                    </div>
                    <div class="m-card">
                        <div class="m-card__pic">
                            <img src="assets/images/image 76.png" alt="" />
                        </div>
                        <div class="m-card__date">30 июля, 20:00</div>
                        <div class="m-card__name">Jordan Raikey</div>
                    </div>
                </div>
              </div>
            </div>

  );

}

export default JazzPageMobile;