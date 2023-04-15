import React from "react";
import { Header, HeaderList, NavBar, MainLogo, Links } from "./Style.Header";
import projectLogo from "../../../assets/images/projectLogo.svg"
import { GlobalStyle } from "../../Styles/General_CSS";


function MainHeader() {
  return (
    <Header>
      <GlobalStyle />
      <MainLogo src={projectLogo} />
      <NavBar>
        <HeaderList>
          <li>
            <Links href="/register">Registre-se</Links>
          </li>
          <li>
            <Links href="/login">Login</Links>
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