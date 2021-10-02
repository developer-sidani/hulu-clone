import React from 'react'
import Image from 'next/image'
import Logo from './hulu-white.png'

const Header = () => (
    <header>
      <h1 className="text-xl">Header</h1>
      <Image
        className="object-contain"
        src={Logo}
        width={200}
        height={100}
      />
    </header>
)

export { Header }
