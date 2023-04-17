import React from "react";
import MainHeader from "../home/Header/Header";
import { MainContent } from "./Main_Content/Main_Content";
import {Footer} from '../home/Footer/Footer';

function Home() {
  return (
    <div>
      <MainHeader />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
