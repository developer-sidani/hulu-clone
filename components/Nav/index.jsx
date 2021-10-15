import React from 'react'
import { requests } from '../../utils'

const Nav = () => (
    <nav className="relative">
      {/* Left Fade Div */}
      <div className="absolute top-0 left-0
      bg-gradient-to-r from-[#06202A] h-10 w-1/12"
      />
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
      space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide "
      >
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            className="last:pr-24 cursor-pointer
            transition duration-100 hover:scale-125
            hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      {/* Right Fade Div */}
      <div className="absolute top-0 right-0
      bg-gradient-to-l from-[#06202A] h-10 w-1/12"
      />
    </nav>
)

export { Nav }
