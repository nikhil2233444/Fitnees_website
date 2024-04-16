import React from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import './Header.css'
import { useState } from 'react'
import { Link } from 'react-scroll'

function Header() {

 const mobile =window.innerWidth<=768?true:false;
 const [manuOpened,setMenuOpened]=useState(false)





  return (
    <div className="header">
    <img src={Logo} alt="" className='logo'/>
   {
    manuOpened===false&&mobile===true ? (
      <div style={{backgroundColor:'var(--appColor',padding:'0.5rem',borderRadius:"5px"}}
        onClick={()=>setMenuOpened(true)}
      >
      <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}} />
      </div>
    ):(
      <ul className='header-manu'>
      <li ><Link onClick={()=>setMenuOpened(false)}
       to='header'
       span={true}
       smooth={true}
      > Home</Link></li>


      <li> <Link
      onClick={()=>setMenuOpened(false)}
      to='programs'
      span={true}
      smooth={true}
      >Program</Link> </li>


      <li onClick={()=>setMenuOpened(false)}>why us</li>
      <li>
      <Link
       onClick={()=>setMenuOpened(false)}
       to='plann'
      span={true}
      smooth={true}
      >Plans</Link>

      </li>


      <li ><Link
      onClick={()=>setMenuOpened(false)}
      to='testimonials'
      span={true}
      smooth={true}
      >Testimonials</Link></li>
       </ul>
    )}
   
    </div>
  )
}

export default Header
