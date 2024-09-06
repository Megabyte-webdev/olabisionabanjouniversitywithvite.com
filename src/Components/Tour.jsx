import React, { useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import Video from './Video'
const Tour = () => {
  const [play, setPlay]= useState(false);
  return (
         <section className={`container tour${play?' active':''}`}>
            <span>Check Out</span>
            <h2>Olabisi Onabanjo University</h2>
            <Video playState={play} className="video" />
            <button className="primary-btn" onClick={()=>setPlay(!play)}><a>
              {
                play? <FaPause className='icon' style={{margin: "0", marginRight: "5px"}} />:<FaPlay className='icon' style={{margin: "0", marginRight: "5px"}} />
              } Take a Tour</a> </button>
        </section>
  )
}

export default Tour