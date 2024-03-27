import React from 'react'
import './hero.scss'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y:10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220% ",
    transition: {
      duration: 20,
      repeat: Infinity,
    },
  },
  scrollButton: {
    opacity: 0,
    y:10,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",  
      duration: 2,
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div 
          className="textContainer" 
          variants={textVariants} 
          initial="initial" 
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Lawmsangi Varte</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
           <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio">See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img 
            variants={textVariants} 
            src="/scroll.png" alt="scrollButton" 
            animate="scrollButton"
          />
        </motion.div>
      </div>

      <motion.div 
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/mypic.png" alt="hero" />
      </div>
    </div>
  )
}

export default Hero