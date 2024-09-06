import React, { useRef, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Dropdown = ({subNav, title, link}) => {
    const [drop, setDrop]=useState(false);
    const dropList=useRef();
    const dropStyle={"--drop-height": `${dropList.scrollHeight}`};
  return (
    <li className={`dropdown${drop ? ' active':''}`} onMouseDown={()=> setDrop(!drop)}>{title} <FaCaretDown/>
    <NavLink to={link}>
    <ul ref={dropList} className="drop-list" style={ dropStyle } >
            {
              subNav.map(({title}, index)=>{
                return <li key={index}>{title}</li>
              })
            }
        </ul>
    </NavLink>
        </li>
  )
}

export default Dropdown