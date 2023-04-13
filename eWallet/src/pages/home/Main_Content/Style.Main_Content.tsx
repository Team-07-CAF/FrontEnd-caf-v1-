import styled from "styled-components";
import backGroundHomeImage from "../../../assets/images/backgroundHome.png";

export const MainContentHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-image: url(${backGroundHomeImage});
  width: 1920px;
  height: 760px;
`;

export const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  
`;
