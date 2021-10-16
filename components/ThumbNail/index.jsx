import React, { forwardRef } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { tmdbImageUrl } from '../../constants'

const ThumbNail = forwardRef(({ res }, ref) => (
  <div
    ref={ref}
    className="p-2 group cursor-pointer
  transition duration-200 ease-in transform
  sm:hover:scale-105 hover:z-50"
  >
    <Image
      src={`${tmdbImageUrl}${res?.backdrop_path || res?.poster_path}`
      || `${tmdbImageUrl}${res?.poster_path}`}
      layout="responsive"
      height={1080}
      width={1920}
    />
    <div className="p-2">
      <p className="truncate max-w-md">
        {res?.overview}
      </p>
      <h2 className="mt-1 text-2xl transition-all
      duration-100 ease-in-out group-hover:font-bold"
      >
        {res?.title || res?.original_name}
      </h2>
      <p className="flex items-center opacity-0 group-hover:opacity-100">
        {res?.media_type && `${res?.media_type} •`}
        {' '}
        {res?.release_date || res?.first_air_date}
        {' • '}
        <ThumbUpIcon className="h-5 mx-2" />
        {res?.vote_count}
      </p>
    </div>
  </div>
))

export { ThumbNail }
