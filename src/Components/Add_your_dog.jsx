import React, { useState } from 'react'
import {BreedList} from '../Data/BreedList'
const Add_your_dog = () => {

  const [searchTerm , setSearchTerm] = useState('');
  const [filteredBreeds , setFilteredBreeds]  = useState([]);

  const handleSearch = (event) => {
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);

    if(userInput){
       const filtered = BreedList.filter((breed) => {
      const breedLower = breed.toLowerCase();
      return breedLower.startsWith(userInput) || breedLower.includes(userInput);
    });
  
    const priortizeBreeds = filtered.sort((a,b)=>{
      const aStartWith = a.toLowerCase().startsWith(userInput);
      const bStartWith = b.toLowerCase().startsWith(userInput);
      if(aStartWith && !bStartWith) return -1;
      if(!aStartWith && bStartWith) return 1;
      return 0;
    })

    setFilteredBreeds(priortizeBreeds);
  } else{
      setFilteredBreeds([]);
    }
  };
  return (
    <div>
       <div className='rounded-lg shadow-md bg-[#65350F] '>
          <h1 className='text-4xl '> Your dog detials</h1>
          <h1 className='text-2xl'> Name: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>
          <h1 className='text-2xl'> Age: <input type="number" className=" bg-[#b38b6d] rounded-xl m-2"  /> </h1>
          <h1 className='text-2xl'> Breed: <div> <input type="text" value={searchTerm} onChange={handleSearch}
          className=' bg-[#b38b6d] rounded-xl m-2"'/>
             <ul className='bg-[#4B371C] w-1/5 rounded-xl '>
              {filteredBreeds.map((breed , index) => (
                <li key={index}>{breed}</li>
              )
              )}
             </ul>
          </div> </h1>
          <h1 className='text-2xl'> Weight: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>
          <h1 className='text-2xl'> Color: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>
          <h1 className='text-2xl'> Temperment: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>
          <h1 className='text-2xl'> Vaccination-status: <input type="text" className=" bg-[#b38b6d] rounded-xl m-2" /> </h1>  
       </div>
    </div>
  )
}

export default Add_your_dog

