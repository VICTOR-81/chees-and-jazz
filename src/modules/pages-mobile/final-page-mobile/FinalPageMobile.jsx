import React from "react";

import './final_page_mobile.scss';
import asterisk from '../../../assets/icons/star.svg';

function FinalPageMobile() {

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


            <div class="m-content">

                <div class="m_header_final"> CHESS & JAZZ</div>
                <div class="m_map">
                    {/* <div style=" -webkit-filter: grayscale(100%);
                    filter: grayscale(100%) brightness(50%)  invert(100%) ; ">
                      <iframe width="379" height="384" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAfRf7lhEW-d2KhGHKllTc-AXKwiHIB10E&q=Сад+Эрмитаж&zoom=15" allowfullscreen>
                      </iframe> 
                    </div> */}
                </div>
                <div class="m_socials-content">
                    <div class="m_socials-place">
                        <p> 30—31 июля 2022</p>
                        <p> Фестиваль шахмат и джаза </p>
                        <p>Москва, сад «Эрмитаж»</p>
                    </div>
                    <div class="m_socials_mail"> INFO@CHESSANDJAZZ.COM</div>
                    <div class="m_socials-copy"> &copy;&nbsp;2022. Все права защищены</div>
                    <div class="m_socials-icons">
                        <button class="socials__btn"><img src="assets/icons/instainst.svg" alt="" /></button>
                        <button class="socials__btn"> <img src="assets/icons/vkvk.svg" alt="" /></button>
                        <button class="socials__btn"><img src="assets/icons/youtubeyt.svg" alt="" /></button>
                    </div>
                </div>
              </div>
            </div>

  );

};

export default FinalPageMobile;