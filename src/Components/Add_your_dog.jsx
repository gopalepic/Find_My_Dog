import React from 'react'

const Add_your_dog = () => {
  return (
    <div>
       <div className='rounded-lg shadow-md bg-[#65350F] '>
          <h1 className='text-4xl '> Your dog detials</h1>
          <h1 className='text-2xl'> Name: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>
          <h1 className='text-2xl'> Age: <input type="number" className=" bg-[#b38b6d] rounded-xl m-2"  /> </h1>
          <h1 className='text-2xl'> Breed:<input type="text" className=" bg-[#b38b6d] rounded-xl  m-2" />  </h1>
          <h1 className='text-2xl'> Weight: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>
          <h1 className='text-2xl'> Color: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>
          <h1 className='text-2xl'> Temperment: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>
          <h1 className='text-2xl'> vaccination-status: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>
  
          
       </div>
    </div>
  )
}

export default Add_your_dog



