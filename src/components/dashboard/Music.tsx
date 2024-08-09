import React from 'react'
import Sidebar from './Sidebar'
import Playlist from './Playlist'
import Player from './Player'
import Center from './Center'
import CurrentSong from './CurrentSong'

const Music = () => {
  return (
    <div className='flex relative h-screen flex-col justify-center items-center w-screen'>

    <div className='flex flex-row w-full'>
      <div className='flex w-[20%] flex-col'>

        <Sidebar/>
        <CurrentSong/>
      </div>
        <div className='w-[60%] flex'>

        <Center/>
        </div>
        <div className='flex w-[20%]'>

        <Playlist/>
        </div>
    </div>

    <div className='absolute bottom-0'><Player/></div>
    </div>
  )
}

export default Music