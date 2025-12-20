import React, { useRef } from 'react'

const Video = () => {

    const videoRef = useRef();

    const Play=()=>{
        videoRef.current.play();
    }
    const Pause=()=>{
      videoRef.current.pause();
    }
    const Forward=()=>{
      videoRef.current.currentTime = videoRef.current.currentTime+5;
    }
    const Rewind=()=>{
      videoRef.current.currentTime = videoRef.current.currentTime-5;
    }
  return (
    <div>
     <video ref = {videoRef} src = "https://www.w3schools.com/html/mov_bbb.mp4" /><br /><br />
     <button onClick={Play}>Play</button>
     <button onClick={Pause}>Pause</button>
     <button onClick={Forward}>Forward</button>
     <button onClick={Rewind}>Rewind</button>
    </div>
  )
}

export default Video
