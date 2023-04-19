import React from "react";
import MainHeader from '../../components/Header/Header';
import { MainContent } from "./Main_Content/Main_Content";
import {Footer} from '../../components/Footer/Footer';

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
