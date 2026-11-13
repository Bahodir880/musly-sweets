
import React from 'react'
import rasm2 from '../assets/rasm2.jpg'
import rasm3 from '../assets/rasm3.jpg'
import rasm4 from '../assets/rasm4.jpg'
import rasm5 from '../assets/rasm5.jpg'
import rasm7 from '../assets/rasm7.jpg'
import rasm8 from '../assets/rasm8.jpg'
import rasm9 from '../assets/rasm9.jpg'
import rasm10 from '../assets/rasm10.jpg'
import rasm19 from '../assets/rasm19.jpg'
import Footer from '../companents/Footer'
import { Link, } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-white px-5 pt-6">

        <div className="mb-8 flex items-center gap-4">
          <div className="h-[2px] flex-1 bg-[#e8ad55]"></div>
          <h2 className="whitespace-nowrap text-2xl font-semibold text-black md:text-3xl">
            Art Desertlar
          </h2>
          <div className="h-[2px] flex-1 bg-[#e8ad55]"></div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img src={rasm2} alt="" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
            </div>
            <div className='ml-4'>
              <span className='text-[18px] text-black font-bold'>Narxi</span>
              <h3 className=" text-xl font-bold text-pink-900">55 000 сум</h3>
            </div>

            <div className='bg-pink-200 rounded-2xl p-4 mt-4'>
              <h3>Tarkibi</h3>
              <p>Основа из нежнейшего чиза и из начинка из натуральной вишни покрытия из натурального Бельгийского шоколада</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
              <img src={rasm3} alt="" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
            </div>
            <div className='ml-4'>
              <span className='text-[18px] text-black font-bold'>Narxi</span>
              <h3 className=" text-xl font-bold text-pink-900">55000 сум</h3>
            </div>

            <div className='bg-pink-200 rounded-2xl p-4 mt-4'>
              <h3>Tarkibi</h3>
              <p>Основа из чиза начинка из натуральной голубики покрытия из бельгийского шоколада</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
              <img src={rasm4} alt="" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
          </div>
          <div className='ml-4'>
            <span className='text-[18px] text-black font-bold'>Narxi</span>
            <h3 className=" text-xl font-bold text-pink-900">55 000 сум</h3>
          </div>

          <div className='bg-pink-200 rounded-2xl p-4 mt-4'>
            <h3>Tarkibi</h3>
            <p>Основа из чиза начинка из натуральной манго маракуя покрытия из Белгийского шоколада</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img src={rasm5} alt="" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
          </div>
          <div className='ml-4'>
            <span className='text-[18px] text-black font-bold'>Narxi</span>
            <h3 className=" text-xl font-bold text-pink-900">55 000 сум</h3>
          </div>

          <div className='bg-pink-200 rounded-2xl p-4 mt-4'>
            <h3>Tarkibi</h3>
            <p>Основа из чиза начинка из малины покрытия из бельгийского шоколада</p>
          </div>
          <div>
            <Link to="/more" className="group mx-auto flex w-[160px] items-center justify-center rounded-2xl border border-[#D4A64A] bg-pink-950 px-5 py-3 text-2xl font-bold text-white shadow-lg shadow-[#123C2F]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#F1CD79] hover:bg-pink-950 hover:text-[#F1CD79] hover:shadow-xl active:translate-y-0 mr-2 mt-4" >   Yana </Link>
          </div>

        </div>

      </div>


      <div className="mb-8 mt-12 flex items-center gap-4">
        <div className="h-[2px] flex-1 bg-[#e8ad55]"></div>
        <h2 className="whitespace-nowrap text-2xl font-semibold text-black md:text-3xl">
          To'rtlar
        </h2>
        <div className="h-[2px] flex-1 bg-[#e8ad55]"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img src={rasm7} alt="" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
          </div>
          <div className='ml-4'>
            <span className='text-[18px] text-black font-bold'>Narxi</span>
            <h3 className=" text-xl font-bold text-pink-900">220 000 sum</h3>
          </div>

          <div className='bg-pink-200 rounded-2xl p-4 mt-4'>
            <h3>Tarkibi</h3>
            <p>Хрустящий безе Марожный крем малиновый начинка</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-[#ffefd6]">
            <img src={rasm8} alt="" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
          </div>
          <div className='ml-4'>
            <span className='text-[18px] text-black font-bold'>Narxi</span>
            <h3 className=" text-xl font-bold text-pink-900">60000 sum</h3>
          </div>

          <div className='bg-pink-200 rounded-2xl p-4 mt-4'>
            <h3>Tarkibi</h3>
            <p>Un, tuxum, sut, kakao</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img src={rasm9} alt="" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
          </div>
          <div className='ml-4'>
            <span className='text-[18px] text-black font-bold'>Narxi</span>
            <h3 className=" text-xl font-bold text-pink-900">60000 sum</h3>
          </div>

          <div className='bg-pink-200 rounded-2xl p-4 mt-4'>
            <h3>Tarkibi</h3>
            <p>Un, tuxum, sut, kakao</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-square overflow-hidden rounded-[20px] bg-gray-100">
            <img src={rasm19} alt="" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
          </div>
          <div className='ml-4'>
            <span className='text-[18px] text-black font-bold'>Narxi</span>
            <h3 className=" text-xl font-bold text-pink-900">300 000 sum</h3>
          </div>

          <div className='bg-pink-200 rounded-2xl p-4 mt-4 '>
            <h3>Tarkibi</h3>
            <p>Пропитанный бискивит Нежнейший Марожный крем</p>
          </div>

                  <Link to="/cake" className="group mx-auto flex w-[160px] items-center justify-center rounded-2xl border border-[#D4A64A] bg-pink-950 px-5 py-3 text-2xl font-bold text-white shadow-lg shadow-[#123C2F]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#F1CD79] hover:bg-pink-950 hover:text-[#F1CD79] hover:shadow-xl active:translate-y-0 mr-2 mt-4" >   Yana </Link>

        </div>

      </div>

    </div>
  )
}

export default Home
