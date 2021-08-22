/* eslint-disable quotes */
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { adjustColors } from 'values/values'
import Button from 'components/atoms/Button'
import { useHistory } from 'react-router-dom'
import Toggle from 'components/ThemeToggle'
import { classNames } from 'utils/classNames'
import { useUserContext } from 'context/UserContext'
import { RiProfileLine } from 'react-icons/ri'
import { links } from 'constants/Links'

export default function Navigation({ isUser, accountFilled = false }) {
  const { setDarkMode, darkMode } = useUserContext()

  const [selected, setSelected] = useState(adjustColors[0])

  const history = useHistory()

  return (
    <Popover className="relative dark:bg-gray-800  bg-white">
      {({ open }) => (
        <>
          <div className="">
            <div className="flex justify-between  items-center border-b-2 dark:border-gray-700 border-gray-100 py-3 md:justify-start md:space-x-10 px-2">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Popover.Group
                  as="nav"
                  className="hidden ml-6 md:flex space-x-10"
                >
                  <a
                    href="/#"
                    className="text-base font-medium dark:text-gray-400 text-gray-500 link-hover"
                  >
                    Help & Contact
                  </a>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white dark:bg-gray-800 rounded-md inline-flex items-center text-base font-medium link-hover focus:outline-none '
                          )}
                        >
                          <a
                            href="/#"
                            className="text-base font-medium dark:text-gray-400 text-gray-500 link-hover"
                          >
                            Adjust Colors
                          </a>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : ' text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                                <div>
                                  <Toggle
                                    enabled={darkMode}
                                    text="Select mode"
                                    subText="Choose theme preferance"
                                    setEnabled={setDarkMode}
                                  />
                                </div>

                                {adjustColors.map((item) => (
                                  <a
                                    key={item.name}
                                    onClick={() => setSelected(item)}
                                    href={item.href}
                                    className="-m-3 p-3 mt-1 flex items-center text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 justify-start cursor-pointer"
                                  >
                                    <span
                                      className={classNames(
                                        selected.name === item.name
                                          ? 'bg-indigo-600 border-transparent'
                                          : 'bg-white border-gray-300',
                                        selected.name === item.name ? '' : '',
                                        'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                                      )}
                                      aria-hidden="true"
                                    >
                                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                                    </span>
                                    <div className="ml-4">
                                      <p className="text-base text-left font-medium dark:text-white text-gray-900 mb-0">
                                        {item.name}
                                      </p>
                                      {/* <p className="mt-1 text-left text-sm text-gray-500">
                                        {item.description}
                                      </p> */}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <a
                    href="/#"
                    className="text-base text-gray-500  dark:text-gray-400 font-medium link-hover"
                  >
                    Join our forum
                  </a>
                </Popover.Group>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              {isUser ? (
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  {accountFilled && (
                    <Popover.Group
                      as="nav"
                      className="hidden ml-6 md:flex space-x-10"
                    >
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group bg-white dark:bg-gray-800 rounded-md inline-flex items-center text-base font-medium link-hover focus:outline-none '
                              )}
                            >
                              <Button
                                // onClick={() => history.push('/profile')}
                                className="mx-4 "
                                label="Profile"
                                gradient
                                invert
                              />
                            </Popover.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel
                                static
                                className="absolute z-10  mt-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                              >
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                  <div className="relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                                    <div
                                      onClick={() => history.push('/profile/1')}
                                      className="p-2 cursor-pointer pl-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                      <p className="text-base flex items-center text-left font-medium dark:text-white text-gray-900 mb-0">
                                        <RiProfileLine className="mr-2" />
                                        Profile one
                                      </p>
                                    </div>
                                    <div
                                      onClick={() => history.push('/profile/2')}
                                      className="rounded-lg pl-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2"
                                    >
                                      <p className="text-base flex items-center text-left  font-medium dark:text-white text-gray-900 mb-0">
                                        <RiProfileLine className="mr-2" />
                                        Profile two
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </Popover.Group>
                  )}

                  {!accountFilled && (
                    <Button
                      onClick={() => history.push(links.CHOOSE_ACCOUNT)}
                      className="mx-4 "
                      label="Choose account"
                      invert
                      gradient
                    />
                  )}
                  <Button
                    onClick={() => history.push(links.DASHBAORD)}
                    className="mx-4 "
                    label="Dashboard"
                    gradient
                  />
                </div>
              ) : (
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a
                    href="/signup"
                    className="whitespace-nowrap dark:text-gray-400 text-gray-500  text-base font-medium  link-hover"
                  >
                    Join Now
                  </a>

                  <Button
                    onClick={() => history.push('/login')}
                    className="mx-4 "
                    label="Login"
                    gradient
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Popover>
  )
}
