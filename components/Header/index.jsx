import React from 'react'
import Image from 'next/image'
import Logo from './hulu-white.png'
import { HeaderItem } from '..'
import { headerItems } from '../../constants'

const Header = () => (
    <header>
      <div>
      {/*  Header Items */}
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
