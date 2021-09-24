import React from 'react';
import './TextWithImage.scss'
import {Container} from "../Container/Container";
import {Typography} from "../Typography/Typography";
import {Tabs} from "../Tabs/Tabs";
import {tabsData} from "../../fakeJson/fakeJson";
import {Slider} from "../Slider/Slider";
import {Slide} from "../Slider/Slide";
import {Card} from "../Card/Card";

export const TextWithImage = () => {

  return (
    <section className='text-with-image'>
      <Container>
        <div className='text-with-image__box'>
          <Typography mixin='text-with-image__title' heading xxlFontSize>
            Anthro Design Services
          </Typography>

          <Typography mixin='text-with-image__sub-title' heading mdFontSize>
            Let's make your decorating dreams come true — from the cozy comfort of your home.
          </Typography>

          <Tabs data={tabsData}/>

          <Slider>
            {tabsData.map((data) =>
              <Slide>
                <Card slider={true} {...data}/>
              </Slide>
            )}
          </Slider>
        </div>
      </Container>
    </section>
  );
};