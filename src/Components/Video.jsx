import React, { useEffect, useRef } from 'react'
import assets from '../assets/assets';
const Video = ({playState}) => {
  const myVid =useRef();
  useEffect(()=>{
    
  playState ? myVid.current.play() : myVid.current.pause();
  },[playState])
    return <video ref={myVid} loop><source src={assets.oou_vid}></source></video>;
}

export default Video