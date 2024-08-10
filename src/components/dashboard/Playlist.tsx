import React from "react";
import Image from "next/image";
import profile from "../../../public/austin-neill-hgo1wfpxl3i-unsplash.jpg";
import notification from "../../../public/notification-svgrepo-com.svg";
import downarrow from "../../../public/down-arrow-5-svgrepo-com (1).svg";
import playlist from "../../../public/1546.png";
import MusicCard from "./MusicCard";
const Playlist = () => {
  const recentlyPlayed = [
    {
      image: playlist,
      title: "Bones",
      artist: "Imagine Dragons",
      timeAgo: "4 min ago",
    },
    {
      image: playlist,
      title: "Bones",
      artist: "Imagine Dragons",
      timeAgo: "4 min ago",
    },
    {
      image: playlist,
      title: "Bones",
      artist: "Imagine Dragons",
      timeAgo: "4 min ago",
    },
    {
      image: playlist,
      title: "Bones",
      artist: "Imagine Dragons",
      timeAgo: "4 min ago",
    },
    {
      image: playlist,
      title: "Bones",
      artist: "Imagine Dragons",
      timeAgo: "4 min ago",
    },
    {
      image: playlist,
      title: "Bones",
      artist: "Imagine Dragons",
      timeAgo: "4 min ago",
    },
  ];
  return (
    <div className="bg-[#0a0a0a] h-full w-full py-8 px-6 pb-10">
      <div className="flex justify-between items-center">
        <Image src={profile} className="h-10 w-10 rounded-full" alt="logo" />
        <div>
          <div className="flex gap-2">
            <Image src={notification} alt="notification" />
            <Image src={downarrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end mt-4">
          <h1 className="text-white text-xl font-bold">Recently Played</h1>
          <button className="text-gray-400 text-sm font-semibold">
            See all
          </button>
        </div>
      <div className="overflow-scroll no-scrollbar overflow-x-hidden">
        <div className="flex flex-col text-white h-[250px]">

          {recentlyPlayed.map((item, index) => (
              <MusicCard
              key={index}
              image={item.image}
              title={item.title}
              artist={item.artist}
              timeAgo={item.timeAgo}
              
              />
            ))}
            </div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <h1 className="text-white text-xl font-bold">My Playlist</h1>
          <button className="text-gray-400 text-sm font-semibold">
            See all
          </button>
        </div>
        <div className="overflow-scroll no-scrollbar overflow-x-hidden text-white">
        <div className="flex flex-col text-white h-[250px]">
          {recentlyPlayed.map((item, index) => (
            <MusicCard
              key={index}
              image={item.image}
              title={item.title}
              artist={item.artist}
              timeAgo={item.timeAgo}
            />
          ))}
          </div>
        </div>
      <button className="bg-white rounded-xl font-extrabold px-6 py-2 flex justify-center text-center w-full mt-4">
        Create New Playlist
      </button>
    </div>
  );
};

export default Playlist;
