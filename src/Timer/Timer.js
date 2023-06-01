import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
  const [seconds, setSeconds] = useState(5* 60);
 const navigation =useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if(seconds ===-1){
        alert("times up!")
        navigation("/");
    window.location.reload(false);

    }else{
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;}
  };

  return (
    <div>
      <h1> {formatTime(seconds)}</h1>
    </div>
  );
};

export default Timer;






