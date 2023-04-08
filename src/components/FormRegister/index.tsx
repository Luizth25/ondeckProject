import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ButtonLogin from "../Button/ButtonLogin";
import Header from "../Header";
import InputEmail from "../Inputs/InputEmail";
import InputPassword from "../Inputs/InputPassword";
import Title from "../Title";

import * as s from "./styles";

const FormRegister = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <Header />

      <s.FormContainer onSubmit={onSubmit}>
        <Title
          title="Registre-se "
          subTitle="Digite seus dados para realizar seu registro"
        />

        <InputEmail
          label="E-mail"
          placeholder="Digite seu E-mail"
          type="email"
          onChange={(ev) => setUserEmail(ev.currentTarget.value)}
          value={userEmail}
        />

        <InputPassword
          label="SENHA"
          placeholder="Digite sua senha"
          onChange={(ev) => setUserPassword(ev.currentTarget.value)}
          value={userPassword}
        />

        <InputPassword
          label="Confirmar senha"
          placeholder="Digite sua senha"
          onChange={(ev) => setConfirmPassword(ev.currentTarget.value)}
          value={confirmPassword}
        />

        <s.ButtonContainer>
          <ButtonLogin label="Enviar" />
        </s.ButtonContainer>
      </s.FormContainer>
    </>
  );
};

export default FormRegister;
