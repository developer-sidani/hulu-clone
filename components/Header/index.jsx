import React from 'react'
import Image from 'next/image'
import Logo from './hulu-white.png'
import { HeaderItem } from '..'
import { headerItems } from '../../constants'

const Header = () => (
    <header className="flex flex-col sm:flex-row m-5
      justify-between items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map(({ _id, icon, title }) => (
            <HeaderItem
              key={_id}
              Icon={icon}
              title={title}
            />
        ))}
      </div>
      <Image
        className="object-contain"
        src={Logo}
        width={200}
        height={100}
      />
    </header>
)

export { Header }
