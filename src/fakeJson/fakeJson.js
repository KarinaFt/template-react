import React from "react";
import picture from '../assets/images/pic-1.png'
import picture_second from '../assets/images/pic-2.png'
import picture_third from '../assets/images/pic-3.png'
import picture_tab from '../assets/images/pic-4.png';
import picture_tab_second from '../assets/images/pic-5.png';
import picture_tab_third from '../assets/images/pic-6.png';

export const tabsData = [{
  id: '11',
  title: 'Morningside Wall Art',
  image: picture,
  content: <><p>Style No. 60662590;</p>
    <p>Color Code: Liven up an entryway or space above a mantelpiece with this beautiful piece of art that captivates
      any wall with its vibrant color and unique composition.</p></>
}, {
  id: '12',
  title: 'Out In Nature Wall Art',
  image: picture_second,
  content: <><p>Style No. 60662590;</p>
    <p>Update a modern space with this sophisticated work of art that features an abstract composition by artist Eve
      Fairwell.</p></>
}, {
  id: '13',
  title: 'Rose Transition Wall Art',
  image: picture_third,
  content: <><p>Style No. 60662590;</p>
    <p>Featuring hand-embellished details, this work of art by Maeve Harris offers an abstract focal point perfectly
      suited for a modern or contemporary interior.</p></>
}]

export const tabsContent = [{
  id: '14',
  title: 'Florrie Durand Swivel Desk Chair',
  image: picture_tab,
  content: 'Featuring a 360-degree swivel seat set upon tapered ash wood legs, this desk chair provides optimal functionality for a home office or workspace.\n' +
    '\n' +
    'For ordering assistance and more, please contact us. For aesthetic advice and tips to help decorate your space, enjoy our complimentary home styling services.'
}, {
  id: '15',
  title: 'Palmer Desk',
  image: picture_tab_second,
  content: 'Perched upon cast iron wishbone legs, this fumed oak desk offers a sleek, minimalist-meets-industrial workspace for your home.\n' +
    '\n' +
    'For ordering assistance and more, please contact us. For aesthetic advice and tips to help decorate your space, enjoy our complimentary home styling services.'
}, {
  id: '16',
  image: picture_tab_third,
  title: 'Florian Desk',
  content: 'Simple, yet rich in detail, this desk features a grained oak facade with a subtle weathered finish, brass-finished legs, and timeless leather pulls'
}];
