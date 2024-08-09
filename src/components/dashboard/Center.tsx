import React from 'react'
import Navigation from './Navigation'
import Banner from './Banner'
import Suggestion from './Suggestion'

const Center = () => {
  return (
    <div className='flex flex-col'>
        <Navigation/>
        <Banner/>
        <Suggestion/>
    </div>
  )
}

export default Center