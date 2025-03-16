import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

function Cards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const controls = useAnimation();
  
  // Track cursor for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial animation sequence
    controls.start('visible');
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);
  
  // Variants for staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const cardVariants = {
    hidden: { 
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotateY: 45
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };
  
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)"
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.6 + (i * 0.2),
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.97]
      }
    })
  };
  
  // Custom hover variants for each card
  const getCardHoverVariant = (index) => {
    switch(index) {
      case 0: // Explore card
        return {
          scale: 1.05,
          rotateY: 5,
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
          transition: { duration: 0.4 }
        };
      case 1: // Engage card
        return {
          scale: 1.05,
          rotateX: 5,
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
          background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
          transition: { duration: 0.4 }
        };
      case 2: // Achieve card
        return {
          scale: 1.05,
          rotateZ: 2,
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
          background: "linear-gradient(135deg, #14b8a6 0%, #84cc16 100%)",
          transition: { duration: 0.4 }
        };
      default:
        return {};
    }
  };
  
  // Card data for cleaner JSX
  const cards = [
    { 
      id: "explore", 
      className: "w-full h-full", 
      text: "EXPLORE", 
      textClass: "font-bold text-[20vh]" 
    },
    { 
      id: "engage", 
      className: "w-1/2 h-full", 
      text: "ENGAGE", 
      textClass: "font-semibold text-[10vh]" 
    },
    { 
      id: "achieve", 
      className: "w-1/2 h-full", 
      text: "ACHIEVE", 
      textClass: "font-light text-[10vh]" 
    }
  ];

  return (
    <motion.div 
      ref={containerRef}
      className='w-full h-[120vh] bg-black flex items-center px-20 gap-5 -mt-[10vh] overflow-hidden relative'
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.5, 0.1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Main explore card */}
      <motion.div 
        className='cardcon h-[50vh] w-1/2'
        variants={cardVariants}
      >
        <motion.div 
          className='card rounded-xl w-full h-full flex items-center justify-center bg-gray-900 backdrop-blur-md border border-indigo-500/20 overflow-hidden relative'
          whileHover={getCardHoverVariant(0)}
          style={{
            boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.2)",
            background: "linear-gradient(145deg, rgba(31, 41, 55, 0.4), rgba(55, 65, 81, 0.1))",
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
              x: useTransform(() => mousePosition.x * 0.02 - 10),
              y: useTransform(() => mousePosition.y * 0.02 - 10),
            }}
          />
          <motion.h1 
            className={`${cards[0].textClass} bg-clip-text text-transparent relative z-10`}
            variants={textVariants}
            custom={0}
            style={{
              backgroundImage: "linear-gradient(to right, #818cf8, #d946ef)",
            }}
          >
            {cards[0].text}
          </motion.h1>
        </motion.div>
      </motion.div>
      
      {/* Engage and Achieve cards */}
      <div className='cardcon flex gap-5 w-1/2 h-[50vh]'>
        {cards.slice(1).map((card, index) => (
          <motion.div 
            key={card.id}
            className={`card rounded-xl ${card.className} flex items-center justify-center bg-gray-900 backdrop-blur-md border border-blue-500/20 overflow-hidden relative`}
            variants={cardVariants}
            whileHover={getCardHoverVariant(index + 1)}
            style={{
              boxShadow: index === 0 
                ? "0px 10px 30px rgba(59, 130, 246, 0.2)" 
                : "0px 10px 30px rgba(20, 184, 166, 0.2)",
              background: index === 0
                ? "linear-gradient(145deg, rgba(30, 58, 138, 0.4), rgba(37, 99, 235, 0.1))"
                : "linear-gradient(145deg, rgba(15, 118, 110, 0.4), rgba(6, 95, 70, 0.1))",
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: index === 0
                  ? "radial-gradient(circle at center, rgba(59, 130, 246, 0.4) 0%, transparent 70%)"
                  : "radial-gradient(circle at center, rgba(20, 184, 166, 0.4) 0%, transparent 70%)",
                x: useTransform(() => mousePosition.x * 0.03 * (index === 0 ? -1 : 1)),
                y: useTransform(() => mousePosition.y * 0.03 * (index === 0 ? -1 : 1)),
              }}
            />
            <motion.h1 
              className={`${card.textClass} bg-clip-text text-transparent relative z-10`}
              variants={textVariants}
              custom={index + 1}
              style={{
                backgroundImage: index === 0
                  ? "linear-gradient(to right, #60a5fa, #06b6d4)"
                  : "linear-gradient(to right, #2dd4bf, #a3e635)"
              }}
            >
              {card.text}
            </motion.h1>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Cards;