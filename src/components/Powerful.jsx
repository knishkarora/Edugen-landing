import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Powerful() {
    const cards = [
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation()
    ];

    const textPairs = [
        ["Multilingual Support", "Learning Network"],
        ["AI Assistant", "Audio Learning"],
        ["Teacher Dashboard", "Gamified Learning"]
    ];

    const buttonGroups = [
        [["Learn Languages", "Start Course", "View Demo"], ["Join Network", "Explore"]],
        [["Try AI", "Get Started", "Features"], ["Audio Lessons", "Practice"]],
        [["Teacher Login", "Dashboard Demo"], ["Play Now", "Leaderboard", "Rewards"]]
    ];

    const images = [
        "https://images.pexels.com/photos/22710835/pexels-photo-22710835/free-photo-of-hands-holding-book.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/5212697/pexels-photo-5212697.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7943980/pexels-photo-7943980.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4143800/pexels-photo-4143800.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];

    const handleHover = (index) => {
        cards[index].start({y: "0"});
    };

    const handleHoverEnd = (index) => {
        cards[index].start({y: "100%"});
    };
    
  return (
    <div className='w-full py-15'>
      <div className='w-full px-20 border-b-[1px] border-zinc-800 pb-20'>
        <h1 className='text-6xl tracking-tight'>Powerful Features</h1>
      </div>
      {[0, 1, 2].map((section) => (
        <div key={section} className='px-20 mb-32'>
          <div className='cards relative w-full flex mt-10 gap-8'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] w-full'>
                  <h1 className='text-amber-400 font-bold tracking-tight text-8xl uppercase flex overflow-hidden justify-center w-full'>
                    {textPairs[section][0].split("").map((item, index) => (
                      <motion.span 
                        key={index}
                        initial={{y: "100%"}} 
                        animate={cards[section*2]} 
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02}}
                        className='inline-block'
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h1>
                  <h1 className='absolute top-0 left-0 text-amber-400 font-bold tracking-tight text-8xl uppercase flex overflow-hidden justify-center w-full'>
                    {textPairs[section][1].split("").map((item, index) => (
                      <motion.span 
                        key={index}
                        initial={{y: "100%"}} 
                        animate={cards[section*2 + 1]} 
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02}}
                        className='inline-block'
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h1>
              </div>
              <div className='w-1/2'>
                <h3 className='flex items-center gap-2 mb-4 font-mono text-lg tracking-tight text-zinc-600'>
                  <span className='w-2 h-2 rounded-full bg-black'></span>
                  {textPairs[section][0]}
                </h3>
                <motion.div 
                  whileHover={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onHoverStart={() => handleHover(section*2)} 
                  onHoverEnd={() => handleHoverEnd(section*2)} 
                  className='cardcon relative w-full h-[70vh] overflow-hidden rounded-md'
                >
                    <div className='card w-full h-full rounded-md overflow-hidden'>
                        <img 
                            className='w-full h-full object-cover' 
                            src={images[section*2]}
                            alt={textPairs[section][0]}
                        />
                    </div>
                </motion.div>
                <div className='flex gap-4 mt-4'>
                    {buttonGroups[section][0].map((text, index) => (
                        <a 
                            key={index} 
                            href="#" 
                            className='px-4 py-2 border border-black font-mono text-sm rounded-full transition-all duration-300 hover:bg-black hover:text-white'
                        >
                            {text}
                        </a>
                    ))}
                </div>
              </div>
              <div className='w-1/2'>
                <h3 className='flex items-center gap-2 mb-4 font-mono text-lg tracking-tight text-zinc-600'>
                  <span className='w-2 h-2 rounded-full bg-black'></span>
                  {textPairs[section][1]}
                </h3>
                <motion.div 
                  whileHover={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onHoverStart={() => handleHover(section*2 + 1)} 
                  onHoverEnd={() => handleHoverEnd(section*2 + 1)} 
                  className='cardcon relative w-full h-[70vh] overflow-hidden rounded-md'
                >
                    <div className='card relative w-full h-full rounded-md overflow-hidden'>
                        <img 
                            className='w-full h-full object-cover' 
                            src={images[section*2 + 1]}
                            alt={textPairs[section][1]}
                        />
                    </div>
                </motion.div>
                <div className='flex gap-4 mt-4'>
                    {buttonGroups[section][1].map((text, index) => (
                        <a 
                            key={index} 
                            href="#" 
                            className='px-4 py-2 border border-black font-mono text-sm rounded-full transition-all duration-300 hover:bg-black hover:text-white'
                        >
                            {text}
                        </a>
                    ))}
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Powerful
