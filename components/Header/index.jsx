import React from 'react'
import Image from 'next/image'
import Logo from './hulu-white.png'

const Header = () => (
    <header>
      <h1>Header</h1>
      <Image src={Logo} width={200} height={100} />
    </header>
)

export { Header }
