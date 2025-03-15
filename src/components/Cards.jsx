import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-white flex items-center px-20 gap-5'>
       <div className='cardcon h-[50vh] w-1/2'>
            <div className='card rounded-md w-full h-full bg-amber-500'></div>
       </div>
       <div className='cardcon flex gap-5 w-1/2 h-[50vh]'>
            <div className='card rounded-md w-1/2 h-full bg-amber-500'></div>
            <div className='card rounded-md w-1/2 h-full bg-amber-500'></div>
       </div>
    </div>
  )
}

export default Cards
