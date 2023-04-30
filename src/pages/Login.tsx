import React from "react";
import { AiOutlineLock } from "react-icons/ai";
import { NavLink } from 'react-router-dom'

export default function LoginRegister() {
    return (
        <div>
            <img className="absolute z-50 bg-cover h-screen w-screen" src="/img/backgroundimage.png" alt="" />
            <div className="min-h-screen">
                <div className="absolute h-screen w-screen z-40 top-0 left-0"></div>
                <div className="container mx-auto relative z-50 top-40">
                    <div className="flex flex-col lg:flex-row h-108 rounded-lg mx-auto shadow-2xl overflow-hidden backdrop-blur-xl">

                    <div className="w-full lg:w-1/2 py-16 px-12 shadow-2xl">
                        <h1  className="text-4xl mb-4 text-white">Sign In</h1>
                        <p className="text-white mb-4">
                        Want to feel the Beast in You
                        </p>
                        <form action="http://localhost/Uebungen/Sommersemester_Projek/MEDT_Project-BeatBeast_Backend/api/Connection.php" method="post">
                            <input type="text" name="text"></input>
                            <input type="submit" placeholder="senden"></input>
                            <div className="mt-5">
                                <input type="text" placeholder="Email or Username" className="border border-gray-400 py-1 px-2 w-full rounded-md"/>
                            </div>
                            <div className="mt-5">
                                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full rounded-md"/>
                            </div>
                            <div className="mt-5 flex">
                                <input type="checkbox" className="border border-gray-400"/>
                                <span className="text-white ml-2 flex">
                                Remember me!
                                </span>
                            </div>
                            <div className="mt-20">
                                <NavLink to={"/home"} className="w-full shadow-xl px-85 bg-red-600 hover:bg-red-700 duration-150 py-3 text-center text-white text-2xl border-solid rounded">Login</NavLink>
                            </div>

                            <h1 className="text-white text-lg text-center mt-10">Don't have an Account yet? <NavLink className="text-red-600 hover:underline duration-150" to={"/"}>Klick me!</NavLink></h1>

                        </form>
                        
                        </div>                    
                        

                        <div className="w-full lg:w-1/2 ml-5 flex flex-col items-center justify-center  bg-no-repeat bg-cover bg-centerl">
                        <img className="border-solid rounded-lg shadow-2xl bg-no-repeat bg-cover bg-center mr-5" src="/img/logo.png"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}