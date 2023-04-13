import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  box-sizing: border-box;
  background: #1e1e26;
  margin: auto;
  align-items: center;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 450px;
  padding: 36px 0 31px 0;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 61px;
  list-style: none;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px; 
  color: #ffffff;
`;

export const MainLogo = styled.img`
  width: 114px;
  height: 72px;
  margin-left:27px;
  margin-bottom: 20px;
`;

export const Links = styled.a`
  color: inherit;
  text-decoration:none;
`;


