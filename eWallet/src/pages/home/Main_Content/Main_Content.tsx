import { Card, LogoAndRegister, MainContentHome, Button, CompanyName } from "./Style.Main_Content";
import boletoIcon from "../../../assets/images/boleto.svg";
import cofreIcon from "../../../assets/images/PiggyBank.svg";
import transferIcon from "../../../assets/images/transfer.svg";
import { GlobalStyle } from "../../Styles/General_CSS";

export const MainContent = () => {
  return (
    <MainContentHome>
      <GlobalStyle />
      <LogoAndRegister>
        <div>
          <CompanyName>E-Wallet</CompanyName>
        </div>
        <div>
          <Button>Registre-se</Button>
        </div>
        <Card>
          <img src={boletoIcon} alt="" width="44" height="38" />
          <p>
            Pague seus boletos
            <br /> Através de cartão
            <br /> de crédito
          </p>
        </Card>
      </LogoAndRegister>
      <Card>
        <img src={transferIcon} alt="" width="44" height="38" />
        <p>
          Transfira Saldo <br /> entre contas
        </p>
      </Card>
      <Card>
        <img src={cofreIcon} alt="" width="44" height="38" />
        <p>
          Não deixe seu dinheiro <br /> parado <br /> Invista
        </p>
      </Card>
    </MainContentHome>
  );
};
