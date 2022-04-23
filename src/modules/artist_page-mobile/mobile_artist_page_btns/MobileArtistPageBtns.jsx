import React from "react";
import './mobile_artist_page_btns.scss'
import arrowleft from '../../../assets/icons/arrow-left.svg'
import arrowright from '../../../assets/icons/arrow-right.svg'
import closebtn from '../../../assets/icons/artist-page-close.svg'

function MobileArtistPageBtns() {

  return(

    <div className="mobileartistpagebtns">
      <button>
        <img src={arrowleft} alt="" />
      </button>
      <button>
        <img src={closebtn} alt="" />
      </button>
      <button>
        <img src={arrowright} alt="" />
      </button>
    </div>

  );

};

export default MobileArtistPageBtns;