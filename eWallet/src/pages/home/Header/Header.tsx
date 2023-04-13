import React from "react";
import { Header, HeaderList, NavBar, MainLogo, Links, MainContent } from "./Style.Header";
import projectLogo from "../../../assets/images/projectLogo.svg"
import { GlobalStyle } from "../../Styles/reset_Css";

function MainHeader() {
  return (
    <Header>
      <GlobalStyle />
      <MainLogo src={projectLogo} />
      <NavBar>
        <HeaderList>
          <li>
            <Links href="#">Registre-se</Links>
          </li>
          <li>
            <Links href="#">Login</Links>
          </li>
          <li>
            <Links href="#">Sobre</Links>
          </li>
        </HeaderList>
      </NavBar>
    </Header>

  );
}

export default MainHeader;