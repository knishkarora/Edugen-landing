import React from 'react'

function Landingabout() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tr-2xl rounded-tl-2xl'>
      <h1 className='text-[4vw] leading-[4.2vw] pr-[25vw] tracking-tight font-medium'>EduGenius is an AI-powered, hyper-local learning platform that makes quality education accessible anytime, anywhere – even without the internet.</h1>
      
      <div className='w-full border-t-[1px] mt-20 mb-20 border-[#404a1e]'></div>
      
      <div className='w-full flex'>
        <div className='w-1/2'>
          <h2 className='text-[2.5vw] font-medium tracking-tight mb-10'>What you can expect:</h2>
        </div>
        
        <div className='w-1/2 flex gap-10'>
          <div className='w-1/2'>
            <p className='text-xl font-light tracking-tight leading-[1.5] mb-5'>
              Experience a seamless, AI-driven learning platform that delivers hyper-localized content in 50+ languages. 
            </p>
            <p className='text-xl font-light tracking-tight leading-[1.5]'>
              Unlock interactive lessons, real-time peer-to-peer sharing, and smart teacher support—all designed to make education more accessible and engaging!
            </p>
          </div>
          
          <div className='w-1/2'>
            <div className='links flex flex-col'>
              <a className='block text-xl font-light py-2 hover:text-[#404a1e] transition-all duration-300' href="#">Twitter</a>
              <div className='w-full border-t-[1px] border-[#404a1e]'></div>
              
              <a className='block text-xl font-light py-2 hover:text-[#404a1e] transition-all duration-300' href="#">Facebook</a>
              <div className='w-full border-t-[1px] border-[#404a1e]'></div>
              
              <a className='block text-xl font-light py-2 hover:text-[#404a1e] transition-all duration-300' href="#">Instagram</a>
              <div className='w-full border-t-[1px] border-[#404a1e]'></div>
              
              <a className='block text-xl font-light py-2 hover:text-[#404a1e] transition-all duration-300' href="#">LinkedIn</a>
              <div className='w-full border-t-[1px] border-[#404a1e]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingabout
