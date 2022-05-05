import React from 'react'
import Button from '../../Button/button'
import locate from './map-pin.jpg'
import arrow from './Vector (3).jpg'
import user from './user.jpg'
import date from './calendar.jpg'
// import vector from './Vector (4).jpg'

const Info = () => {
  return (
    <div className='mt5'>
    <section class="mw8 mw8-ns center bg-white pa2 ph3-ns ba br4 h4">
    <div class="cf ">
    <div class="fl w-20 tc  bg-white-05 ">
     <p><img src={locate} alt='m' className='pr2'/>LOCATION</p>
     <h4>Iceland<img src={arrow} alt='m' className='pl2'/></h4>
    </div>
    <div class="fl w-20 tc  bg-white-10  ">
    <p><img src={user} alt='m' className='pr2'/>PERSONS</p>
    <h4>4Persons<img src={arrow} alt='m' className='pl2'/></h4>
    </div>
    <div class="fl w-20 tc  bg-white-05">
    <p><img src={date} alt='m' className='pr2'/>CHECK IN</p>
    <h4>4 January 2022<img src={arrow} alt='m' className='pl2'/></h4>
    </div>
    <div class="fl w-20 tc  bg-white-10">
    <p><img src={locate} alt='m' className='pr2'/>CHECK OUT</p>
    <h4>4 January 2022 <img src={arrow} alt='m' className='pl2'/></h4>
    </div>
    <div class="fl w-20   bg-white-05 pt4 ">
    <Button name={'Book Trip'} />
    </div>
  </div>
  
</section>
    </div>
  )
}

export default Info