import React, { useEffect, useState } from 'react'
import './nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 100) {
              handleShow(true);
            } else {
              handleShow(false);
            }
          }
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        // Remove only the specific listener added in this effect
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    

  return (
    
    // <div className={`${show ? 'nav' : 'nav' }nav_`}>
     <div className={`nav ${show && "nav__black"}`}> 
    
        <img 
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158
        " 
        alt="Netflix Logo" />

        <img 
        className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="" />
    </div>
  )
}
// https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/800px-Logonfx.png?20190424232034

//https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940
export default Nav

