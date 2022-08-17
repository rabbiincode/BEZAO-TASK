import { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Sidebar from '../sidebar/Sidebar';

const Header = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
   }

   let nav

   if (open) {
     nav =
       <div className='fixed bg-white top-0 left-0 w-full h-full z-50'>
         <Sidebar open={open} setOpen={setOpen}/>
       </div>
   }

  return (
    <div className='header flex justify-between pl-5 pr-5 items-center pt-4 pb-4 shadow-lg lg:justify-around lg:pl-0 lg-:pr-0'>

      <div className='flex items-center'>
        <img 
          src='./1.png' 
          alt='img' 
          width={40} 
          height={40}
          className='cursor-pointer object-contain'
        />
        <span className='text-xl font-bold pl-1'>Meals</span>
      </div>

      <div className='list'>
        <li className='space-x-8 hidden lg:flex'>
          <ul className='text-red-500'>
            <span className='border-b-4 border-red-500'>H</span>ome
          </ul>
          <ul>Menu</ul>
          <ul>Meal Plans</ul>
        </li>
      </div>

      <div className='flex items-center'>
        <div className='flex space-x-7'>
          <FiSearch style={{fontSize:'22px'}} className='hidden text-black lg:flex'/>
          <AiOutlineShoppingCart style={{fontSize:'22px'}} className='flex text-black'/>
        </div>
        <div className='hidden ml-14 lg:flex'>Sign In</div>
      

        <div>
          <button className='p-2 pl-4 pr-4 bg-[#ff0707] rounded-3xl text-white hidden ml-14 lg:flex'>Create Account</button>
        </div>

        <div className="hamburger flex pl-3 lg:hidden " onClick={handleClick}>
          <FiMenu style={{fontSize:'25px'}} className='text-black'/>
          {nav}
        </div>
      
      </div>
    </div>
  )
}

export default Header