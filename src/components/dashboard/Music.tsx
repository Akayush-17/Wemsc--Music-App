import React from 'react'
import Sidebar from './Sidebar'
import Playlist from './Playlist'
import Player from './Player'
import Center from './Center'

const Music = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

    <div className='flex flex-row'>
        <Sidebar/>
        <div className='w-[60%] flex'>

        <Center/>
        </div>
        <Playlist/>
    </div>
    <Player/>
    </div>
  )
}

export default Music