import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import CustomLink from '../CustomLink'

import SearchBar from '@/UI/SearchBar'

const NavLinks = () => {
  return (
    <div className='nav-links-wrapper'>
      <CustomLink href='/agents' activeClassName='nav-link-active'>
        <a className='nav-link'>Agents</a>
      </CustomLink>
      <CustomLink href='/maps' activeClassName='nav-link-active'>
        <a className='nav-link'>Maps</a>
      </CustomLink>
      <CustomLink href='/weapons' activeClassName='nav-link-active'>
        <a className='nav-link'>Weapons</a>
      </CustomLink>
    </div>
  )
}

const Navbar = () => {
  const { pathname } = useRouter()
  const [ mobileOpen, setMobileOpen ] = useState(false)

  return (
    <>
      <div className='navbar-wrapper'>
        <div className='navbar'>
          <div className='flex-between-center py-4 flex-row'>
            <div className='relative'>
              <Link href='/'>
                <a className='site-name'>Brimstone.GG</a>
              </Link>
            </div>
            <button
              className='md:hidden rounded-lg focus:outline-none focus:shadow-outline'
              aria-label='open and close mobile menu button'
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
                {!mobileOpen ? (
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  ></path>
                ) : (
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                )}
              </svg>
            </button>
          </div>
          {pathname !== '/' && <SearchBar type='compact' />}
          <nav className={'flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ' + (mobileOpen ? 'flex' : 'hidden')}>
            <NavLinks />
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
