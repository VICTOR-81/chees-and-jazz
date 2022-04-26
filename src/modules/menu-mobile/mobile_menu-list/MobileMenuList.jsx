import React from "react";

import './mobile_menu-list.scss';

// import { useSpring, animated } from 'react-spring';

function MobileMenulist() {
//   const { x } = useSpring({
// 		x: params.displayed ? 0 : 10,
// 	});

  return(
    // <animated.div className="mobilemenu__list" style={{ left: x.to((x) => `-${x * 10}vw`), position: 'absolute' }}>
    <div className="mobilemenu__list"> 
      <ul>
        <li><span>01 /</span><a href="/jazzmobile">Джаз</a></li>
        <li><span>02 /</span><a href="/chessmobile">Шахматы</a></li>
        {/* <li><span>03 /</span><a href="">Лекторий</a></li> */}
        {/* <li><span>04 /</span><a href="">Гастрономия</a></li> */}
        <li><span>03 /</span><a href="">События</a></li>
        <li><span>04 /</span><a href="/startmobile">Контакты</a></li>
      </ul>
    </div> 
  //  {/* </animated.div> */}
  );
};

export default MobileMenulist;