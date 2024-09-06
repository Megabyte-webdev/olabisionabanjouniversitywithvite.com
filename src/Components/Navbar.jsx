import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import assets from '../assets/assets'
import faculties from '../faculties.json'
import administration from '../administration.json'
import admission from '../admissions.json'
import Notifications from './Notifications';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const nav=useRef();
  const brief=useRef();
  // alert(brief.current.scrollWidth)
   let lastScrollPos = 0;
  
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      let currentScrollPos = window.scrollY ;
      window.scrollY > 100 ? setIsScrolled(true): setIsScrolled(false);
      window.scrollY > 100 && currentScrollPos > lastScrollPos ? nav.current.classList.add("trans") : nav.current.classList.remove("trans");
      window.addEventListener('scrollend', () => {
        lastScrollPos = currentScrollPos;
      })
    })
  },[])
  
  return (
    <nav ref={nav} className={`nav${menu ? ' responsive':''} ${isScrolled ? ' sticky':''}`}  >
      <div className="nav-main">
        <div className="logo">
          <img src={assets.logo} alt="logo" />
        </div>
        <article ref={brief} className="briefs">
          {/* <h5 className='title'> News</h5> */}
          <ul>
            <Notifications />
          </ul>
        </article>
        <div>
        <button>Contact Us</button>
        </div>
      </div>
      <ul className="menus">
      <div className='menu-toggle' onClick={() => setMenu(!menu)}>
        {
          menu ? <FaTimes /> : null
        }
      </div>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <Dropdown subNav={administration} title="Administration" link="/administration" />
        <Dropdown subNav={admission} title="Admissions" link="/admission" />
        <Dropdown subNav={faculties} title="Faculties" link="/all-faculties" /> 
        <Dropdown subNav={faculties} title="Library" link="/library" />
        
      </ul>
      <div className='menu-toggle' onClick={() => setMenu(!menu)}>
        {
          menu ? null: <FaBars />
        }
      </div>
    </nav>
  )
}

export default Navbar