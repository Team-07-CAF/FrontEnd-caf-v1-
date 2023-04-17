import styled from "styled-components";
import backGroundHomeImage from "../../../assets/images/backgroundHome02.png";
import { Colors } from "../../Styles/General_CSS";

export const MainContentHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: end;
  justify-items: center;
  padding-bottom: 37px;

  background-image: url(${backGroundHomeImage});
  width: 1920px;
  height: 760px;
`;

export const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 17px;
  gap: 14px;
  width: 293px;
  height: 155px;
  background: ${Colors.bgPrimary};
  border-radius: 3px;
  color: ${Colors.white};

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.2px;
`;

export const LogoAndRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 153px;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${Colors.bgPrimary};
  border-radius: 37px;
  color: ${Colors.emphasyText};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

export const CompanyName = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: ${Colors.bgPrimary};
`;
