import AlternativeTo from "../../assets/AlternativeToLogo.svg";
import Capterrao2 from "../../assets/CapterraLogo.svg";
import Image from "../../assets/Perfil.png";

import ButtonRegistrar from "../Button/ButtonRegister";

import * as s from "./styles";

const Main = () => (
  <s.MainContainer>
    <s.InfoContainer>
      <s.Title>Ondeck é a sua ferramenta de teleconferência remota</s.Title>
      <s.Paragraph>
        Ondeck é um serviço que criptografa chamadas de vídeo para você e seu
        controle remoto equipe.
      </s.Paragraph>
      <ButtonRegistrar label="Registre-se" />
      <s.Container>
        <s.Paragraph>5.0 Avaliação com base em comentários de:</s.Paragraph>
        <img src={AlternativeTo} alt="AlternativeTo Logo" />
        <img src={Capterrao2} alt="Capterrao2 Logo" />
      </s.Container>
    </s.InfoContainer>
    <s.imageContainer>
      <img src={Image} alt="perfil" />
    </s.imageContainer>
  </s.MainContainer>
);

export default Main;
