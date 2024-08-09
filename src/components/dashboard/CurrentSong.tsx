import React from 'react'
import currentsong from '../../../public/playlistsong.png'
import Image from 'next/image'
const CurrentSong = () => {
  return (
    <div className=' w-full h-full flex'>
        <Image src={currentsong} alt="currentsong"/>
    </div>
  )
}

export default CurrentSong