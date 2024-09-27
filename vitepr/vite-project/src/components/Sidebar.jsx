import React from 'react';
import { Home, Hash, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react';

const SidebarItem = ({ Icon, text }) => (
  <div className="flex items-center space-x-4 p-3 hover:bg-gray-800 rounded-full cursor-pointer">
    <Icon size={24} />
    <span className="hidden md:inline-flex text-xl">{text}</span>
  </div>
);

export default function Sidebar() {
  return (
    <div className="flex flex-col p-2 xl:items-start h-full xl:ml-24">
      <div className="hover:bg-gray-800 rounded-full p-3 w-14 h-14 flex items-center justify-center xl:ml-24">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
        </svg>
      </div>
      
      <SidebarItem Icon={Home} text="Home" />
      <SidebarItem Icon={Hash} text="Explore" />
      <SidebarItem Icon={Bell} text="Notifications" />
      <SidebarItem Icon={Mail} text="Messages" />
      <SidebarItem Icon={Bookmark} text="Bookmarks" />
      <SidebarItem Icon={User} text="Profile" />
      <SidebarItem Icon={MoreHorizontal} text="More" />
      
      <button className="bg-[#1d9bf0] text-white rounded-full py-3 px-8 text-lg font-bold shadow-md hover:bg-[#1a8cd8] mt-5">
        Post
      </button>
    </div>
  );
}