import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-15'>
            {/* <----left side ----> */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-snug md:leading-snug lg:leading-snug
'>
                    Book Appointment <br /> With trusted Doctors
                </p>
                <div className=' flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-20' src={assets.group_profiles} alt="group_profiles" />
                    <p>
                        Simply browsee through our extensive list of trusted doctors,<br className='hidden sm:block'/> schedule your appointment hassel-free
                    </p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 trasition-all duration-300'>
                    Book Appointment <img className='w-3' src={assets.arrow_icon}></img>
                </a>
            </div>
            {/* <----- right side ----> */}
            <div className='md:w-1/2 relative'>
               <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img}></img>
            </div>

        </div>
    )
}

export default Header
