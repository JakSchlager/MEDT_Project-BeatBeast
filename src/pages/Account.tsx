import { ButtonHTMLAttributes } from 'react';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdPassword, MdMail } from 'react-icons/md';
import { AiTwotonePhone} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import { User } from '../type/User' 



function Account() {
  const[user, setUser] = useState<User|null>(null);
  
  useEffect(() => {
      const getUser = async () => {
        const res = await fetch('/api/GetUser.php');        
        const data = await res.json();
        console.log(data);
        let myUser = new User(data["id"],data["username"], data["email"], data["password"], data["phoneNr"], data["profilePic"]); 
        setUser(myUser);        
      };

      getUser();
  }, []);
  
  return (
      <div className='bg-neutral-900 h-screen relative z-20 overflow-hidden'>

          <form action="http://localhost/Uebungen/Sommersemester/MEDT_Project-BeatBeast_Backend/api/addProfilePic.php" method="POST" encType='multipart/from-data' className="relative text-center top-24">
              <div className="relative mx-auto cursor-pointer bg-gradient-to-b overflow-hidden from-red-600 hover:bottom-1 hover:shadow-lg hover:shadow-red-600 duration-200 rounded-full md:h-40 md:w-40">
                <div className='absolute w-40 h-40 flex justify-center items-center'>

                  <input id='file-input' name='profilePicture' type="file" accept='image/*'/>
                        
                </div>
              </div>

              <div className='relative p-10 text-2xl grid w-full top-2'>
                <tbody className="border-solid border-transparent relative rounded-md flex justify-center">
                  <div className='grid gap-8 relative right-10'>
                    <tr className="relative w-100 p-8 pb-16 grid bg-neutral-800 rounded-2xl hover:shadow-lg hover:shadow-red-600 hover:bottom-0.5 duration-150">
                      <FaUserAlt color='white' className='w-full' size="2vw"/>
                      <td className='text-gray-400 relative text-center w-full top-2 text-3xl'>Username</td>
                      <input type="text" name='updateUsername' value={user && user.getName()} className='rounded-md relative top-6 p-2 text-gray-400' readOnly/>
                    </tr>
                  
                    <tr className='relative w-100 p-8 pb-14 grid bg-neutral-800 rounded-2xl hover:shadow-lg hover:shadow-red-600 hover:bottom-0.5 duration-150'>
                      <MdMail color='white' className='w-full' size="2vw"/>
                      <td className='text-gray-400 relative text-center w-full top-2 text-3xl'>E-Mail</td>
                      <input type="text" name='updateEmail' value={user && user.getEmail()} className='rounded-md relative top-6 p-2 text-gray-400' readOnly/>
                    </tr>
                  </div>
                  

                  <div className='h-full w-1 border-solid border-gray-700 border-l rounded'></div>

                  <div className='grid gap-8 relative left-10'>
                    <tr className='relative w-100 p-8 pb-14 grid bg-neutral-800 rounded-2xl hover:shadow-lg hover:shadow-red-600 hover:bottom-0.5 duration-150'>
                      <MdPassword color='white' className='w-full' size="2.5vw"/>
                      <td className='text-gray-400 relative text-center w-full top-2 text-3xl'>Password</td>
                      <input type="password" name='password' value={user && user.getPassword()}  className='rounded-md relative top-6 p-2 text-gray-400' readOnly/>
                    </tr>

                    <tr className='relative w-100 p-8 pb-14 grid bg-neutral-800 rounded-2xl hover:shadow-lg hover:shadow-red-600 hover:bottom-0.5 duration-150'>
                      <AiTwotonePhone color='white' className='w-full' size="2.2vw"/>
                      <td className='text-gray-400 relative text-center w-full top-2 text-3xl'>Phonenumber</td>
                      <input type="text" name='updatedPhoneNr' value={user && user.getPhoneNr()} className='rounded-md relative top-6 p-2 text-gray-400' readOnly/>
                    </tr>
                  </div>
                </tbody>
              </div>

              <input type="submit" name='submit' value="Confirm Changes" className='relative top-10 cursor-pointer text-white text-2xl bg-neutral-800 hover:bg-#202020 hover:text-gray-300 hover:-mt-0.5 hover:shadow-2xl duration-150 p-2 border-solid rounded-2xl'/>

            </form>
      </div>
  )
}

export default Account