import React from 'react'
import grp1 from './Group 44 (1).jpg'
import grp2 from './Social (1).jpg'
import grp3 from './Social (2).jpg'
import grp4 from './Social.jpg'

const Footer = () => {
  return (
    <div className='flex'>
    <div className='ml5 mt5'>
    <img src={grp1} alt='d'/>
    <h1 className='lh-title'>Artic Travels</h1>
    <p className='lh-copy'>Book your trip in minutes, get full<br/>control for much longer </p>
    <div className='flex'>
    <img src={grp2} alt='d'/>
    <img src={grp3} alt='d'/>
    <img src={grp4} alt='d'/>
    </div>
    <p className='pt5'>@ 2022 Arctic Travel- All right reserved </p>
    </div>

    <div className='ml7 mt5 ph6'>
    <div class="pa4">
  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th class="fw6  b--black-20 tl pb3 pr6 bg-white">COMPANY</th>
          <th class="fw6  b--black-20 tl pb3 pr6 bg-white">CONTACT</th>
          <th class="fw6  b--black-20 tl pb3 pr6 bg-white">MORE</th>
         
        </tr>
      </thead>
      <tbody class="lh-copy">
        <tr>
          <td class="pv3 pr5  b--black-20">About</td>
          <td class="pv3 pr5  b--black-20">FAQ</td>
          <td class="pv3 pr5  b--black-20">Airlines</td>
          
        </tr>
        <tr>
          <td class="pv3 pr5  b--black-20">Careers</td>
          <td class="pv3 pr5 b--black-20">Press</td>
          <td class="pv3 pr5  b--black-20">Airfees</td>
          
        </tr>
        <tr>
          <td class="pv3 pr5  b--black-20">Mobile</td>
          <td class="pv3 pr5  b--black-20">Affiliates</td>
          <td class="pv3 pr5  b--black-20">Lowfare Tips</td>
          
        </tr>
        
      
      </tbody>
    </table>
  </div>
</div>
<div className='flex mt4 ml4'>
    <p>Privacy Policy</p>
    <p className='ml6'>Terms of use</p>
    </div>

    </div>
    
    
    </div>
  )
}

export default Footer