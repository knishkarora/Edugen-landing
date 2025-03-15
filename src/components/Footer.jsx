import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-32 h-[45vh] bg-white flex gap-5 px-10'>
         <div className='w-1/2 h-full mt-2'>
             <h1 className='text-7xl font-bold'>Edu-</h1>
             <h1 className='text-7xl font-bold'>Genious</h1>
             <p className='font-light text-xl mt-2'>The Hyper-Local, AI-Driven Learning Universe</p>
         </div>
         <div className='w-1/2 flex gap-5'>
             <div className='w-1/2 h-full'>
                 <div className='links mt-5'>
                     <a className='block text-xl font-light' href="#">Features</a><div className='w-full border-t-[1px] border-zinc-800'></div>
                     <a className='block text-xl font-light' href="#">About Us</a><div className='w-full border-t-[1px] border-zinc-800'></div>
                     <a className='block text-xl font-light' href="#">Contact</a><div className='w-full border-t-[1px] border-zinc-800'></div>
                     <a className='block text-xl font-light' href="#">Privacy Policy</a><div className='w-full border-t-[1px] border-zinc-800'></div>
                 </div>
             </div>
             <div className='w-1/2 h-full'>
             <div className='links mt-5'>
                     <a className='block text-xl font-light' href="#">Twitter</a><div className='w-full border-t-[1px] border-zinc-800'></div>
                     <a className='block text-xl font-light' href="#">Facebook</a><div className='w-full border-t-[1px] border-zinc-800'></div>
                     <a className='block text-xl font-light' href="#">Instagram</a><div className='w-full border-t-[1px] border-zinc-800'></div>
                     <a className='block text-xl font-light' href="#">LinkedIn</a><div className='w-full border-t-[1px] border-zinc-800'></div>
                 </div>
             </div>
         </div>
    
    </div>
  )
}

export default Footer
