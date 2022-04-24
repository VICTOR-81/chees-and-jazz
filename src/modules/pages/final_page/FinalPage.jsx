import React from 'react';

import './page_styles/final.scss';

function FinalPage(params) {

  return (

    <div className={params.child === true ? 'container final-cont child' : 'container final-cont'}>

    
            {/* <nav class="nav-container">

                <button class=""><img src="assets/icons/close-lightmenu-cross.svg" alt="" /></button>
                <button class=""><img src="assets/icons/menu-darkmenubutton.svg" alt="" /></button>
                <div class="socials-container">
                    <button class="socials__btn"><img src="assets/icons/instainst.svg" alt="" /></button>
                    <button class="socials__btn"> <img src="assets/icons/vkvk.svg" alt="" /></button>
                    <button class="socials__btn"><img src="assets/icons/youtubeyt.svg" alt="" /></button>
                </div>
            </nav> */}

            <div class="final-content">
                <div class="jazz-content__top final-content-top">


                    <div class="main-title">CHESS & JAZZ</div>

                    <div class="jazz-right">
                        <div class="buy-ticket">
                            <div class="marquee-w">
                                <div class="marquee marquee1">
                                    <span class="marquee13">КУПИТЬ БИЛЕТ КУПИТЬ БИЛЕТ КУПИТЬ БИЛЕТ &nbsp;&nbsp;</span>
                                </div>
                                <div class="marquee marquee2">
                                    <span class="marquee23">КУПИТЬ БИЛЕТ КУПИТЬ БИЛЕТ КУПИТЬ БИЛЕТ &nbsp;&nbsp;</span>
                                </div>
                            </div>
                            <div class="marquee-w mar2">
                                <div class="marquee marquee1 mar23">
                                    <span class="marquee13">КУПИТЬ БИЛЕТ КУПИТЬ БИЛЕТ КУПИТЬ БИЛЕТ &nbsp;&nbsp;</span>
                                </div>
                                <div class="marquee marquee2 mar23">
                                    <span class="marquee23">КУПИТЬ БИЛЕТ КУПИТЬ БИЛЕТ КУПИТЬ БИЛЕТ &nbsp;&nbsp;</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="final-content__bot">
                    {/* <!-- <div class="jazz-right">
                        <div class="jazz__sponsor">
                            <p> 30—31 июля 2022</p>
                            <p> Фестиваль шахмат и джаза </p>
                            <p> Москва, сад «Эрмитаж»</p>
                        </div>
                    </div> --> */}

                    {/* <!-- <div class="final_map">
                        <div style=" -webkit-filter: grayscale(100%);
                        filter: grayscale(100%) brightness(50%)  invert(100%) ; "> <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5534.113945273314!2d37.605156036174236!3d55.770565992726034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0YHQsNC0INGN0YDQvNC40YLQsNC2!5e0!3m2!1sru!2sru!4v1645356152850!5m2!1sru!2sru"
                                width="980" height="380" style="border:0;" allowfullscreen="" loading="lazy"></iframe> </div>
                    </div> --> */}
                    {/* <div class="final_map">
                        <div style=" -webkit-filter: grayscale(100%);
                            filter: grayscale(100%) brightness(50%)  invert(100%) ; "> <iframe width="980" height="380" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAfRf7lhEW-d2KhGHKllTc-AXKwiHIB10E&q=Сад+Эрмитаж&zoom=15" allowfullscreen>
    </iframe> </div>
                    </div> */}

                    {/* <!-- <div class="final_map">
                        <div style=" -webkit-filter: grayscale(100%);
                            filter: grayscale(100%) brightness(50%)  invert(100%) ; "> <iframe src="https://www.google.com/maps/d/embed?mid=1-DnAORzObdiUXc9mmud86l969c4TAABO&ehbc=2E312F" width="980" height="380" frameborder="0" style="border:0"></iframe> </div>
                    </div> --> */}
                    <div class="final__info">
                        <div class="final-date">
                            <p> 30—31 июля 2022</p>
                            <p> Фестиваль шахмат и джаза </p>
                            <p>Москва, сад «Эрмитаж»</p>
                        </div>
                        <div class="final_copyright">
                            <p> &copy;&nbsp;2022. Все права защищены</p>
                            <p>info@chessandjazz.com</p>
                        </div>
                    </div>


                </div>

            </div>

            </div>

  );

};

export default FinalPage;