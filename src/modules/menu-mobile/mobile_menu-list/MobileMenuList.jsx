import React from "react";
import './mobile_menu-list.scss';

function MobileMenulist() {

  return(
<div className="mobilemenu__list">
  <ul>
    <li><span>01 /</span><a href="">Джаз</a></li>
    <li><span>02 /</span><a href="">Шахматы</a></li>
    <li><span>03 /</span><a href="">Лекторий</a></li>
    <li><span>04 /</span><a href="">Гастрономия</a></li>
    <li><span>05 /</span><a href="">Архив событий</a></li>
    <li><span>06 /</span><a href="">Партнеры</a></li>
  </ul>
</div>
  );
};

export default MobileMenulist;