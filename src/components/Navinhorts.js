import React from 'react'
import './Navinshorts.css'
import HamburgerDrawer from './HamburgerDrawer'
const Navinhorts = () => {
  return (
    <div className='nav'><div className='icon'><HamburgerDrawer/></div>
          <img style={{cursor:"pointer"}} src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height='80%' alt='logo' />
    </div>
  )
}

export default Navinhorts