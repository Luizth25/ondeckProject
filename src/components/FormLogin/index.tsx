import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../utils/login";

import ButtonLogin from "../Button/ButtonLogin";
import Checkbox from "../Inputs/Checkbox";
import InputEmail from "../Inputs/InputEmail";
import InputPassword from "../Inputs/InputPassword";
import Link from "../Link";
import Title from "../Title";

import * as s from "./styles";
import LoadingButton from "../FormLogin/LoadingButton";

const FormLogin = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userLogin = () => {
    setErrorMessage("");
    setLoading(true);
    login({ email: userEmail, password: userPassword })
      .then(() => {
        alert("login realizado com sucesso!!");
        navigate("/home");
      })
      .catch((error) => {
        setErrorMessage(`${error}`);
      })
      .finally(() => {
        setUserEmail("");
        setUserPassword("");
        setLoading(false);
      });
  };

  const handleClick = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    userLogin();
  };

  return (
    <s.FormContainer onSubmit={handleClick}>
      <s.MainContainer>
        <Title
          title="Faça seu Login"
          subTitle="Entre com suas informações de cadastro"
        />
        <InputEmail
          label="E-mail"
          placeholder="Digite seu e-mail"
          type="email"
          value={userEmail}
          onChange={({ currentTarget: { value } }) => setUserEmail(value)}
        />
        <InputPassword
          label="Senha"
          placeholder="Digite sua senha"
          value={userPassword}
          onChange={({ currentTarget: { value } }) => setUserPassword(value)}
        />
        {errorMessage ? <s.ErrorMessage>{errorMessage}</s.ErrorMessage> : null}
        <s.ContainerCheckboxInput>
          <Checkbox label="Lembre-me" type="checkbox" />
          <Link label="Esqueci minha senha" href="/" />
        </s.ContainerCheckboxInput>
        <s.ButtonContainer>
          {loading ? (
            <LoadingButton />
          ) : (
            <ButtonLogin label="ENTRAR" disabled={loading} />
          )}
          <s.Paragraph>
            Não tem uma conta? <Link label="Registre-se" href="/register" />
          </s.Paragraph>
        </s.ButtonContainer>
      </s.MainContainer>
    </s.FormContainer>
  );
};

export default FormLogin;
