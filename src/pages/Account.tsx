import { ButtonHTMLAttributes } from 'react';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdPassword, MdMail } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';


function Account() {
  return (
      <div className='bg-neutral-900 h-screen relative z-20 overflow-hidden'>
          <div className="relative text-center top-32">
              <div className="relative mx-auto cursor-pointer bg-gradient-to-b overflow-hidden from-red-600 hover:bottom-1 hover:shadow-lg hover:shadow-red-600 duration-200 rounded-full md:h-52 md:w-52">
                <div className='absolute w-52 h-52 flex justify-center items-center'>
                  <FaUserAlt size="5vh" className='absolute' color='black'/>
                </div>
              </div>

              <div className='relative p-10 text-2xl grid w-full top-12'>
                <tbody className="border-solid border-transparent relative rounded-md flex justify-center">
                  <div className='grid gap-8 relative right-10'>
                    <tr className="relative w-100 p-8 pb-16 grid bg-neutral-800 rounded-2xl hover:shadow-lg hover:shadow-red-600 hover:bottom-0.5 duration-150">
                      <FaUserAlt color='white' className='w-full' size="2vw"/>
                      <td className='text-gray-400 relative text-center w-full top-2 text-3xl'>Username</td>
                      <input type="text" placeholder='Username From User' className='rounded-md relative top-6 p-2'/>
                    </tr>
                  
                    <tr className='relative w-100 p-8 pb-14 grid bg-neutral-800 rounded-2xl hover:shadow-lg hover:shadow-red-600 hover:bottom-0.5 duration-150'>
                      <MdMail color='white' className='w-full' size="2vw"/>
                      <td className='text-gray-400 relative text-center w-full top-2 text-3xl'>E-Mail</td>
                      <input type="text" placeholder='Email From User' className='rounded-md relative top-6 p-2'/>
                    </tr>
                  </div>
                  

                  <div className='h-full w-1 border-solid border-gray-700 border-l rounded'></div>

                  <div className='grid gap-8 relative left-10'>
                    <tr className='relative w-100 p-8 pb-14 grid bg-neutral-800 rounded-2xl hover:shadow-lg hover:shadow-red-600 hover:bottom-0.5 duration-150'>
                      <MdPassword color='white' className='w-full' size="2.5vw"/>
                      <td className='text-gray-400 relative text-center w-full top-2 text-3xl'>Password</td>
                      <input type="text" placeholder='Password From User' className='rounded-md relative top-6 p-2' readOnly/>
                    </tr>

                    <tr className='relative w-100 p-8 pb-14 grid bg-neutral-800 rounded-2xl hover:shadow-lg hover:shadow-red-600 hover:bottom-0.5 duration-150'>
                      <AiTwotonePhone color='white' className='w-full' size="2.2vw"/>
                      <td className='text-gray-400 relative text-center w-full top-2 text-3xl'>Phonenumber</td>
                      <input type="text" placeholder='Phonenumber From User' className='rounded-md relative top-6 p-2' readOnly/>
                    </tr>
                  </div>
                </tbody>
              </div>
              
                <button className='relative top-20 text-white text-2xl bg-neutral-800 hover:bg-#202020 hover:text-gray-400 hover:-mt-1 hover:shadow-2xl duration-150 p-2 border-solid rounded-2xl'>Confirm Changes</button>
            
            </div>
      </div>
  )
}

export default Account