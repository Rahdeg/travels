
import React from 'react'
import frm1 from './Frame 42.jpg'
import frm2 from './Frame 43.jpg'
import frm3 from './Frame 44.jpg'

const picture = () => {
  return (
    <div className='flex ml5'>
    <div><img src={frm1} alt=''/> </div>
    <div><img src={frm2} alt=''/> </div>
    <div><img src={frm3} alt=''/> </div>
    
    </div>
  )
}

export default picture