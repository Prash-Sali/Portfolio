import React, { Component } from 'react'
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

// const icons = [
//   {
//     href: "#",
//     components: <FaLinkedin />
//   },
//   {
//     href: "#",
//     components: <FaGithub />
//   },
//   {
//     href: "#",
//     components: <FaInstagram />
//   },
//   {
//     href: "#",
//     components: <FaXTwitter />
//   },
// ]

const Socialicons = () => {
  return (
    // <div className='flex justify-center md:justify-center space-x-4 mb-6 sm:mb-6'>
    //   {icons.map((icons) => (
    //     <a href={icons.href} className='w-10 h-10 flex items-center justify-center border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.7)]'>{icons.components}</a>
    //   ))}
    // </div>
    <div className="text-3xl flex justify-center md:justify-center space-x-4 mb-6 sm:mb-6">
      <a href="https://www.linkedin.com/in/prashant-sali-8aa0091b6" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-red-500 transition duration-300 group-hover:scale-75 hover:!scale-125"/>
      </a>
      <a href="https://github.com/Prash-Sali" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-red-500 transition duration-300 group-hover:scale-75 hover:!scale-125"/>
      </a>
      <a href="https://www.instagram.com/prashsali_____18/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-red-500 transition duration-300 group-hover:scale-75 hover:!scale-125"/>
      </a>
      <a href="https://x.com/PrashantSa23688" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="hover:text-red-500 transition duration-300 group-hover:scale-75 hover:!scale-125"/>
      </a>
    </div>
  )
}

export default Socialicons
