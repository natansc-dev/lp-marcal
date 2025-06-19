import React from 'react'
import logo from '../assets/logo-footer.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#312a25] text-gray-500 text-center py-14 text-sm flex justify-center">
      <Image src={logo} alt="Logo"  width={171} height={36} />
    </footer>
  )
} 