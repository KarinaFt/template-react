import React from "react";
import './BoxSlider.scss'

export const BoxSlider = (props) => {
  const {children} = props;

  const renderBox = props.active ?
    <div className="box-slider" data-active={props.active}>
      {children}
    </div> : null

  return (
    <>
      {renderBox}
    </>
  );
}
