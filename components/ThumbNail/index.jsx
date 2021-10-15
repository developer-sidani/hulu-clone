import React from 'react'
import Image from 'next/image'
import { tmdbImageUrl } from '../../constants'

const ThumbNail = ({ res }) => (
  <div>
    <Image
      src={`${tmdbImageUrl}${res?.backdrop_path || res?.poster_path}`
      || `${tmdbImageUrl}${res?.poster_path}`}
      layout="responsive"
      height={1080}
      width={1920}
    />
    <div>
      <p className="truncate">
        {res?.overview}
      </p>
    </div>
  </div>
)

export { ThumbNail }
