import React from 'react'
import Button from '../../Button/button'
import Header from '../Header/header'
import Info from '../Info/info'
import loogo from './bgnew.jpg'

const Home = () => {
  return (
    <div>
    <div class="  " style={{ backgroundImage:`url(${loogo})`,
    backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>
    <Header/>
    <div className='pt5 pl5 white lh-title'>
    <h1>Plan the Perfect Winter Trip</h1>
    <p>Easily plan your ideal skit trip from home with the</p>
    <p> help of proffessionals</p>
    <div className='pt4'>
    <Button name="Book Here"/>
    </div>
    </div>
    <div className='mt6 '>
    <Info/>
    </div>
    </div>
    
    </div>
  )
}

export default Home