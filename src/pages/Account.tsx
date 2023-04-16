import { ButtonHTMLAttributes } from 'react';
import React from 'react'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { ImUser } from 'react-icons/im'


function Account() {
  return (
    <div className='overflow-hidden'>
        <div className="text-center p-10 py-10 mt-24">
            <h1 className="text-5xl py-2 text-red-600 md:text-6xl">
              Account Overview
            </h1>
            <div className="mx-auto bg-gradient-to-b from-red-600 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <ImUser size="full" color='white'/>
            </div>

            <div className='bg-neutral-800 p-10 text-2xl grid justify-centerw-2/6 text-left'>
              <tbody className="border-solid border-transparent rounded-md">
                <tr className="border-solid border-b-red-600 w-105 flex justify-between">
                  <td className='text-gray-400'>Username</td>
                  <td className='text-gray-200'>*Username From User*</td>
                </tr>

                <tr className='w-105 flex justify-between'>
                  <td className='text-gray-400'>E-Mail</td>
                  <td className='text-gray-200'>*E-Mail Adress from User*</td>
                </tr>

                <tr className='w-105 flex justify-between'>
                  <td className='text-gray-400'>Password</td>
                  <td className='text-gray-200'>*Password from User*</td>
                </tr>
              </tbody>
            </div>

            


            <button className='text-white text-2xl bg-red-600 hover:bg-red-700 duration-150 p-2 border-solid rounded-md'>Confirm Changes</button>
          </div>
    </div>
  
  )
}

export default Account