import React from 'react'
import PropTypes from 'prop-types'

const Scores = ({hits, misses}) => {
  return (
    <div className="flex flex-row">
        <p className=" text-green">hits {hits}</p> \\
        <p className="text-red">misses {misses}</p>
      </div>
  )
}

Scores.propTypes = {}

export default Scores