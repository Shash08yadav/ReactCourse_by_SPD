import React from 'react'

const Bulletin = ({title, details}) => {

  return (
    <div className='bulletin'>
        <h3>{title}</h3>
        <p>{details}</p>
    </div>
  )
}

export default Bulletin