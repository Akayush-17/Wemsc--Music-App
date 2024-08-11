'use client'
import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Playlist from './Playlist'
import Player from './Player'
import Center from './Center'
import CurrentSong from './CurrentSong'
import openmenu from '../../../public/open-line-svgrepo-com.svg'
import Image from 'next/image'
import right from "../../../public/right-2-svgrepo-com.svg";
import logo from "../../../public/Untitled design (6).png";

const Music = () => {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [openPlaylist, setOpenPlaylist] = useState(false);
  const [openSidebar, setSidebar] = useState(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  

  const handlePlay=()=>{
    setPlay(!play)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

    const handleSidebar = () => {
        setOpen(!open)
    }

    const handlePlaylistClick = () => {
      setOpenPlaylist(!openPlaylist)
    }
    const handleSidebarClick = () => {
      setSidebar(!openSidebar)
    }

    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen w-screen bg-black">
          <Image src={logo} className=" animate-bounce h-12 w-12" alt="Loading..." />
        </div>
      );
    }
  return (
    <div className='flex relative h-screen flex-col overflow-y-hidden  w-screen overflow-x-clip'>

    <div className='flex flex-row w-full h-full'>
      <div className={` bg-[#101011] h-full md:block ${openSidebar ? ' w-full absolute top-0 right-0 z-50 block' : 'hidden'} ${open ? 'w-6': 'w-[20%]'}`}>

      <div className={`flex flex-col h-full`}>
        <button  onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} onClick={handleSidebar}>

        <Image src={right} className={`mt-10  ${open ? 'block': 'hidden'}`} alt='open'/>
        </button>
        {isHovered && (
          <div className="absolute top-12 z-50 left-8 bg-gray-700 text-white p-2 rounded shadow-md">
            Toggle Sidebar
          </div>
        )}
        <Sidebar handleSidebarClick={handleSidebarClick}  handleSidebar={handleSidebar}/>
        <CurrentSong />
      </div>
        </div>
        <div className={` flex h-screen ${open ? ' w-full md:w-[80%]' : ' w-full md:w-[60%]'}`}>

        <Center handlePlay={handlePlay} handleSidebarClick={handleSidebarClick} handlePlaylistClick={handlePlaylistClick}/>
        </div>
        <div className={`md:block   ${openPlaylist ? ' w-full absolute top-0 right-0 z-50 block' : 'md:w-[20%] '}`}>

        <div className='flex '>
   
        <Playlist handlePlay={handlePlay} handlePlaylistClick={handlePlaylistClick} />
        </div>
        </div>
    </div>

    <div className='absolute bottom-0'><Player play={play}/></div>
    </div>
  )
}

export default Music