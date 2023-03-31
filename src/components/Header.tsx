import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navigation = [


  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
        <header className='w-full relative z-20'>
            <div className="flex justify-around bg-neutral-800 w-full fixed shadow-2xl">

                <div className="w-full justify-around align-middle flex">
                    <img className="h-16" src="/img/logo.png"/>

                  <div className='w-106 flex justify-between items-center mr-108'>
                    <NavLink className="linkOtherPage" to={"/"}>Home</NavLink>
                    <a className="linkOtherPage" href="#">Search</a>
                    <a className="linkOtherPage" href="#">Bibliothek</a>
                    <a className="linkOtherPage" href="#">Upload</a>
                    <NavLink className="linkOtherPage" to={"login"}>Login</NavLink>
                  </div>

            

            <Menu as="div" className="relative ml-3">
                  <div className='mb-2'>
                    <Menu.Button>
                      <span className="sr-only">Open user menu</span>

                      <div className="w-48 bg-neutral-600 hover:bg-neutral-700 duration-100 pl-4 pb-2 pt-2 border-solid rounded-lg ml-auto mt-2">
                        <a className="flex text-white text-2xl" href="#">
                          <img className="h-8 mr-4" src="/img/user.png"/>
                          Username
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
                    <Menu.Items className="absolute w-60 bg-neutral-600 text-right origin-top-right rounded-md mt-0  -ml-12 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-neutral-700' : '', 'rounded-t block px-20 py-3 text-xl text-white duration-200')}
                          >
                            Account
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-neutral-700' : '', 'block px-20 py-3 text-xl text-white duration-200')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <hr></hr>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-neutral-700' : '', 'rounded-b block px-20  py-3 text-xl pl-2 text-red-500 duration-200')}
                          >

                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                </div>
          </div>
        </header>
    )
}