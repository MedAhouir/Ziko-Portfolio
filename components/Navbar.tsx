import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='px-12 flex justify-between py-4'>
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className='font-cabin font-semibold hover:text-secondary transition-all duration-500'>{link.label}</Link>
      ))}
    </nav>
  )
}

export default Navbar