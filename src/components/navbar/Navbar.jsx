import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0,scale:0.5}} 
                animate={{opacity:1,scale:1}}
                transition={{duration:0.5}}
            >
                Frontend Dev
            </motion.span>
            <div className="social">
                <a href="https://www.facebook.com/lawmsangi.varte/" target="_blank" rel="noopener noreferrer"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/acaciacodes?igsh=MWxndzViM3Jpcnlmcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.youtube.com/channel/UCnV00wwMfHR3gRnHORnDRXw" target="_blank" rel="noopener noreferrer"><img src="/youtube.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/lawmsangi-varte/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
