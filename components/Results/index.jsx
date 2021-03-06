import React from 'react'
import FlipMove from 'react-flip-move'
import { ThumbNail } from '..'

const Results = ({ results }) => (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2
    xl:grid-cols-3 3xl:flex flex-wrap justify-center"
    >
      {results?.map(res => <ThumbNail key={res.id} res={res} />)}
    </FlipMove>
)

export { Results }
