/* eslint-disable quotes */

import { Fragment, useState } from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  ColorSwatchIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { BiMessageDetail, BiUserCircle } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'
import { AiOutlineCheck, AiOutlineHome } from 'react-icons/ai'
import Toggle from 'components/ThemeToggle'
import { BsPeople } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'
import { useUserContext } from 'context/UserContext'
import { IParent } from 'interfaces/UniversalInterface'
import { classNames } from 'utils/classNames'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from 'state/Redux/Actions/authActions'
import { MenuAlt2Icon } from '@heroicons/react/outline'
import {
  adjustColors,
  businessApps,
  callsToAction,
  departmentsArray,
  productsArray,
  sellList,
  settings,
} from 'values/values'
import Selector from 'components/atoms/Selector'
import { find, map } from 'lodash'
import CountryListDropdown from 'components/CountryListDropdown'
import { links as _links } from 'constants/Links'
import getImageURL from 'utils/getImageURL'

const DashboardHeader = ({ userData }: { userData: IParent }) => {
  const { setDarkMode, darkMode } = useUserContext()
  const dispatch = useDispatch()
  const history = useHistory()
  const [selected, setSelected] = useState(adjustColors[0])

  const [selectedProduct, setSelectedProduct] = useState<any>(productsArray[0])

  const searchPlaceHolder =
    ['products', 'bulk', 'all'].indexOf(selectedProduct.value) !== -1
      ? 'Search'
      : 'Find a'

  const [selectedDepartment, setSelectedDepartment] = useState<any>(
    departmentsArray[0]
  )

  const links = [
    { href: '/#', title: 'Home', Icon: AiOutlineHome },
    { href: '/#', title: 'My Network', Icon: BsPeople },
    { href: '/#', title: 'Jobs', Icon: CgWorkAlt },
    { href: '/#', title: 'Messaging', Icon: BiMessageDetail },
    { href: '/#', title: 'Notifications', Icon: IoMdNotificationsOutline },
  ]

  const navClass =
    'flex flex-col items-center font-medium text-base dark:text-gray-400 text-gray-500 link-hover'

  const { showSidebar, setShowSidebar } = useUserContext()

  const isBusiness = userData?.other?.accountType === 'business'

  const navigation = [
    {
      name: 'Adjust colors',
      icon: ColorSwatchIcon,
      current: false,
      children: adjustColors,
    },
  ]

  return (
    <Popover className="relative dark:bg-gray-800 bg-white">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center py-3 border-b-2 dark:border-gray-700 border-gray-100  sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              {/* <div
                className="flex items-center cursor-pointer hover:bg-gray-600 rounded p-2 justify-center"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <MenuAlt2Icon className="h-6 w-6 dark:text-white text-gray-900" />
              </div> */}
              <img
                src={process.env.PUBLIC_URL + '/logo.png'}
                className="h-12 w-12"
                alt="13RMS"
              />
              <div className="hidden rounded-xl h-12 ml-8 lg:flex dark:border-gray-700 border">
                <div className="ml-2">
                  <Selector
                    disableFocus
                    selectedItem={selectedProduct.label}
                    list={productsArray.map((product) => ({
                      name: product.label,
                    }))}
                    required
                    border={false}
                    onSelect={(item) => {
                      const selectedItem = find(
                        productsArray,
                        (_item) => _item.label === item.name
                      )
                      setSelectedProduct(selectedItem)
                    }}
                  />
                </div>

                <div className="col-span-5">
                  <input
                    id="home_search_panel"
                    name="search"
                    type="text"
                    className="relative  dark:bg-gray-800 dark:text-white w-full border-none outline-none shadow-none focus:outline-none text-sm  pl-3 pr-10 py-2 text-left  dark:placeholder-gray-400 placeholder-gray-500 h-full"
                    placeholder={
                      searchPlaceHolder + ' ' + selectedProduct.label
                    }
                  />
                </div>
                <div className="w-72">
                  <Selector
                    selectedItem={selectedDepartment.label}
                    list={departmentsArray.map((department) => ({
                      name: department.label,
                    }))}
                    border={false}
                    disableFocus
                    required
                    onSelect={(item) => {
                      const selectedItem = find(
                        departmentsArray,
                        (_item) => _item.label === item.name
                      )
                      setSelectedDepartment(selectedItem)
                    }}
                  />
                </div>
                <div className="relative flex items-center justify-center col-span-1">
                  <CountryListDropdown />
                </div>
              </div>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {map(links, (link, idx) => (
                <NavLink key={idx} to={link.href} className={navClass}>
                  <link.Icon />
                  <span className="hidden ml-2 xl:block">{link.title}</span>
                </NavLink>
              ))}
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                      )}
                    >
                      <span className={`${navClass}`}>
                        <GiReceiveMoney className="" />
                        <span className="hidden lg:flex items-center">
                          Sell{' '}
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'h-4 w-4 group-hover:text-gray-500 ml-2'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </span>
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
                        className="absolute z-10 -ml-4 mt-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 dark:bg-gray-700 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {sellList.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 mt-1 flex items-center text-left dark:hover:bg-gray-600 transition-all  rounded-lg hover:bg-gray-50 justify-start cursor-pointer"
                              >
                                <div className="ml-4">
                                  <p className="text-base dark:text-white text-left font-medium mb-0 text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 border-t border-gray-600 justify-between w-full py-5 bg-gray-50 dark:bg-gray-700 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div
                                key={item.name}
                                className="w-1/2 flex items-center justify-center "
                              >
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium dark:text-white text-gray-900 hover:bg-gray-100 transition-all dark:hover:bg-gray-600 w-full justify-center"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                      )}
                    >
                      <span className={navClass}>
                        <BiUserCircle className="" />
                        <span className="hidden lg:flex items-center">
                          My 13RMS{' '}
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'h-4 w-4 group-hover:text-gray-500 ml-2'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </span>
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
                        className="absolute z-10 -ml-4 mt-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                            <div className="flex w-full space-x-4 items-center space-between">
                              <div
                                onClick={() =>
                                  history.push(
                                    _links.getProfileById(
                                      userData._id,
                                      userData.other?.template || 1
                                    )
                                  )
                                }
                                className="w-1/2 flex items-center justify-center dark:border-gray-600 darK:hover:border-gray-500 dark:hover:bg-gray-600 dark:text-white transition-all border-gray-200 py-2 rounded-md font-light hover:bg-gray-50 cursor-pointer hover:border-gray-300 border"
                              >
                                View profile
                              </div>
                              <div className="w-1/2 flex items-center justify-center dark:border-gray-600 darK:hover:border-gray-500 dark:hover:bg-gray-600 dark:text-white transition-all border-gray-200 py-2 rounded-md font-light hover:bg-gray-50 cursor-pointer hover:border-gray-300 border">
                                View store
                              </div>
                            </div>

                            {settings.map(
                              (item) =>
                                item.name === 'Sign Out' && (
                                  <div
                                    key={item.name}
                                    onClick={() => {
                                      dispatch(logOut(history))
                                    }}
                                    className="-m-3 gradient-item p-3 mt-1 flex items-center text-left rounded-lg dark:hover:bg-gray-600 transition-all hover:bg-gray-50 justify-start cursor-pointer"
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md  text-white sm:h-8 sm:w-8">
                                      <item.icon
                                        className="sm:h-4 sm:w-4 h-8 w-8"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base text-left font-medium mb-0 dark:text-white text-gray-700">
                                        {item.name}
                                      </p>
                                    </div>
                                  </div>
                                )
                            )}

                            {navigation.map((item) =>
                              !item.children ? (
                                <div key={item.name}>
                                  <a
                                    href="/#"
                                    className={classNames(
                                      item.current
                                        ? 'bg-gray-100 dark:bg-gray-600 dark:text-white text-gray-900'
                                        : 'bg-white dark:bg-gray-600 dark:text-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                      'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                  >
                                    <item.icon
                                      className={classNames(
                                        item.current
                                          ? 'text-gray-500'
                                          : 'text-gray-400 group-hover:text-gray-500',
                                        'mr-3 flex-shrink-0 h-6 w-6'
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </a>
                                </div>
                              ) : (
                                <Disclosure
                                  as="div"
                                  key={item.name}
                                  className="space-y-1"
                                >
                                  {({ open }) => (
                                    <>
                                      <Disclosure.Button
                                        className={classNames(
                                          item.current
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'bg-white dark:bg-gray-600 dark:text-white  text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                          'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                        )}
                                      >
                                        <item.icon
                                          className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                          aria-hidden="true"
                                        />
                                        <span className="flex-1">
                                          {item.name}
                                        </span>
                                        <svg
                                          className={classNames(
                                            open
                                              ? 'text-gray-400 rotate-90'
                                              : 'text-gray-300',
                                            'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                          )}
                                          viewBox="0 0 20 20"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M6 6L14 10L6 14V6Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </Disclosure.Button>
                                      <Disclosure.Panel className="space-y-1">
                                        {item.children.map((subItem) => (
                                          <a
                                            key={subItem.name}
                                            // @ts-ignore
                                            href={subItem.href}
                                            onClick={() => setSelected(subItem)}
                                            className="group cursor-pointer w-full justify-between flex items-center pl-11 pr-2 py-2 text-sm font-medium dark:text-gray-300 text-gray-600 rounded-md hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-400 hover:bg-gray-50"
                                          >
                                            {subItem.name}

                                            {selected.name === subItem.name && (
                                              <span>
                                                <AiOutlineCheck className="dark:text-white text-gray-900" />
                                              </span>
                                            )}
                                          </a>
                                        ))}
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                              )
                            )}

                            <div>
                              <Toggle
                                enabled={darkMode}
                                text="Select mode"
                                subText="Choose theme preferance"
                                setEnabled={setDarkMode}
                              />
                            </div>
                          </div>

                          <div className="flex px-5 py-5 bg-white border-t dark:border-gray-600 border-gray-200 dark:bg-gray-700 space-y-6 sm:flex sm:space-y-0 sm:px-8">
                            <div className=" flex-shrink-0">
                              <img
                                className="h-14 mr-6 rounded-full w-14 drop-shadow-lg"
                                src={
                                  userData?.profilePicture
                                    ? getImageURL(userData?.profilePicture)
                                    : 'https://robohash.org/honey?set=set1'
                                }
                                alt="user"
                              />
                            </div>
                            <div>
                              <h4
                                onClick={() =>
                                  history.push(
                                    _links.getProfileById(
                                      userData?._id,
                                      userData?.other?.template || 1
                                    )
                                  )
                                }
                                className="hover:underline text-lg dark:text-white font-bold"
                              >
                                {userData?.fullName}
                              </h4>

                              <p className="mt-1 text-gray-800 font-medium leading-3 dark:text-gray-400">
                                {isBusiness
                                  ? userData?.business?.name
                                  : userData?.company?.jobTitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        `group bg-transparent transition-all rounded-md inline-flex items-center text-base font-medium ${navClass} focus:outline-none`
                      )}
                    >
                      <span className={navClass}>
                        <BiUserCircle className="" />
                        <span className="hidden lg:flex items-center">
                          Business Apps{' '}
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'h-4 w-4 group-hover:text-gray-500 ml-2'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </span>
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
                        style={{ left: '-13rem' }}
                        className="absolute z-10  mt-4 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative dark:bg-gray-700 bg-white px-5 py-6 sm:gap-8 sm:p-8 ">
                            <p className="inline-block text-2xl tracking-wide mb-4 border-b-2 border-pink-600 mt-2 font-bold text-gray-900 dark:text-white">
                              13RMS
                            </p>

                            <div className="grid mt-4 gap-8 lg:grid-cols-2">
                              {businessApps.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.name}
                                  className="-m-3 p-3 cursor-pointer flex items-start rounded-lg dark:hover:bg-gray-600 hover:bg-gray-100"
                                >
                                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-md shadow-lg text-white sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium dark:text-white text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm dark:text-gray-400 text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </>
      )}
    </Popover>
  )
}

export default DashboardHeader
