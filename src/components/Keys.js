import React from 'react';

const Keys = ({ img, sound, letter }) => {
  return (
    <div>
      <img src={img} alt="Picture of {img}"/>
      <h3>{letter}</h3>
      <audio controls src={sound}></audio>
    </div>
  )
}

export default  Keys;
