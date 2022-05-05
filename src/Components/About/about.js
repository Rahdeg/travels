import React from 'react'
import apple from './apple-pay-logo-svgrepo-com 1.jpg'
import group from './Group (1).jpg'
import gpr from './Group.jpg'
import master from './mastercard-2-logo-svgrepo-com 1.jpg'
import vec from './Vector (2).jpg'


const About = () => {
  return (
    <div className='bg-white pt5 pb3'>
    <div>
    <section class="mw8 mw8-ns center bg-white pa2 ph3-ns h4">
    <div class="cf ">
    <div class="fl w-20 tc  bg-white-05 ">
     <h4><img src={group} alt='m' className='pl2'/></h4>
    </div>
    <div class="fl w-20 tc  bg-white-10 ">
    <h4><img src={apple} alt='m' className='pl2'/></h4>
    </div>
    <div class="fl w-20 tc  bg-white-05">
    <h4><img src={vec} alt='m' className='pl2'/></h4>
    </div>
    <div class="fl w-20 tc  bg-white-10">
    <h4><img src={gpr} alt='m' className='pl2'/></h4>
    </div>
    <div class="fl w-20 tc  bg-white-10">
    <h4><img src={master} alt='m' className='pl2'/></h4>
    </div>
  </div>
  
</section>
    </div>
    <div className='tc pt4'>
    <h1 className='lh-title'>Creating the best <span className='blue'>ice-cold!</span>experience <br/>you would never forget</h1>
    <p className='f6 lh-copy'>Would you explore nature paradice in the world,find the <br/>best destination in the world with us</p>
    <h1 className='f2 lh-title pt5 pb3'>View Regions available</h1>
    </div>
    </div>
  )
}

export default About