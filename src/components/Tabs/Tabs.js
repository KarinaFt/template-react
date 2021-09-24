import React, {useState} from "react";
import './Tabs.scss'
import {Typography} from "../Typography/Typography";
import {Card} from "../Card/Card";

export const Tabs = (props) => {
  const [visibleTab, setVisibleTab] = useState(props.data[0].id)

  const titles = props.data.map((item) => {

    return <li onClick={() => setVisibleTab(item.id)}
               className={visibleTab === item.id ? "tabs__titles-item tabs__titles-item--active" : "tabs__titles-item"}>
      <Typography mixin='tabs__title' xlFontSize>{item.title} </Typography></li>
  })
  const contentCard = props.data.map((item) => {

    return <li className='card__content-item' style={visibleTab === item.id ? {} : {display: 'none'}}>
      <Typography mixin='card__content-title' xlFontSize heading>{item.title} </Typography>
      <Typography mixin='card__content' mdFontSize heading>{item.content} </Typography></li>
  })
  const imageCard = props.data.map((item) => {

    return <li className='card__images-item' style={visibleTab === item.id ? {} : {display: 'none'}}>
      <img alt={item.image} className='card__image' src={item.image}/>
    </li>
  })

  return (
    <div className="tabs">
      <ul className="tabs__titles-list">
        {titles}
      </ul>

      <Card slider={false} image={imageCard} content={contentCard}/>
    </div>
  )
};