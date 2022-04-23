import React from "react";
import './mobile_artist_page.scss'
import MobileArtistPageBtns from "./mobile_artist_page_btns/MobileArtistPageBtns";
import MobileArtistProfile from "./mobile_artist_profile/MobileArtistProfile";
import MobileHeader from "./mobile_header/MobileHeader";

function ArtistPageMobile() {

  return(

    <div className="mobileartistpage">
      <MobileHeader />
      <MobileArtistProfile />
      <MobileArtistPageBtns />
    </div>

  );

};

export default ArtistPageMobile;