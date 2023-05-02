import React from "react";
import "./App.css";
import Header from "./app/components/Header";
import { ForPicAndWrite } from "./app/screens/homepages/companent/ForPicAndWrite/ForPicAndWrite";
import { Container } from "./app/screens/homepages/companent/container/Container";
import { About } from "./app/screens/homepages/companent/About/About";
import { Footer } from "./app/components/Footer";
import { ForWriteAndPic } from "./app/screens/homepages/companent/ForWriteAndPic/ForWriteAndPic";
import { Grid } from "./app/screens/homepages/companent/Grid/Grid";
import { WhatPost } from "./app/screens/homepages/companent/WhatPost/WhatPost";
import Work from "./app/screens/homepages/companent/Work/Work";
function App() {
  return (
    <>
      <Header />
      <main>
        <Container />
        <About/>
        <ForPicAndWrite/>
        <ForWriteAndPic/>
        <Grid/>
        <Work/>
        <WhatPost/>
      </main>
      <Footer/>
    </>
  );
}
export default App;
