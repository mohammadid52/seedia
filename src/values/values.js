/* eslint-disable quotes */
import brazil from 'assets/images/countries/brazil.png'
import argentina from 'assets/images/countries/argentina.png'
import australia from 'assets/images/countries/australia.png'
import austria from 'assets/images/countries/austria.png'
import belarus from 'assets/images/countries/belarus.png'
import belgium from 'assets/images/countries/belgium.png'
import bolivia from 'assets/images/countries/bolivia.png'
import canada from 'assets/images/countries/canada.png'
import chile from 'assets/images/countries/chile.png'
import china from 'assets/images/countries/china.png'
import colombia from 'assets/images/countries/colombia.png'
import costa from 'assets/images/countries/costa.png'
import dom from 'assets/images/countries/dom.png'
import ecuador from 'assets/images/countries/ecuador.png'
import el from 'assets/images/countries/el.png'
import france from 'assets/images/countries/france.png'
import germany from 'assets/images/countries/germany.png'
import guatemala from 'assets/images/countries/guatemala.png'
import honduras from 'assets/images/countries/honduras.png'
import hong from 'assets/images/countries/hong.png'
import india from 'assets/images/countries/india.png'
import ireland from 'assets/images/countries/ireland.png'
import israel from 'assets/images/countries/israel.png'
import italy from 'assets/images/countries/italy.png'
import japan from 'assets/images/countries/japan.png'
import kaz from 'assets/images/countries/kaz.png'
import korea from 'assets/images/countries/korea.png'
import malaysia from 'assets/images/countries/malaysia.png'
import mexico from 'assets/images/countries/mexico.png'
import netherlands from 'assets/images/countries/netherlands.png'
import nicaragua from 'assets/images/countries/nicaragua.png'
import panama from 'assets/images/countries/panama.png'
import paraguay from 'assets/images/countries/paraguay.png'
import peru from 'assets/images/countries/peru.png'
import philippines from 'assets/images/countries/philippines.png'
import poland from 'assets/images/countries/poland.png'
import portugal from 'assets/images/countries/portugal.png'
import rico from 'assets/images/countries/rico.png'
import russia from 'assets/images/countries/russia.png'
import singapore from 'assets/images/countries/singapore.png'
import spain from 'assets/images/countries/spain.png'
import switzerland from 'assets/images/countries/switzerland.png'
import taiwan from 'assets/images/countries/taiwan.png'
import turkey from 'assets/images/countries/turkey.png'
import uk from 'assets/images/countries/uk.png'
import uruguay from 'assets/images/countries/uruguay.png'
import venezuela from 'assets/images/countries/venezuela.png'
import usa from 'assets/images/countries/usa.png'
import ww from 'assets/images/countries/ww.png'
import { BiStore } from 'react-icons/bi'
import { GiReceiveMoney } from 'react-icons/gi'
import {
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineUsergroupDelete,
} from 'react-icons/ai'
import { FaAdversal, FaMoneyBillAlt, FaConnectdevelop } from 'react-icons/fa'
import { MdFindReplace, MdAttachMoney } from 'react-icons/md'
import { SiGoogleanalytics } from 'react-icons/si'
import { BsFilePost } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { nanoid } from 'nanoid'

export const adjustColors = [
  { name: 'Deuteranomaly', value: 1 },
  { name: 'Protanomaly', value: 2 },
  { name: 'Protanopia', value: 3 },
  { name: 'Deuteranopia', value: 4 },
  { name: 'Tritanopia', value: 5 },
  { name: 'Tritanomaly', value: 6 },
  { name: 'Achromatopsia', value: 7 },
]

export const my13Rms = [
  {
    name: 'Products of your Interest',
    count: 0,
    divider: true,
    classNames: '',
    img: 'icon-layout-grid',
  },
  {
    name: 'Business of your Interest',
    count: 0,
    divider: true,
    classNames: '',
    img: 'icon-slideshow',
  },
  {
    name: 'My Groups',
    count: 0,
    divider: true,
    classNames: '',
    img: 'icon-people',
  },
  {
    name: 'Purchase history',
    count: 0,
    divider: true,
    classNames: '',
    img: 'icon-receipt',
  },
  {
    name: 'Recent activity',
    count: 0,
    divider: true,
    classNames: '',
    img: 'icon-setting-gear-a',
  },
  {
    name: 'Buy again',
    count: 0,
    divider: true,
    classNames: '',
    img: 'icon-ecommerce-shopcart',
  },
  {
    name: 'Selling',
    count: 0,
    divider: true,
    classNames: '',
    img: 'icon-checked-circle',
  },
  {
    name: 'Saved searches',
    count: 0,
    divider: true,
    classNames: '',
    img: 'icon-interface-search-plus',
  },
  {
    name: 'Saved sellers',
    count: 0,
    divider: true,
    classNames: '',
    img: 'icon-user-alt',
  },
  {
    name: 'Inbox',
    count: 0,
    divider: false,
    classNames: '',
    img: 'icon-com-email2',
  },
]

export const settings = [
  {
    name: 'Settings',
    icon: FiSettings,
    current: false,
  },
  {
    name: 'Sign Out',
    description:
      'Get a better understanding of where your traffic is coming from.',

    icon: AiOutlineLogout,
  },
]

export const sellList = [
  {
    name: 'Products of your Interest',
    href: '/#',
  },
  {
    name: 'Business of your Interest',
    href: '/#',
  },
  {
    name: 'Purchase history',
    href: '/#',
  },
  {
    name: 'Recent activity',
    href: '/#',
  },
  {
    name: 'Buy again',
    href: '/#',
  },
  {
    name: 'Saved searches',
    href: '/#',
  },
  {
    name: 'Saved sellers',
    href: '/#',
  },
  {
    name: 'Saved Inbox',
    href: '/#',
  },
]

export const callsToAction = [
  { name: 'Open Store', href: '/#', icon: BiStore },
  { name: 'Sell', href: '/#', icon: GiReceiveMoney },
]

export const businessApps = [
  {
    icon: AiOutlineSearch,
    name: 'Search for leads',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: BsFilePost,
    name: 'Post a job',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: FaAdversal,
    name: 'Advertise',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: FaMoneyBillAlt,
    name: 'Sell products',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: AiOutlineUsergroupDelete,
    name: 'Groups',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: MdFindReplace,
    name: 'Pro finder',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: MdAttachMoney,
    name: 'Salary',
    description:
      'Get a better understanding of where your traffic is coming from.',
  },
  {
    icon: BsFilePost,
    name: 'New product',
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: FaConnectdevelop,
    name: 'New product developed',
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: SiGoogleanalytics,
    name: 'Profile statistics',
    description: 'Lorem ipsum dolor sit amet',
  },
]

export const year = new Date().getFullYear()
const startDate = 1950

const getYearList = (future = false) => {
  let years = []

  let startYear = future ? 2050 : Number(year)

  for (let i = startYear; i >= startDate; i--) {
    years.push({ id: String(i), name: String(i) })
  }
  return years
}
export const yearList = getYearList()
export const yearListWithFuture = getYearList(true)

export const welcomeSearchLinks = [
  { name: 'Receive quotes', href: '#/' },
  { name: 'Trending', href: '#/' },
  { name: 'Jobs', href: '#/' },
  { name: 'Remarkable', href: '#/' },
  { name: 'New', href: '#/' },
]

export const languageKnownLevel = [
  { name: 'Beginner', id: '1' },
  { name: 'Intermediate', id: '2' },
  { name: 'Fluent', id: '3' },
]

export const productsArray = [
  // { label: 'All', value: 'all' },
  { label: 'All', value: 'all' },
  { label: 'Products', value: 'products' },
  { value: 'bulk', label: 'Bulk Items' },
  { value: 'commercial', label: 'Commercial Agent' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'manufacturer', label: 'Manufacturer' },
  { value: 'supplier', label: 'Supplier' },
  { value: 'groups', label: 'Groups' },
  { value: 'businesses', label: 'Businesses' },
]

export const departmentsArray = [
  { value: 'all', label: 'All Departments' },
  { value: 'antiques', label: 'Antiques' },
  { value: 'art', label: 'Art' },
  { value: 'baby', label: 'Baby' },
  { value: 'books', label: 'Books' },
  { value: 'b&i', label: 'Business & Industrial' },
  { value: 'c&a', label: 'Cameras & Photo' },
  { value: 'phone', label: 'Cell Phones & Accessories' },
  { value: 'clothing', label: 'Clothing, Shoes & Accessories' },
  { value: 'coins', label: 'Coins & Paper Money' },
  { value: 'collectibles', label: 'Collectibles' },
  { value: 'computer', label: 'Computers/Tablets & Networking' },
  { value: 'consumer', label: 'Consumer Electronics' },
  { value: 'crafts', label: 'Crafts' },
  { value: 'dolls', label: 'Dolls & Bears' },
  { value: 'dvd', label: 'DVDs & Movies' },
  { value: 'entertainment', label: 'Entertainment Memorabilia' },
  { value: 'giftcard', label: 'Gift Cards & Coupons' },
  { value: 'health', label: 'Health & Beauty' },
  { value: 'home', label: 'Home & Garden' },
  { value: 'jewelry', label: 'Jewelry & Watches' },
  { value: 'music', label: 'Music' },
  { value: 'musical', label: 'Musical Instruments & Gear' },
  { value: 'pet', label: 'Pet Supplies' },
  { value: 'pottery', label: 'Pottery & Glass' },
  { value: 'realestate', label: 'Real Estate' },
  { value: 'specialty', label: 'Specialty Services' },
  { value: 'sporting', label: 'Sporting Goods' },
  { value: 'sports', label: 'Sports Mem, Cards & Fan Shop' },
  { value: 'stamps', label: 'Stamps' },
  { value: 'tickets', label: 'Tickets & Experiences' },
  { value: 'toys', label: 'Toys & Hobbies' },
  { value: 'travel', label: 'Travel' },
  { value: 'games', label: 'Video Games & Consoles' },
  { value: 'else', label: 'Everything Else' },
]

export const countries = [
  { countryCode: 'WW', label: 'WorldWide', flag: ww },
  { countryCode: 'AR', label: 'Argentina', flag: argentina },
  { countryCode: 'AU', label: 'Australia', flag: australia },
  { countryCode: 'AT', label: 'Austria', flag: austria },
  { countryCode: 'BY', label: 'Belarus', flag: belarus },
  { countryCode: 'BE', label: 'Belgium', flag: belgium },
  { countryCode: 'BO', label: 'Bolivia', flag: bolivia },
  { countryCode: 'BR', label: 'Brazil', flag: brazil },
  { countryCode: 'CA', label: 'Canada', flag: canada },
  { countryCode: 'CL', label: 'Chile', flag: chile },
  { countryCode: 'CN', label: 'China', flag: china },
  { countryCode: 'CO', label: 'Colombia', flag: colombia },
  { countryCode: 'CR', label: 'Costa Rica', flag: costa },
  { countryCode: 'DO', label: 'Dominican Republic', flag: dom },
  { countryCode: 'EC', label: 'Ecuador', flag: ecuador },
  { countryCode: 'SV', label: 'El Salvador', flag: el },
  { countryCode: 'FR', label: 'France', flag: france },
  { countryCode: 'DE', label: 'Germany', flag: germany },
  { countryCode: 'GT', label: 'Guatemala', flag: guatemala },
  { countryCode: 'HN', label: 'Honduras', flag: honduras },
  { countryCode: 'HK', label: 'Hong Kong', flag: hong },
  { countryCode: 'IN', label: 'India', flag: india },
  { countryCode: 'IE', label: 'Ireland', flag: ireland },
  { countryCode: 'IL', label: 'Israel', flag: israel },
  { countryCode: 'IT', label: 'Italy', flag: italy },
  { countryCode: 'JP', label: 'Japan', flag: japan },
  { countryCode: 'KZ', label: 'Kazakhstan', flag: kaz },
  { countryCode: 'KP', label: 'Korea', flag: korea },
  { countryCode: 'MY', label: 'Malaysia', flag: malaysia },
  { countryCode: 'MX', label: 'Mexico', flag: mexico },
  { countryCode: 'NL', label: 'Netherlands', flag: netherlands },
  { countryCode: 'NI', label: 'Nicaragua', flag: nicaragua },
  { countryCode: 'PA', label: 'Panama', flag: panama },
  { countryCode: 'PY', label: 'Paraguay', flag: paraguay },
  { countryCode: 'PE', label: 'Peru', flag: peru },
  { countryCode: 'PH', label: 'Philippines', flag: philippines },
  { countryCode: 'PL', label: 'Poland', flag: poland },
  { countryCode: 'PT', label: 'Portugal', flag: portugal },
  { countryCode: 'PR', label: 'Puerto Rico', flag: rico },
  { countryCode: 'RU', label: 'Russia', flag: russia },
  { countryCode: 'SG', label: 'Singapore', flag: singapore },
  { countryCode: 'ES', label: 'Spain', flag: spain },
  { countryCode: 'CH', label: 'Switzerland', flag: switzerland },
  { countryCode: 'TW', label: 'Taiwan', flag: taiwan },
  { countryCode: 'TR', label: 'Turkey', flag: turkey },
  { countryCode: 'GB', label: 'United Kingdom', flag: uk },
  { countryCode: 'UY', label: 'Uruguay', flag: uruguay },
  { countryCode: 'VE', label: 'Venezuela', flag: venezuela },
  { countryCode: 'US', label: 'United States', flag: usa },
]

export const colorsList = [
  { name: 'gray', id: nanoid(4), code: '#E5E7EB' },
  { name: 'black', id: nanoid(4), code: '#111827' },
  { name: 'white', id: nanoid(4), code: '#fff' },
]
export const sizeList = [
  { name: 'XXS', id: 1 },
  { name: 'XS', id: 2 },
  { name: 'S', id: 3 },
  { name: 'M', id: 4 },
  { name: 'L', id: 5 },
  { name: 'XL', id: 6 },
  { name: '2XL', id: 7 },
  { name: '3XL', id: 8 },
]
