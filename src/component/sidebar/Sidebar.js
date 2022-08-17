import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiHome } from 'react-icons/bi'
import { BsMenuButtonWide } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiFoodMenu } from 'react-icons/bi'


const Sidebar = ( {open, setOpen} ) => {

  const handleClick = () => {
    setOpen(!open)
   }

  return (
    <div style={{paddingTop:'8rem'}} className='sidebar relative ml-7 pt-40' onClick={handleClick}>

      <div className='absolute top-4 right-4'>
        <AiOutlineClose style={{fontSize:'25px'}}/>
      </div>

      <div>
        <button className='p-3 pl-4 pr-4 mr-4 bg-[#ff0707] rounded-3xl text-white'>Create Account</button>
        <button className='p-3 pl-4 pr-4 bg-[#fff] rounded-3xl text-black border-2 border-[#ff0707]'>Sign In</button>
      </div>

      <ul className='space-y-8 cursor-pointer'>

        <ii className='flex items-center pt-8'>
          <BiHome style={{fontSize:'25px'}} className='mr-5 cursor-none'/> Home
        </ii>
        <li className='flex items-center'>
          <BsMenuButtonWide style={{fontSize:'22px'}} className='mr-5 cursor-none'/> Menu
        </li>
        <li className='flex items-center'>
          <AiOutlineShoppingCart style={{fontSize:'25px'}} className='mr-5 cursor-none'/> My Tray
        </li>
        <li className='flex items-center opacity-40'>
          <BiFoodMenu style={{fontSize:'25px'}} className='mr-5 cursor-none'/> Meal Plans
        </li>
      </ul>

    </div>
  )
}

export default Sidebar