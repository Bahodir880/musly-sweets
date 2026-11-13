import React from 'react'
import {Link} from 'react-router-dom'
import rasm1 from '../assets/rasm.jpg'

const Header = () => {
    
  return (
    <header className='w-full border-solid bg-pink-900 h-20'>
        <div className='flex items-center align-middle justify-between px-40 mt-4'>
            <div className='w-20'>
                <img className='rounded-full' src={rasm1} alt="" />
            </div>
            <nav className='flex gap-10 justify-center  text-2xl text-white'>
                <Link to="/">Asosiy Sahifa</Link>
                <Link to="/Desserts">Art Desert</Link>
                <Link to="/Cakes">Tortlar</Link>
                <Link to="/About">Naborlar</Link>
            </nav>
            
        </div>
    </header>
  )
}

export default Header
