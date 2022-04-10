import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.gif'

const Menu = () =>(
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#whatzhiroo'>Who we are</a></p>
  <p><a href='#why-us'>Why Us</a></p>
  <p><a href='#blog'>Blog</a></p>
  <p><a href='http://discord.gg/zhiroo'>Join our Discord Server</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='zhiroo__navbar'>
      <div className='zhiroo__navbar-links'>
        <div className='zhiroo_navbar-links_logo'>
          <a href='#'><img src={logo} alt="logo"/></a>
        </div>
        <div className='zhiroo__navbar-links__container'>
          <Menu />
        </div>
      </div>
      <div className='zhiroo__navbar-sign'>
          <p>Sign In</p>
          <button type='button' className=''>Sign Up</button>
      </div>
      <div className='zhiroo__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='zhiroo__navbar-menu_container scale-up-center'>
            <div className='zhiroo_navbar-menu_container-links'>
              <Menu/>
            </div>
            <div className='zhiroo__navbar-menu_container-links-sign'>
              <p>Sign In</p>
              <button type='button' className=''>Sign Up</button>
           </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar