import React, { useEffect, useState, useContext } from 'react';

import './page_styles-mobile/start_page-mobile.scss';
// import './page_styles-mobile/logo-mobile.scss';
import './page_styles-mobile/picture-mobile.scss';
// import './page_styles-mobile/authors-mobile.scss';
import './page_styles-mobile/menu-mobile.scss';
// import agutin from '../../../assets/images/heap/Cardagutin.png';
// import jordan from '../../../assets/images/heap/Cardjordan.png';
// import portio from '../../../assets/images/heap/Cardportico.png';
// import dorn from '../../../assets/images/heap/Carddorn.png';
import heading from '../../../assets/icons/H1Chess&Jazz.svg';
// import arrow from '../../../assets/icons/arrow-next.svg';
import asterisk from '../../../assets/icons/star.svg';

import MPSlider from './slider_mp/MPSlider';
import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import { PageContext } from '../../../PageContext';

function StartPageMobile(params) {
  const [page, setPage] = useContext(PageContext);

  return (

    <>
      {/* <div className={params.child === true ? 'container page_split child' : 'container page_split'}> */}
				{/* <div className="left-part">
					<img src={heading} alt="" />
				</div> */}
				{/* <div className="right-part"> */}
					

      <div class="hide mobile-container">
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
            <div class="m-content">
                <div class="m-header">
                  <img src={heading} alt="" />
                </div>
                <div className="main-page__picture">
                  <span>
                    <MPSlider />
                  </span>
                </div>
            </div>
            </div>
            {/* </div> */}
    </>


  );
}

export default StartPageMobile;