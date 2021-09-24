import React, {useState} from "react";
import './TabsContent.scss'

export const TabsContent = (props) => {
  const [visibleTab, setVisibleTab] = useState(props.data[0].id)

  const contentTab = props.data.map((item) => {
    return <li className='tabs-content__content-item'>
      <p onClick={() => setVisibleTab(item.id)}
         className={visibleTab === item.id ? "tabs-content__titles tabs-content__titles--active" : "tabs-content__titles"}>{item.title} </p>
      <p className='tabs-content__content' style={visibleTab === item.id ? {} : {display: 'none'}} xlFontSize
         heading>{item.content} </p>
    </li>
  })

  const imageTab = props.data.map((item) => {
    return <li className='tabs-content__image-item' style={visibleTab === item.id ? {} : {display: 'none'}}>
      <img alt={item.image} className='tabs-content__image' src={item.image}/>
    </li>
  })

  return (
    <div className="tabs-content">
      <div className='tabs-content__box'>
        <ul className="tabs-content__images-list">
          {imageTab}
        </ul>
        <ul className="tabs-content__content-list">
          {contentTab}
        </ul>
      </div>
    </div>
  )
};