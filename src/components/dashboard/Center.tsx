import React from 'react'
import Navigation from './Navigation'
import Banner from './Banner'
import Suggestion from './Suggestion'
interface PlaylistProps {
  handlePlaylistClick: () => void;
  handleSidebarClick:() => void;

}
const Center: React.FC<PlaylistProps> = ({ handlePlaylistClick, handleSidebarClick}) => {
  return (
    <div className='flex flex-col w-full bg-[#18191b] px-4 md:px-6'>
        <Navigation handleSidebarClick={handleSidebarClick} handlePlaylistClick={handlePlaylistClick}/>
        <div className='overflow-scroll no-scrollbar overflow-x-hidden'>

        <div className='h-[80%]'>

    

        <Banner/>
      
        <Suggestion/>
        </div>
        </div>
    </div>
  )
}

export default Center 