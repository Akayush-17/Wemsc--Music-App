'use client'
import React,{useState} from 'react'
import Navigation from './Navigation'
import Banner from './Banner'
import Suggestion from './Suggestion'
interface PlaylistProps {
  handlePlaylistClick: () => void;
  handleSidebarClick:() => void;
  handlePlay:() =>void;

}
const Center: React.FC<PlaylistProps> = ({ handlePlaylistClick, handleSidebarClick, handlePlay}) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='flex flex-col w-full bg-[#18191b] px-4 md:px-6 '>
        <Navigation searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} handleSidebarClick={handleSidebarClick} handlePlaylistClick={handlePlaylistClick}/>
        <div className='overflow-scroll no-scrollbar overflow-x-hidden'>

        <div className='h-[80%]'>

    

        <Banner/>
      
        <Suggestion handlePlay={handlePlay} searchQuery={searchQuery}/>
        </div>
        </div>
    </div>
  )
}

export default Center 