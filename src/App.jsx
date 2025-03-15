import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Landingabout from './components/Landingabout'
import Eyes from './components/Eyes'
import Powerful from './components/Powerful'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Copywrite from './components/Copywrite'
import Loading from './components/Loading'
import Ready from './components/Ready'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Initialize locomotive scroll after loading
    const initScroll = () => {
      const locomotiveScroll = new LocomotiveScroll();
    };

    // Loading duration reduced to 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // Small delay before initializing scroll to ensure smooth transition
      setTimeout(initScroll, 800);
    }, 2000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  const contentVariants = {
    initial: {
      opacity: 0,
      scale: 0.98
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.3
      }
    }
  };

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading ? (
          <Loading key="loader" />
        ) : (
          <motion.div 
            key="content"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            className='w-full'
          >
            <Navbar />
            <Landing />
            <Marquee />
            <Landingabout />
            <Eyes />
            <Powerful />
            <Cards />
            <Ready />
            <Footer />
            <Copywrite />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
