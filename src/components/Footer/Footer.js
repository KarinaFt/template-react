import React from "react";
import {Container} from "../Container/Container";
import './Footer.scss'
import {SocialNetworks} from "../SocialNetworks/SocialNetworks";
import {Logo} from "../Logo/Logo";
import {Typography} from "../Typography/Typography";

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Typography mdFontSize mixin="footer__row">
          <ul className="footer__content">
            <li className="footer__title">HELP</li>
            <li className="footer__text">Support</li>
            <li className="footer__text">Sizing guide</li>
            <li className="footer__text">Create a return</li>
            <li className="footer__text">Virtual appointment</li>
          </ul>

          <ul className="footer__content">
            <li className="footer__title">COMPANY</li>
            <li className="footer__text">About</li>
            <li className="footer__text">Careers</li>
            <li className="footer__text">Privacy</li>
            <li className="footer__text">Locations</li>
          </ul>

          <ul className="footer__content">
            <li className="footer__title">Contact us</li>
            <SocialNetworks/>
          </ul>
        </Typography>

        <div className='footer__logo'>
          <Logo/>
        </div>
      </Container>
    </footer>)
};