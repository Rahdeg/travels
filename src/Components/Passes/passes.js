import React from 'react'
import pass from './ned.jpg'
import Button from '../../Button/button'

const Passes = () => {
  return (
   
    <div className='' style={{ backgroundImage:`url(${pass})`,
    backgroundRepeat:"",backgroundSize:"contain"}}>
    <div className='pt5 pl5 white lh-title'>
    <h1>View Passes  We've Made<br/> Available For You</h1>
  
    <div className='pt4'>
    <Button name="View Passes"/>
    </div>
    </div>
    </div>
    
 
  )
}

export default Passes