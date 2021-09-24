import React from "react";
import {Header} from "./components/Header/Header";
import {TextWithImage} from "./components/TextWithImage/TextWithImage";
import {TabsSection} from "./components/TabsSection/TabsSection";
import {Text} from "./components/Text/Text";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Text/>
        <TextWithImage/>
        <TabsSection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
