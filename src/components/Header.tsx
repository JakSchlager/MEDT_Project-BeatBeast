import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { User } from '../type/User'


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const[user, setUser] = useState<User|null>(null);
  
  useEffect(() => {
      const getUser = async () => {
        const res = await fetch('/api/GetUser.php');        
        const data = await res.json();
        console.log(data);
        let myUser = new User(data["id"],data["username"], data["email"], data["password"], data["phoneNr"]); 
        setUser(myUser);        
      };

      getUser();
  }, []);



  return (
    <div className=''>
        <header className='w-full fixed z-30 top-0'>
            <div className="bg-neutral-800/70 backdrop-blur-xl text-white shadow-black shadow-2xl">

                <div className="w-full justify-around align-middle flex">
                    <NavLink className="relative" to={"/home"}>
                      <img className="h-16" src="/img/logo.png"/>
                    </NavLink>

                  <div className='navigationBar'>
                      <NavLink className="linkOtherPage" to={"/home"}>Home</NavLink>
                      <a className="linkOtherPage" href={"/search"}>Search</a>
                      <NavLink className="linkOtherPage" to={"/bibliothek"}>Bibliothek</NavLink>
                  </div>


            <Menu as="div" className="relative ml-3">
                  <div className='accountButton'>
                    <Menu.Button>
                      <span className="sr-only">Open user menu</span>

                      <div className="">
                        <a className="flex text-white text-2xl" href="#">
                          <img className="h-8 mr-4" src="/img/user.png"/>
                          {user && user.getName()}
                        </a>
                      </div>
                    </Menu.Button>

                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-y-0"
                    enterTo="transform opacity-100 scale-y-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 scale-y-100"
                    leaveTo="transform opacity-0 scale-y-0"
                  >
                    <Menu.Items className="absolute w-60 bg-850 text-right origin-top-right rounded-md mt-4 -ml-20 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to={"/account"}
                            className={classNames(active ? 'bg-825' : '', ' rounded-t block px-20 py-3 text-xl text-white duration-200')}
                          >
                            Account
                          </NavLink>
                        )}
                      </Menu.Item>
                      <hr></hr>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to={"/"}
                            className={classNames(active ? 'bg-825' : '', 'rounded-b block px-20  py-3 text-xl pl-2 text-red-500 duration-200')}
                          >

                            Sign out
                          </NavLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                </div>
          </div>
        </header>
      </div>
    )
}
