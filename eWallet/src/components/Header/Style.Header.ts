import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr;
  box-sizing: border-box;
  background: #1e1e26;
  margin: auto;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 10%;
  padding: 2.25em 0;
  width: 80%;

  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
    width: 100%;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 2em;
  list-style: none;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 1.25em;
  color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5em;
    margin: 0;
    padding: 0;
  }
`;

export const MainLogo = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: 27px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 20%;
    margin-left: 0;
    margin-bottom: 0.75em;
  }
`;

export const Links = styled.a`
  color: inherit;
  text-decoration:none;
`;
