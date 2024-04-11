import React from 'react'
import Bulletin from './Bulletin'
import ImageBox from './ImageBox'

const Contents = () => {
  return (
    <div className='content'> 
        <ImageBox></ImageBox>
        <Bulletin title="Heading 1" details="lorem 1 ipsum ......"></Bulletin>
        <Bulletin title="Heading 2" details="lorem 2 ipsum ......"></Bulletin>
        <Bulletin title="Heading 3" details="lorem 3 ipsum ......"></Bulletin>
        <Bulletin title="Heading 4" details="lorem 4 ipsum ......"></Bulletin>
        <Bulletin title="Heading 5" details="lorem 5 ipsum ......"></Bulletin>
    </div>
  )
}

export default Contents