import React from 'react'
import { FaXTwitter }  from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className='bg-[#af652c]  flex justify-between p-10'>

      <div ><ul>
      <li className='text-2xl'>Pets</li>
      <li> <a href="">Find a pet</a></li> 
       <li><a href="">Have a pet</a></li> 
        <li><a href="">Adopt a pet</a></li>
          <li><a href="">sell a pet</a></li>
        </ul></div>

      <div className=''> <ul>
        <li className='text-2xl'>Socials Links</li>
        <li className='flex ' > <FaXTwitter/> <a href="https://x.com"> twitter</a></li>
        <li className='flex p-1'> <FaGithub></FaGithub><a href="https://github.com">Github</a></li>
        <li className='flex p-1'> <IoLogoInstagram/> <a href="">Instagram</a></li>
        
        
        </ul>
        </div>

      <div> <ul>
        <li className='text-2xl'>Our Organization</li>
        <li><a href="">Find my Dog</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
           </ul>
      </div>
      <div className='bg-[#aa794f] m-4 p-3 rounded-xl  flex-col '>
        Sign up for out newsletter
       <ul> <li > <input type="mail"  className='rounded-xl p-2 my-4' placeholder='enter email...'/></li>
       <li className='text-center '>< button className='bg-[#7B3F00] px-2 rounded-lg'>Send</button></li>
       </ul>
           
       
      </div>
    </footer>
  )
}

export default Footer
