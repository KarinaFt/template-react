import React from "react";
import './Card.scss'
import {Typography} from "../Typography/Typography";

export const Card = (props) => {
  const content = props.content;
  const image = props.image;

  const render = props.slider ?
    <>
      <ul className="card__content-list">
        <li className='card__content-item'>
          <Typography mixin='card__content-title' xlFontSize heading>{props.title} </Typography>
          <Typography mixin='card__content' mdFontSize heading>{props.content} </Typography></li>
      </ul>

      <ul className="card__images-list">
        <li className='card__images-item'>
          <img alt={props.image} className='card__image' src={props.image}/>
        </li>
      </ul>
    </>
    : <>
      <ul className="card__content-list">
        {content}
      </ul>

      <ul className="card__images-list">
        {image}
      </ul>
    </>

  return (
    <div className='card'>
      <div className='card__wrapper'>
        {render}
      </div>
    </div>
  )
};