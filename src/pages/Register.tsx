import React from "react";
import { AiOutlineLock } from "react-icons/ai";
import { NavLink } from 'react-router-dom'

export default function LoginRegister() {
    return (
        <div>
            <img className="absolute z-50 bg-cover h-screen w-screen" src="/img/backgroundimage.png" alt="" />
            <div className="min-h-screen">
                <div className="absolute bg-white h-screen w-screen z-40 brightness-75 top-0 left-0 opacity-30"></div>
                <div className="container mx-auto relative z-50 top-40">
                    <div className="flex flex-col lg:flex-row h-108 rounded-lg mx-auto shadow-2xl overflow-hidden backdrop-blur-xl">

                    <div className="w-full lg:w-1/2 ml-5 flex flex-col items-center justify-center  bg-no-repeat bg-cover bg-centerl">
                        <img className="border-solid rounded-lg shadow-2xl bg-no-repeat bg-cover bg-center mr-5" src="/img/logo.png"/>
                    </div>

                    <div className="w-full lg:w-1/2 py-16 px-12 shadow-2xl">
                        <h1  className="text-4xl mb-4 text-white">Sign Up</h1>
                        <p className="text-white mb-4">
                        Want to feel the Beast in You
                        </p>
                        <form action="http://localhost/Uebungen/Sommersemester/MEDT_Project-BeatBeast_Backend/api/Register.php" method="post">
                            <div className="">
                                <input type="text" placeholder="Username" name="username" className="border border-gray-400 py-1 px-2 w-full rounded-md"/>
                            </div>

                            <div className="mt-5">
                                <input type="email" placeholder="Email" name="email" className="border border-gray-400 py-1 px-2 w-full rounded-md"/>
                            </div>
                            <div className="mt-5">
                                <input type="password" placeholder="Password" name="password1" className="border border-gray-400 py-1 px-2 w-full rounded-md"/>
                            </div>
                            <div className="mt-5">
                                <input type="password" placeholder="Confirm Password" name="password2" className="border border-gray-400 py-1 px-2 w-full rounded-md"/>
                            </div>
                            <div className="mt-5">
                                <input type="checkbox" className="border border-gray-400"/>
                                <span className="ml-2 text-white">
                                I accept the <a href="#" className="text-red-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-red-500 font-semibold">Privacy Policy</a> 
                                </span>
                            </div>
                            <div className="mt-20 ">
                                <input type="submit" name="submit" placeholder="Registrieren" className="w-full shadow-xl cursor-pointer text-2xl px-84 bg-red-600 hover:bg-red-700 duration-150 py-3 text-center text-white border-solid rounded"></input>
                            </div>
                        </form>

                        <h1 className="text-white text-lg text-center mt-10">Already have an Account? <NavLink className="text-red-600 hover:underline duration-150" to={"/login"}>Klick me!</NavLink></h1>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}