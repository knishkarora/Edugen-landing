import React, { useEffect, useState } from 'react'

function Ready() {
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

      setPosition({
        x: deltaX / 20,
        y: deltaY / 20
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='w-full h-[200vh] bg-[#CDEA68] relative overflow-hidden'>
      {/* Background Text */}
      <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full px-20 text-center flex flex-col items-center'>
        <div className='flex flex-col gap-5 max-w-[1600px] mx-auto'>
          <h1 className='text-zinc-900 text-[15vw] md:text-[12vw] leading-[0.9] font-bold tracking-tight'>
            READY
          </h1>
          <h1 className='text-zinc-900 text-[10vw] md:text-[8vw] leading-[0.9] font-bold tracking-tight'>
            TO START
          </h1>
          <h1 className='text-zinc-900 text-[12vw] md:text-[10vw] leading-[0.9] font-bold tracking-tight'>
            LEARNING?
          </h1>
        </div>

        {/* Buttons */}
        <div className='flex items-center gap-8 mt-32'>
          <button className='px-12 py-5 bg-zinc-900 text-white rounded-full text-xl font-medium hover:bg-zinc-800 transition-all duration-200 uppercase tracking-tight'>
            Sign Up Now
          </button>
          <button className='px-12 py-5 border-2 border-zinc-900 text-zinc-900 rounded-full text-xl font-medium hover:bg-zinc-900 hover:text-white transition-all duration-200 uppercase tracking-tight'>
            Explore Features
          </button>
        </div>
      </div>

      {/* Eyes Container - Positioned in front */}
      <div className='absolute top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 z-10'>
        <div className='w-[12vw] h-[12vw] bg-zinc-100 flex items-center justify-center rounded-full'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center' 
               style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
              <span className='text-white font-bold absolute z-10'>PLAY</span>
              <div className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8' 
                   style={{transform: `rotate(${rotate}deg)`}}>
                  <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
              </div>
          </div>
        </div>
        <div className='w-[12vw] h-[12vw] bg-zinc-100 flex items-center justify-center rounded-full'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center'
               style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
              <span className='text-white font-bold absolute z-10'>PLAY</span>
              <div className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8' 
                   style={{transform: `rotate(${rotate}deg)`}}>
                  <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ready
