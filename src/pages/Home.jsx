import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import firstBack from '../assets/Main.jpg'
import secondBack from '../assets/2.png'
import thirdBack from '../assets/3.png'
import { useSearchParams } from 'react-router-dom'
const Home = () => {


  const [backgroundImageIndex , setBackgroundImagesIndex] = useState(0);
  const images = [
    firstBack,secondBack,thirdBack
  ]

  useEffect(()=>{
    const intervalBtwImages = setInterval(()=>{
      setBackgroundImagesIndex((prevIndex) => (prevIndex + 1) % images.length);
    },2000)

    return()=>clearInterval(intervalBtwImages);
  }, [images.length]);
  return (
    <div>
      <Navbar ></Navbar>

      <div>
       <img src={images[backgroundImageIndex]} className='h-screen w-full object-cover' alt='Slideshow Image'/>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home

