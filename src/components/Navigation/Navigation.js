import React from 'react';
import './Navigation.scss'
import cart from '../../assets/images/cart.svg'

export const Navigation = (props) => {
  const burgerMenu = props.burgerMenu;

  let navBar = [{
    link: '#',
    title: 'Furniture'
  }, {
    link: '#',
    title: 'About'
  }, {
    link: '#',
    title: 'Contact us'
  }, {
    link: '#',
    title: 'Sign In'
  }];

  const burgerNavBar = {
    link: '#',
    title: 'Menu'
  };

  if (burgerMenu === 'true') {
    navBar.unshift(burgerNavBar)
  }

  const classes = burgerMenu === 'true' ? 'navigation__burger' : 'navigation__link';
  const render = navBar.map((nav, n) => {

    return (
      <span key={n} className="navigation">
                    <a href={nav.link} key={n} className={classes}>
                        {nav.title}
                    </a>
                </span>)
  });

  return (
    <>
      {render}
      <span className="navigation">
          <a href='/'>
              <img alt="pic" className='navigation__cart' src={cart}/>
          </a>
         </span>
    </>
  )
};
