const AddDog = ({name , age , breed ,weight,color, temperament,vaccination_status } ) => {
    return (
      <div className='rounded-lg shadow-md bg-[#65350F] '>
          <h1 className='text-4xl '> Your dog detials</h1>
          <h1 className='text-2xl'> Name: {name}</h1>
          <h1 className='text-2xl'> Age: {age}</h1>
          <h1 className='text-2xl'> Breed: {breed}</h1>
          <h1 className='text-2xl'> Weight: {weight}</h1>
          <h1 className='text-2xl'> Color: {color}</h1>
          <h1 className='text-2xl'> Temperment: {temperament}</h1>
          <h1 className='text-2xl'> vaccination-status: {vaccination_status}</h1>
  
          
       </div>
    )
  }
  
  export default AddDog