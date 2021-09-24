import React from 'react';
import './AnnouncementBar.scss'

export const AnnouncementBar = () => {
  return (
    <div className='announcement-bar'>
      <span className='announcement-bar__text'> We’ve updated our policies </span>
      <a className='announcement-bar__anchor' href='/'> Learn more</a>
    </div>
  )
}