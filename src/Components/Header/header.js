import React from 'react'
import loogo from './logo1.jpg'


const Header = () => {
  return (
    <div className='mb2'>
    <nav className="dib dt-l w-100 border-box pa3 ph5-l Poppins white items-center justify-center ">
  <div className=" dtc-l v-mid mid-gray link dim w-100 w-75-l tc tl-l mb2 mb0-l ">
   <a className='mr5 Poppins tc ' href="u" title="Home"><img src={loogo} class="dib w2 h2 br-100 mb0" alt="S"/>
   <span className='pl3 tc f3 lh-title white'>Artic Travels</span></a> 
    <a className="link dim Poppins white f6 f5-l dib mr3 mr4-l" href="u" title="Home">About Us</a>
    <a className="link dim Poppins white f6 f5-l dib mr3 mr4-l" href="u" title="How it Works">Support</a>
    <a className="link dim Poppins white f6 f5-l dib mr3 mr4-l" href="u" title="Blog">Language</a>
    <a className="link dim Poppins white f6 f5-l dib mr3 mr4-l" href="u" title="Press">Press</a>
    </div>

  <div class="db dtc-l v-mid w-100 w-25-l tc tr-l  ">
    <a class="link dim  f6 f5-l dib ba br3 pv2 ph4 bg-white black" href="u" title="Contact">Contact</a>
  </div>
</nav>
    </div>
  )
}

export default Header