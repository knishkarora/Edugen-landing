import { motion } from 'framer-motion';
import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-white pt-0.5">
      <div data-scroll data-scroll-speed="-0.2" className="textstructure mt-40 px-10">
        {["the hyper-local","ai driven","learning universe"].map((item, index) => {
            return <div key={index} className='masker'>
            <div className='w-fit flex items-center overflow-hidden'>
            {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "10vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1.25}} className='w-[10vw] h-[3.5vw] relative top-1 ml-3 mr-4 rounded-md bg-amber-400'></motion.div>)}
            <h1 className="uppercase text-[5vw] text-6xl font-['Roboto Condensed',sans-serif] leading-[4.5vw] tracking-tighter font-semibold">{item}</h1></div>
        </div>
        })}
      </div>
      <div data-scroll data-scroll-speed="-0.1" className='border-t-[1px] border-zinc-800 mt-[120px] flex justify-between items-center py-3 px-10'>
      {["For every students and teachers","For the smarter tomorrow"].map((item, index) => 
        <p key={index} className='text-md font-light tracking-tighter leading-none'>{item}</p>
      )}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-800 font-light text-md capitalize rounded-full'>start learning</div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-800'><FaLocationArrow /></div>
        </div>
      </div>
    </div>
  )
}

export default Landing 
