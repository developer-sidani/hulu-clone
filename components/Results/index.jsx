import React from 'react'
import { ThumbNail } from '..'

const Results = ({ results }) => (
    <div>
      {results?.map(res => <ThumbNail key={res.id} res={res} />)}
    </div>
)

export { Results }
