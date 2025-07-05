import React from 'react'
import Container from './Container'
import music from "../assets/music.png"

const Music = () => {
  return (
    <div className='py-[30px]'>
       <Container>
        <div>
            <img src={music} alt="" />
        </div>
       </Container>
    </div>
  )
}

export default Music