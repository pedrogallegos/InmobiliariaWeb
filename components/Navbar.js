import Link from 'next/link'
import React from 'react'
import LOGO_INMOESTATE from '@/public/assets/logos/logo-inmoestate.svg'
import Image from 'next/image'

export default function Navbar () {
  return (
    <nav className='flex justify-between items-center p-4 bg-white shadow-md'>
      <div className='flex gap-1 items-center'>
        <button aria-label='Menu' className='md:hidden'>
          <Image src='/assets/icons/icon-menu.svg' alt='Menu Icon' width={24} height={24} />
        </button>
        <Link href='/'>
          <Image src={LOGO_INMOESTATE} alt='Inmoestate Logo' width={150} height={50} />
        </Link>
      </div>
      <div className='flex items-center'>
        <ul className='hidden md:flex gap-4 mr-8'>
          <li>
            <Link href='/propiedades'>Propiedades</Link>
          </li>
          <li>
            <Link href='/favoritos'>Favoritos</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
        </ul>
        <button aria-label='Account'>
          <Image src='/assets/icons/icon-account.svg' alt='Account Icon' width={24} height={24} />
        </button>
      </div>
    </nav>
  )
}
