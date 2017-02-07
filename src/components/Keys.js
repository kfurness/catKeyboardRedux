import React from 'react';

const Keys = ({ img, letter }) => {
  return (
    <div>
      <img src={img} alt="Picture of {img}"/>
      <h3>{letter}</h3>
    </div>
  )
}

export default  Keys;
