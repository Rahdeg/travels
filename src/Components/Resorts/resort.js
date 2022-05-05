import React from 'react'
import pic1 from './picture (1).jpg'
import pic2 from './picture (2).jpg'
import pic3 from './picture (3).jpg'
import pic from './picture.jpg'

const Resolve = () => {
  return (
    <div className='flex pb7 ph7  pv5'>
    <div className='flex-colomn'>
    <h1>The best resorts to chill<br/>and relax</h1>
    <div className='ml4'><img src={pic1} alt=''/> </div>
    <div className='pa3 mr2'><img src={pic3} alt=''/> </div>
    </div>
    
    
    <div className='flex-colomn p'>
    <div className='ml4'><img src={pic} alt=''/> </div>
    <div className='pa3 mr2'><img src={pic2} alt=''/> </div>
    </div>
    </div>
  )
}

export default Resolve