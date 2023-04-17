import styled from "styled-components";
import { Colors } from "../../Styles/General_CSS";

export const FooterBox = styled.footer`
  box-sizing: border-box;
  max-width: 1920px;
  height: 170px;
  background: ${Colors.primaryColor};
  display: flex;
  justify-content: end;
  padding: 70px 43px;
  gap: 60px;

`;

export const SocialMedia = styled.div`
  display:flex;
  gap: 60px;
`;
