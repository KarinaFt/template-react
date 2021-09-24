import React from "react";
import './Text.scss'
import {Typography} from "../Typography/Typography";
import {Container} from "../Container/Container";

export const Text = () => {

  return (
    <section className='text'>
      <Container>
        <Typography mixin='text__title' heading xxlFontSize>
          Anthro At Your Service
        </Typography>

        <div className='text__content-wrapper'>
          <Typography mixin='text__content' heading mdFontSize>
            Our Story Anthropologie was founded by current URBN chairman and president Dick Hayne, having heard the plea
            of a friend. She had just moved to the suburbs of Philadelphia, and was dissatisfied with the shopping
            options available to her. Now a distance from Urban Outfitters—a brand she also was aging out of—there was a
            void in her life.
          </Typography>
          <Typography mixin='text__content' heading mdFontSize>
            Our customer is a creative-minded woman, who wants to look like herself, not the masses. She has a sense of
            adventure about what she wears, and although fashion is important to her, she is too busy enjoying life to
            be governed by the latest trends. To her, Anthropologie is a portal of discovery—a brush with what could be.
            A place for her to lose—and find—herself.
          </Typography>
          <Typography mixin='text__padding-reset text__content ' heading mdFontSize>
            Our product offering consists of women’s apparel and accessories, intimates, home furniture and décor,
            beauty and gifts. Each caters to the lifestyle of our five muses: soft & delicate; boho chic; easy cool;
            elegant classic; and modern sporty. Beauty and gifts. Each caters to the lifestyle of our five muses: soft &
            delicate; boho chic; easy cool;
            elegant classic; and modern sporty
          </Typography>
        </div>
      </Container>
    </section>)
};