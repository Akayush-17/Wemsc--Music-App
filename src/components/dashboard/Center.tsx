import React from 'react'
import Navigation from './Navigation'
import Banner from './Banner'
import Suggestion from './Suggestion'

const Center = () => {
  return (
    <div className='flex flex-col w-full bg-[#18191b] px-6'>
        <Navigation/>
        <div className='overflow-scroll no-scrollbar overflow-x-hidden'>

        <div className='h-[660px]'>

    

        <Banner/>
      
        <Suggestion/>
        </div>
        </div>
    </div>
  )
}

export default Center 