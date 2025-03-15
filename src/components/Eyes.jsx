import React, { useEffect, useState } from 'react'
import eyesBg from '../assets/eyes-bg.jpg'

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle-180);

      // Subtle movement for black div (reduced by factor of 20)
      setPosition({
        x: deltaX / 20,
        y: deltaY / 20
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array since we don't have any dependencies

  return (
    <div className='eyes w-full h-screen overflow-hidden relative'>
      <div data-scroll data-scroll-speed="-.7" className='w-full h-full' style={{backgroundImage: `url(${eyesBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>
            <div className='w-[13vw] h-[13vw] bg-white flex items-center justify-center rounded-full'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center' 
                     style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
                    <span className='text-white font-bold absolute z-10'>PLAY</span>
                    <div className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7' style={{transform: `rotate(${rotate}deg)`}}>
                        <div className='w-7 h-7 rounded-full bg-white'></div>
                    </div>
                </div>
            </div>
            <div className='w-[13vw] h-[13vw] bg-white flex items-center justify-center rounded-full'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center'
                     style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
                    <span className='text-white font-bold absolute z-10'>PLAY</span>
                    <div className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7' style={{transform: `rotate(${rotate}deg)`}}>
                        <div className='w-7 h-7 rounded-full bg-white'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
