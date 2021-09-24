import React from "react";
import './TabsSection.scss'
import {Typography} from "../Typography/Typography";
import {Container} from "../Container/Container";
import {TabsContent} from "../TabsContent/TabsContent";
import {tabsContent} from "../../fakeJson/fakeJson";

export const TabsSection = () => {

  return (
    <section className='tabs-section'>
      <Container>
        <div className='tabs-section__box'>
          <Typography mixin='tabs-section__title' heading xxlFontSize>Anthro At Your Service</Typography>

          <Typography mixin='tabs-section__sub-title' heading mdFontSize>
            We're here to help! Discover guides, resources, styling tips & more.</Typography>
        </div>

        <TabsContent data={tabsContent}/>
      </Container>
    </section>)
};