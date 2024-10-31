import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='grid grid-cols-9 w-full h-[4.5rem] bg-gray-200'>
      {/* Logo and Location Input */}
      <div className="col-span-2 flex items-center justify-center ml-4">
        <div className="mr-2">
          <img src="/olx-logo.png" className='w-[36px] h-[20px] sm:w-[42px] sm:h-[26px]' alt="olx" />
        </div>
        <div className="relative ml-2">
          <IoSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
          <input 
            type="text" 
            className='text-base sm:text-xl pl-10 pr-10 h-[2.5rem] sm:h-[2.9rem] w-[10rem] sm:w-[14rem] border-2 border-green-900 rounded focus:border-teal-300' 
            placeholder='Location' 
          />
          <IoIosArrowDown className="absolute h-5 w-5 sm:h-6 sm:w-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Search Input and Button */}
      <div className="relative col-span-5 flex items-center justify-center">
        <input 
          type="text" 
          placeholder='Find Your product...' 
          className='pl-4 sm:pl-5 text-base sm:text-xl w-[18rem] sm:w-[38rem] pr-10 h-[2.5rem] sm:h-[2.9rem] ms-4 sm:ms-8 border-solid border-2 border-green-900 rounded-l-lg focus:border-double focus:border-sky' 
        />
        <button className='h-[2.5rem] sm:h-[2.9rem] w-[2.5rem] sm:w-[2.7rem] flex items-center justify-center bg-green-950 rounded-r-lg'>
          <FaSearch className='text-white text-lg sm:text-xl' />
        </button>
      </div>

      {/* Language, Login, and Add Button */}
      <div className="relative col-span-2 flex items-center justify-around">
        <div className="font-semibold">
          <p className="text-sm sm:text-base">ENGLISH</p>
          <IoIosArrowDown className="absolute h-5 w-5 sm:h-6 sm:w-6 top-1/2 transform -translate-y-1/2 left-[4rem] sm:left-[5rem]" />
        </div>
        <div className="font-semibold ml-3 sm:ml-6">
          <p className='underline underline-offset-3 text-sm sm:text-base'>Login</p>
        </div>
        <div className="flex items-center justify-center">
          <img className='h-[45px] w-[70px] sm:h-[55px] sm:w-[90px]' src="/addButton.png" alt="Add Button" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
