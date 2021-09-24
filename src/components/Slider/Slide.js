import React from "react";
import './Slide.scss'

export const Slide = (props) => {
  const {children} = props;

  return (
    <div className='slide'>
      {children}
    </div>
  );
}
