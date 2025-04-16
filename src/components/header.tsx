import React from 'react'
import Link from 'next/link'

const NavbarPage = () => {
  return (
    <div className='absolute z-10 text-white w-full'>
      <nav className="container flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">Home</Link>
        <div className="space-x-5 text-xl">
          <Link href={"/performance"}>
            Performance
          </Link>
          <Link href={"/reliability"}>Reliability</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavbarPage
