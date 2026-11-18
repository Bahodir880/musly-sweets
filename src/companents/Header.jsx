// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import rasm1 from '../assets/rasm.jpg'

// const Header = () => {
//   const linkClass = ({ isActive }) =>
//     `pb-1 border-b-2 transition-colors duration-300 ${
//       isActive
//         ? 'text-amber-300 border-amber-300 font-semibold'
//         : 'text-white border-transparent hover:text-amber-300'
//     }`

//   return (
//     <header className='w-full border-solid bg-pink-900 h-20 flex items-center'>
//       <div className='w-full flex items-center justify-between px-40'>
//         <div className='w-16'>
//           <img className='rounded-full' src={rasm1} alt="" />
//         </div>
//         <nav className='flex gap-10 justify-center text-2xl'>
//           <NavLink to="/" className={linkClass}>Asosiy Sahifa</NavLink>
//           <NavLink to="/Desserts" className={linkClass}>Art Desert</NavLink>
//           <NavLink to="/Cakes" className={linkClass}>Tortlar</NavLink>
//           <NavLink to="/About" className={linkClass}>Naborlar</NavLink>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'
import rasm1 from '../assets/rasm.jpg'

const Header = () => {
  const linkClass = ({ isActive }) =>
    `pb-1 border-b-2 transition-colors duration-300 ${
      isActive
        ? 'text-amber-300 border-amber-300 font-semibold'
        : 'text-white border-transparent hover:text-amber-300'
    }`

  return (
    <header className='w-full border-solid bg-pink-900 h-20 flex items-center'>
      <div className='w-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40'>
        <div className='w-12 sm:w-14 md:w-16 shrink-0'>
          <img className='rounded-full w-full' src={rasm1} alt="" />
        </div>
        <nav className='flex gap-2 sm:gap-4 md:gap-6 lg:gap-10 justify-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl'>
          <NavLink to="/" className={linkClass}>Asosiy Sahifa</NavLink>
          <NavLink to="/Desserts" className={linkClass}>Art Desert</NavLink>
          <NavLink to="/Cakes" className={linkClass}>Tortlar</NavLink>
          <NavLink to="/About" className={linkClass}>Naborlar</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
