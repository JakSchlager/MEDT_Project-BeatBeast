import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

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
        <header>
            <div className="flex bg-stone-800 items-center justify-center">
                <img className="h-24 ml-14" src="/img/logo_v2.png"/>

                <div className="flex space-x-28 p-5 mx-auto ml-24">
                    <a className="bg-none text-white hover:text-neutral-300 text-2xl" href="#">Home</a>
                    <a className="linkOtherPage" href="#">Search</a>
                    <a className="linkOtherPage" href="#">Bibliothek</a>
                    <a className="linkOtherPage" href="#">Upload</a>
                    <a className="linkOtherPage" href="#">Login</a>
                </div>


            

            <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button>
                      <span className="sr-only">Open user menu</span>

                      <div className="z-60 w-48 mr-14 bg-neutral-700 hover:bg-neutral-900 duration-300 pl-5 pb-3 pt-3 border-solid rounded-lg ml-auto">
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
                    <Menu.Items className="absolute bg-neutral-900 text-right right-14 z-20 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-neutral-800' : '', 'block px-16 py-3 text-xl text-white duration-200')}
                          >
                            Account
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-neutral-800' : '', 'block px-16 py-3 text-xl text-white duration-200')}
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
                            className={classNames(active ? 'bg-neutral-800' : '', 'block px-14  py-3 text-xl pl-2 text-red-500 duration-200')}
                          >

                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
            </div>
        </header>
    )
}