import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* <------------left side footer------------> */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque maiores at inventore ipsam id rem, nihil numquam voluptas laborum enim voluptates doloribus, ex ut qui ducimus iusto. Quis, impedit! Error.</p>
        </div>
        {/* <------------Center side footer------------> */}
        <div>
         <p className='text-xl font-medium mb-5'>COMPANY</p>
         <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li> Privacy policy</li>
         </ul>
        </div>

        {/* <------------Right side footer------------> */}
        <div>
           <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-222-333-4445</li>
            <li>riteshkumar@gmail.com</li>
           </ul>
        </div>

      </div>
      <div>
      <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2023. All rights reserved by Ritesh Kumar</p>
      </div>

    </div>
  )
}

export default Footer
