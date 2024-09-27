import React from 'react';
import { Image, Smile, Calendar } from 'lucide-react';

export default function Feed() {
  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px]">
      <div className="flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
      </div>

      <div className="p-3 flex space-x-3 border-b border-gray-700">
        <img
          src="/api/placeholder/50"
          alt="user-img"
          className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
        />
        <div className="w-full divide-y divide-gray-700">
          <div className="">
            <textarea
              className="w-full border-none focus:ring-0 text-lg placeholder-gray-600 tracking-wide min-h-[50px] text-white bg-transparent"
              rows="2"
              placeholder="What is happening?!"
            ></textarea>
          </div>
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <Image className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
              <Smile className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
              <Calendar className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            </div>
            <button className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default">
              Post
            </button>
          </div>
        </div>
      </div>
      {/* Posts will be added here */}
    </div>
  );
}