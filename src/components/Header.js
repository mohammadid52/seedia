import React, { Fragment } from 'react'
import { Col } from 'reactstrap'
import useDarkMode from 'use-dark-mode'
import Icon from '@oticon/react-icons'
import sun from './../public/assets/sun.png'
import night from './../public/assets/night.png'
import moon from './../public/assets/moon.png'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import Toggle from './Toggle'

import { RiShoppingCart2Line } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'

import { adjustColors, my13Rms } from '../values/values'

import menu from './../public/assets/menu.png'
import red from './../public/assets/red.png'
import green from './../public/assets/green.png'
import menuWhite from './../public/assets/list.png'
import on from './../public/assets/on.png'
import off from './../public/assets/off.png'
import HeaderStyles from './styles/HeaderStyles'
import Button from '@material-ui/core/Button'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import Brightness2Icon from '@material-ui/icons/Brightness2'

// Gets the username from the token
const getUserName = () => {
    const tokenString = localStorage.getItem('token')
    if (tokenString) {
        const token = JSON.parse(tokenString)
        if (token.name) return token.name
        else return null
    } else {
        return null
    }
}

const Header = ({ themeToggler, theme }) => {
    const userName = getUserName()

    const handleSignOutClick = () => {
        localStorage.removeItem('token')
    }

    const darkMode = useDarkMode(false)
    const hamburg = theme === 'light' ? menuWhite : menu
    var colors, borderColors
    if (theme == 'dark') {
        colors = '#ffff'
        borderColors = '#ffff'
    } else {
        colors = '#6c757dc4'
        borderColors = '#6c757dc4'
    }
    const CustomButton = withStyles((theme) => ({
        root: {
            color: colors,
            borderColor: borderColors,
        },
    }))(Button)
    // header-column right-header-column col
    return (
        <Fragment>
            <div {...{ className: HeaderStyles + ' header-top' }}>
                <header {...{ className: 'header-container ' + theme }}>
                    <nav
                        {...{
                            className: 'navbar navbar-expand-lg navbar-light',
                        }}
                    >
                        <div {...{ className: 'container-fluid' }}>
                            <a {...{ className: 'navbar-brand', href: '/#' }}>
                                {}
                            </a>
                            <button
                                {...{
                                    className: 'navbar-toggler',
                                    type: 'button',
                                }}
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span {...{ className: '' }}>
                                    <img
                                        {...{
                                            alt: '',
                                            src: hamburg,
                                            style: { height: '2rem' },
                                        }}
                                    />
                                </span>
                            </button>
                            <div
                                {...{
                                    className: 'collapse navbar-collapse',
                                    id: 'navbarSupportedContent',
                                }}
                            >
                                {
                                    // ------------------------------------
                                }
                                <Col
                                    {...{
                                        md: { size: 6 },
                                        sm: { size: 6 },
                                        className:
                                            'header-column left-header-column',
                                    }}
                                >
                                    <ul
                                        {...{
                                            className:
                                                'navbar-nav me-auto mb-2 mb-lg-0 mt-3',
                                        }}
                                    >
                                        <li
                                            {...{
                                                className: 'nav-item ',
                                            }}
                                        >
                                            <a
                                                {...{
                                                    className:
                                                        'nav-link active',
                                                    href: '/#',
                                                }}
                                                aria-current="page"
                                            >
                                                Help & Contact
                                            </a>
                                        </li>

                                        <li
                                            {...{
                                                className: 'nav-item dropdown ',
                                            }}
                                        >
                                            <a
                                                {...{
                                                    className:
                                                        'nav-link dropdown-toggle',
                                                    href: '/#',
                                                    id: 'navbarDropdown',
                                                    role: 'button',
                                                }}
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Adjust Colors
                                            </a>
                                            <ul
                                                {...{
                                                    className:
                                                        'dropdown-menu darkto',
                                                }}
                                                {...{ id: theme }}
                                                aria-labelledby="navbarDropdown"
                                            >
                                                <div className="dark-mode-toggle">
                                                    <Toggle
                                                        {...{
                                                            checked:
                                                                darkMode.value,
                                                            onChange:
                                                                darkMode.toggle,
                                                            themeToggler,
                                                        }}
                                                    />
                                                    <span
                                                        {...{
                                                            style: {
                                                                width: '100%',
                                                            },
                                                        }}
                                                    >
                                                        <div className="flex">
                                                            <CustomButton
                                                                {...{
                                                                    style: {
                                                                        width: '100px',
                                                                    },
                                                                }}
                                                                onClick={
                                                                    darkMode.disable
                                                                }
                                                                className={
                                                                    'daymode'
                                                                }
                                                                startIcon={
                                                                    <Brightness5Icon />
                                                                }
                                                                variant="outlined"
                                                            >
                                                                Day
                                                            </CustomButton>
                                                        </div>
                                                        <div className="flex">
                                                            <CustomButton
                                                                onClick={
                                                                    darkMode.disable
                                                                }
                                                                className={
                                                                    'daymode'
                                                                }
                                                                onClick={
                                                                    darkMode.enable
                                                                }
                                                                startIcon={
                                                                    <Brightness2Icon />
                                                                }
                                                                variant="outlined"
                                                            >
                                                                Night
                                                            </CustomButton>
                                                        </div>
                                                    </span>
                                                </div>
                                                <li>
                                                    <hr
                                                        {...{
                                                            className:
                                                                'dropdown-divider',
                                                        }}
                                                    />
                                                </li>
                                                <li>
                                                    <span>
                                                        Are you color blind ?
                                                        <br />
                                                        Then choose the
                                                        following options
                                                    </span>

                                                    <div className="flex">
                                                        <div>
                                                            <div>
                                                                <CustomButton
                                                                    {...{
                                                                        style: {
                                                                            width: '100px',
                                                                        },
                                                                    }}
                                                                    onClick={
                                                                        darkMode.disable
                                                                    }
                                                                    className={
                                                                        'daymode'
                                                                    }
                                                                    onClick={
                                                                        darkMode.enable
                                                                    }
                                                                    variant="outlined"
                                                                >
                                                                    On
                                                                </CustomButton>
                                                            </div>

                                                            <div
                                                                {...{
                                                                    style: {
                                                                        paddingTop:
                                                                            '10px',
                                                                        paddingBottom:
                                                                            '10px',
                                                                    },
                                                                }}
                                                            >
                                                                <Button
                                                                    {...{
                                                                        style: {
                                                                            width: '100px',
                                                                        },
                                                                    }}
                                                                    color="secondary"
                                                                    onClick={
                                                                        darkMode.disable
                                                                    }
                                                                    className={
                                                                        'daymode'
                                                                    }
                                                                    onClick={
                                                                        darkMode.enable
                                                                    }
                                                                    variant="contained"
                                                                >
                                                                    Off
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <hr
                                                        {...{
                                                            className:
                                                                'dropdown-divider',
                                                        }}
                                                    />
                                                </li>
                                                {adjustColors.map(
                                                    (item, key) => {
                                                        return (
                                                            <li {...{ key }}>
                                                                <a
                                                                    {...{
                                                                        className:
                                                                            'dropdown-item',
                                                                        href: '/#',
                                                                        key: item.value,
                                                                    }}
                                                                >
                                                                    <p
                                                                        {...{
                                                                            className:
                                                                                'float-start item-list',
                                                                        }}
                                                                    >
                                                                        {' '}
                                                                        {
                                                                            item.name
                                                                        }{' '}
                                                                    </p>
                                                                    <input
                                                                        {...{
                                                                            type: 'radio',
                                                                            value: item.value,
                                                                            name: 'select',
                                                                        }}
                                                                    />
                                                                </a>
                                                            </li>
                                                        )
                                                    }
                                                )}
                                            </ul>
                                        </li>
                                        <li {...{ className: 'nav-item' }}>
                                            <a
                                                {...{
                                                    className:
                                                        'nav-link join-community ',
                                                    href: '/#',
                                                }}
                                            >
                                                Join our forum
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col
                                    {...{
                                        className:
                                            'header-column right-header-column col',
                                    }}
                                >
                                    <ul
                                        {...{
                                            className:
                                                'navbar-nav ms-auto mb-2 mb-lg-0 float-right',
                                        }}
                                    >
                                        <li
                                            {...{
                                                className: 'nav-item ',
                                            }}
                                        >
                                            <a
                                                {...{
                                                    className:
                                                        'nav-link active',
                                                    href: '/signup',
                                                }}
                                                aria-current="page"
                                            >
                                                Join Now
                                            </a>
                                        </li>
                                        <li
                                            {...{
                                                className: 'nav-item ',
                                            }}
                                        >
                                            <a
                                                {...{
                                                    className:
                                                        'nav-link active',
                                                    href: '/login',
                                                }}
                                                aria-current="page"
                                            >
                                                Login
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                {
                                    // ------------------------------------
                                }
                                {/* <Col {...{ className: 'header-column right-header-column' }}>
                  <ul {...{ className: 'navbar-nav ms-auto mb-2 mb-lg-0 float-right' }}>
                    <li {...{ className: 'nav-item with-label' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <AiOutlineHome {...{ style: { width: '21px', height: '21px' } }} />
                        <span {...{ className: 'item-label' }}>Home</span>
                      </a>
                    </li>

                    <li {...{ className: 'nav-item with-label' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <BsPeople {...{ style: { width: '21px', height: '21px' } }} />
                        <span {...{ className: 'item-label' }}>My Network</span>
                      </a>
                    </li>
                    <li {...{ className: 'nav-item with-label' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <CgWorkAlt {...{ style: { width: '21px', height: '21px' } }} />
                        <span {...{ className: 'item-label' }}>Jobs</span>
                      </a>
                    </li>

                    <li {...{ className: 'nav-item' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <BiMessageDetail {...{ style: { width: '21px', height: '21px' } }} />
                      </a>
                    </li>

                    <li {...{ className: 'nav-item' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <FaRegBell {...{ style: { width: '21px', height: '21px' } }} />
                      </a>
                    </li>
                    <li {...{ className: 'nav-item' }}>
                      <a {...{ className: 'nav-link active', href: '/#' }} aria-current="page">
                        <RiShoppingCart2Line {...{ style: { width: '21px', height: '21px' } }} />
                      </a>
                    </li>

                    <li {...{ className: 'nav-item dropdown ' }}>
                      <a {...{ className: 'nav-link dropdown-toggle', href: '/#', id: 'navbarDropdown', role: 'button' }} data-bs-toggle="dropdown" aria-expanded="false">
                        Sell
                      </a>
                      <ul {...{ className: 'dropdown-menu sell' }} {...{ id: theme }} aria-labelledby="navbarDropdown">
                        <li>
                          <a {...{ className: 'dropdown-item', href: '/#' }}>Sell Products</a>
                        </li>
                      </ul>
                    </li>

                    <li {...{ className: 'nav-item dropdown ' }}>
                      <a {...{ className: 'nav-link dropdown-toggle', href: '/#', id: 'navbarDropdown', role: 'button' }} data-bs-toggle="dropdown" aria-expanded="false">
                        {'My 13RMS'}
                      </a>
                      <ul {...{ className: 'dropdown-menu end-0 my-rms' }} {...{ id: theme }} aria-labelledby="navbarDropdown">
                        
                        {my13Rms.map((item, key) => {
                          return (
                            <Fragment>
                              <div className='iconmenu'>
                             
                              <li {...{ key }}>
                                <a {...{ className: 'dropdown-item rms-item', href: '/#', key: item.name + key }}>
                                  
                                  {item.name + ' '}
                                  {item.count > 0 ? <span {...{ style: { fontWeight: 'bold' } }}> ({item.count})</span> : null}
                                </a>
                              </li>
                              <Icon className='icon' fontSize='16px' icon={item.img} />
                              </div>
                             </Fragment>
                          )
                        })}
                      </ul>
                    </li>

                       {userName ? 
                       <li {...{ className: 'nav-item dropdown ' }}>
                         <a {...{ className: 'nav-link dropdown-toggle', href: '#', id: 'navbarDropdown', role: 'button' }} data-bs-toggle="dropdown" aria-expanded="false">Hello {userName}</a>
                         <ul {...{ className: 'dropdown-menu end-0 sign-in' }} {...{ id: theme }}aria-labelledby="navbarDropdown">
                         <li>
                          <a {...{ className: 'dropdown-item', href: '#' }} onClick={handleSignOutClick}>Sign Out</a>
                        </li>
                         </ul>
                       </li>
                       :
                    <li {...{ className: 'nav-item dropdown ' }}>
                      <a {...{ className: 'nav-link dropdown-toggle', href: '/sign-in', id: 'navbarDropdown', role: 'button' }} data-bs-toggle="dropdown" aria-expanded="false">
                        Sign In
                      </a>
                      <ul {...{ className: 'dropdown-menu end-0 sign-in' }} {...{ id: theme }}aria-labelledby="navbarDropdown">
                        <li>
                          <Link to='/sign-in' {...{ className: 'dropdown-item' }}>Sign In</Link>
                        </li>
                        <li>
                          <hr {...{ className: 'dropdown-divider' }} />
                        </li>
                        <li>
                          <span>{'New to 13RMS ?'}</span>
                        </li>
                        <li>
                          <a {...{ className: 'dropdown-item', href: '/sign-in' }}>
                            <span>Join Now</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                       }
                  </ul>
                </Col> */}
                                {
                                    // ------------------------------------
                                }
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </Fragment>
    )
}

export default Header
