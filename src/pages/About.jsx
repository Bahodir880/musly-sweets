import React from 'react'

import rasm25 from '../assets/rasm25.jpg'
import rasm26 from '../assets/rasm26.jpg'
import rasm27 from '../assets/rasm27.jpg'
import rasm28 from '../assets/rasm28.jpg'
import rasm35 from '../assets/rasm35.jpg'

const About = () => {
    return (
        <div className="min-h-screen bg-[#fffaf8] px-4 py-10 md:px-10">

           
<div className='bg-pink-900 text-white p-4 sm:p-6 md:p-10 rounded-3xl flex flex-col md:flex-row gap-6 md:gap-8'>
    <div className='w-full md:w-1/2 mt-4 md:mt-10 lg:mt-20'>
      <p className='text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
        Art Dessert sovg'a to'plamlarining eng muhim jihatlaridan biri — ularning o'ziga xos dizaynidir. Shirinliklar ranglar uyg'unligi asosida tanlanib, atlas lentalar, dekorativ gullar, maxsus yozuvlar va nafis qadoqlar bilan bezatiladi. Har bir to'plam insonning didi, xohishi va sovg'a qilinadigan tadbirga mos ravishda tayyorlanishi mumkin.

        Bunday shirinliklar tug'ilgan kun, yubiley, to'y, unashtiruv, nikoh marosimi, 8-mart, Yangi yil, Sevishganlar kuni va boshqa bayramlar uchun ajoyib sovg'a hisoblanadi. Shuningdek, Art Dessert to'plamlarini onajonlar, opa-singillar, do'stlar, ustozlar, hamkasblar va yaqin insonlarga sovg'a qilish mumkin.
      </p>
    </div>
    <div className='w-full md:w-1/2'>
      <img className='rounded-2xl w-full h-64 sm:h-96 md:h-full md:min-h-[450px] object-cover' src={rasm35} alt="" />
    </div>
</div>
        

            <div className="mb-10 flex items-center gap-4">
                <div className="h-[2px] mt-10 flex-1 bg-[#e8ad55]"></div>

                <h2 className="whitespace-nowrap mt-10 text-2xl font-bold text-pink-900 md:text-3xl">
                    Sovg'a uchun to'plamlar
                </h2>

                <div className="h-[2px] mt-10 flex-1 bg-[#e8ad55]"></div>
            </div>





            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


                <div className="group cursor-pointer overflow-hidden rounded-3xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[20px] bg-[#ffefd6]">
                        <img
                            src={rasm25}
                            alt=""
                            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
                        />
                    </div>

                    <div className="ml-2 mt-4">
                        <h3 className="text-xl font-bold text-pink-900">

                        </h3>
                        <span className="text-[18px] font-bold text-gray-600">
                            Narxi
                        </span>
                        <p className="text-2xl font-bold text-pink-900">
                            255 000 сум
                        </p>
                    </div>


                </div>


                <div className="group cursor-pointer overflow-hidden rounded-3xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[20px] bg-[#ffe4ec]">
                        <img
                            src={rasm26}
                            alt=""
                            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
                        />
                    </div>

                    <div className="ml-2 mt-4">
                        <h3 className="text-xl font-bold text-pink-900">

                        </h3>
                        <span className="text-[18px] font-bold text-gray-600">
                            Narxi
                        </span>
                        <p className="text-2xl font-bold text-pink-900">
                            395 000 сум
                        </p>
                    </div>


                </div>


                <div className="group cursor-pointer overflow-hidden rounded-3xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[20px] bg-gray-100">
                        <img
                            src={rasm27}
                            alt=""
                            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
                        />
                    </div>

                    <div className="ml-2 mt-4">
                        <h3 className="text-xl font-bold text-pink-900">

                        </h3>
                        <span className="text-[18px] font-bold text-gray-600">
                            Narxi
                        </span>
                        <p className="text-2xl font-bold text-pink-900">
                            515 000 сум
                        </p>
                    </div>


                </div>


                <div className="group cursor-pointer overflow-hidden rounded-3xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[20px] bg-gray-100">
                        <img
                            src={rasm28}
                            alt=""
                            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
                        />
                    </div>

                    <div className="ml-2 mt-4">
                        <h3 className="text-xl font-bold text-pink-900">

                        </h3>
                        <span className="text-[18px] font-bold text-gray-600">
                            Narxi
                        </span>
                        <p className="text-2xl font-bold text-pink-900">
                            355 000 сум
                        </p>
                    </div>

                </div>
            </div>
             <div className="mt-16 text-center ">
                    <p className="text-xl font-bold text-pink-900 md:text-2xl">
                        Har bir desert — o‘ziga xos san’at asari!
                    </p>
                    <p className="mt-3 text-gray-500">
                        Shirin lahzalaringizni biz bilan yanada go‘zal qiling.
                    </p>
                </div>
        </div>
    )
}

export default About
