import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Trends from '../components/Trends';

const MainPage = () => {
  return (
    <div className="flex min-h-screen bg-pink- text-white">
      <Sidebar className="w-1/5 xl:w-1/4 md:w-1/3" />
      <Feed className="w-3/5 xl:w-1/2 border-x border-gray-800 md:w-1/3" />
      <Trends className="w-1/5 xl:w-1/4 hidden lg:block md:w-1/3" />
    </div>
  );
};

export default MainPage;