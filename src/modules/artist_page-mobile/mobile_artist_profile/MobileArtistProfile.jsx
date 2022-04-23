import React from "react";
import './mobile_artist_profile.scss'
import photoJR from '../../../assets/images/artists/photo-Jordan-Rakei.png'

function MobileArtistProfile() {

  return(

    <div className="mobileartistprofile">
      <div className="mobileartistprofile__img">
        <img src={photoJR} alt="" />
      </div>
      <div className="mobileartistprofile__card">
        <div className="mobileartistprofile__date-wrapper">
          <span className="mobileartistprofile__date">
            30 июля 2022
          </span>
          <span className="mobileartistprofile__time">
            18:30 — 20:15
          </span>
        </div>
        <div className="mobileartistprofile__name">
          Jordan Rakei
        </div>
        <div className="mobileartistprofile__description">
          Новозеландско-австралийский певец, автор песен, продюссер,  совершенно точно Jordan Rakei уникальный
          и особенный музыкант. 30 июля 2022 на Chess & Jazz Вас ждет один из самых долгожданных лайвов.
        </div>
      </div>
    </div>

  );

};

export default MobileArtistProfile;