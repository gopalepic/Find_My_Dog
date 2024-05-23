import React from 'react'
import logo from '../assets/logo.jpg'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = (name) => {

 
    const {user,loginWithRedirect,isAuthenticated,logout} = useAuth0();
  


  return (
    <nav className='w-screen bg-[#aa794f] min-h-[100px] flex justify-between items-center'>
     
        <div className='ml-3'>
             <a href="#" className='text-lg fond-bold text-white flex  '> 
           <img className='w-10 ' src={logo} />
           <span className='text-4xl font-bold text-white hover:bg-[#281518] rounded-md '>
             <style>{`
             @import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
                 body{font-family:'Poetsen One',sans-serif;
                 }
                 `}
             </style>
             Find My Dog
            </span>
          </a>
        </div>


        <div className='flex gap-8 mr-[5%]'>

        <a href="/about " className='hover:bg-[#78340e] rounded-full p-1'> About</a>
        <a href="/add_dog_details" className='hover:bg-[#78340e] rounded-full p-1'>Add my Dog</a>
        <a href="/donate_us" className='hover:bg-[#78340e] rounded-full p-1'>Donate</a>
      
   
        </div>

        <div className='mr-4 hover:bg-[#78340e] rounded-full p-1'>
          <button  className='tracking-wider pr-3' 
          
           onClick={()=>loginWithRedirect()}
          >
            {isAuthenticated ? <div onClick={()=>{logout()}}>
              <div className='border-1 rouneded-full w-9'> {user.name} </div>
                
            </div>:
            <div onClick={()=>loginWithRedirect()}>LogIn</div>
            }

          </button>
        </div>
       
      
      
   
    </nav>
  )
}

export default Navbar
