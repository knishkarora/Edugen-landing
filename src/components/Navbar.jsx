import React, { useState, useEffect, useCallback } from 'react';
import logo from '../assets/edugenius_logo final.png'; // Adjust path as needed

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) { // Only hide after scrolling down 100px
      setShow(false);
    } else {
      setShow(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let timeoutId;
    
    const onScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        controlNavbar();
      }, 100); // Throttle to run every 100ms
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [controlNavbar]);

  return (
    <div className={`fixed z-[999] w-full px-20 py-4 font-["Roboto Condensed"] flex items-center justify-between transition-all duration-500 ease-in-out backdrop-blur-md bg-white/30 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div
        className="logo w-40 h-6 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      <div className='links flex gap-6 items-center'>
        {["Services", "About Us", "Contact", "Sign in"].map((item, index) => (
          <a 
            key={index} 
            className={`relative text-md capitalize font-mono ${index === 3 && "ml-40"} group`}
          >
            {item}
            <span className='absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full'></span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
