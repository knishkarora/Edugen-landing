import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className='w-full py-14 rounded-tr-2xl rounded-tl-2xl bg-[#004d45]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          className='flex'
        >
          <h1 className='text-[13vw] uppercase tracking-tighter -mt-5 py-3 leading-none font-semibold text-white flex pr-20'>
            Your Classroom
          </h1>
          <h1 className='text-[13vw] uppercase tracking-tighter -mt-5 py-3 leading-none font-semibold text-white flex pr-20'>
            Your Language
          </h1>
          <h1 className='text-[13vw] uppercase tracking-tighter -mt-5 py-3 leading-none font-semibold text-white flex pr-20'>
            Your Future
          </h1>
          {/* Duplicate set for seamless loop */}
          <h1 className='text-[13vw] uppercase tracking-tighter -mt-5 py-3 leading-none font-semibold text-white flex pr-20'>
            Your Classroom
          </h1>
          <h1 className='text-[13vw] uppercase tracking-tighter -mt-5 py-3 leading-none font-semibold text-white flex pr-20'>
            Your Language
          </h1>
          <h1 className='text-[13vw] uppercase tracking-tighter -mt-5 py-3 leading-none font-semibold text-white flex pr-20'>
            Your Future
          </h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee
