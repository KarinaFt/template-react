import React from 'react';
import {Navigation} from '../Navigation/Navigation';
import {Logo} from '../Logo/Logo';
import './Header.scss'
import {Container} from "../Container/Container";
import {AnnouncementBar} from "../AnnouncementBar/AnnouncementBar";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";

export const Header = () => {

  return (
    <header className='header'>
      <AnnouncementBar/>
      <Container>
        <div className='header__box'>
          <Logo/>
          <Navigation burgerMenu='false'/>
        </div>
        <BurgerMenu/>
      </Container>
    </header>
  );
};
