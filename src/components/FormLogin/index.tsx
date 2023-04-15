import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import ButtonLogin from "../Button/ButtonLogin";
import Checkbox from "../Inputs/Checkbox";
import Link from "../Link";
import Title from "../Title";
import ErrorMessage from "../ErrorMessage";

import * as s from "./styles";
import LoadingButton from "../FormLogin/LoadingButton";

const required = "Esse campo é obrigatório";

const FormLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("O email deve ser um email valido")
        .required(required),
      password: yup.string().required(required),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const errorToast = (message: string) =>
    toast.error(message, {
      theme: "colored",
    });

  const handleClickLogin = (value: FormData) => {
    setLoading(true);
    axios
      .post("http://localhost:3001/login", {
        email: value.email,
        password: value.password,
      })
      .then((response) => {
        alert(`O email ${response.data} foi logado com sucesso`);
        navigate("/home");
      })
      .catch((e) => {
        errorToast(e.response.data.msgError);
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <s.FormContainer onSubmit={handleSubmit(handleClickLogin)}>
      <s.MainContainer>
        <Title
          title="Faça seu Login"
          subTitle="Entre com suas informações de cadastro"
        />

        <s.InputContainer>
          <s.label>Email</s.label>
          <s.IconContainer>
            <s.Input placeholder="Digite seu email" {...register("email")} />
            <s.Icon size={24} />
          </s.IconContainer>
          {errors.email?.message ? (
            <ErrorMessage message={`${errors.email.message}`} />
          ) : null}
        </s.InputContainer>

        <s.InputContainer>
          <s.label>Senha</s.label>
          <s.IconContainer>
            <s.Input
              type={isVisible ? "text" : "password"}
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {isVisible ? (
              <s.CiRead
                size={24}
                onClick={() => setIsVisible((prevState) => !prevState)}
              />
            ) : (
              <s.CiUnread
                size={24}
                onClick={() => setIsVisible((prevState) => !prevState)}
              />
            )}
          </s.IconContainer>
          {errors.password?.message ? (
            <ErrorMessage message={`${errors.password.message}`} />
          ) : null}
        </s.InputContainer>

        <s.ContainerCheckboxInput>
          <Checkbox label="Lembre-me" type="checkbox" />
          <Link label="Esqueci minha senha" href="/" />
        </s.ContainerCheckboxInput>
        <s.ButtonContainer>
          {loading ? (
            <LoadingButton />
          ) : (
            <>
              <ButtonLogin label="ENTRAR" disabled={loading} />
            </>
          )}
          <s.Paragraph>
            Não tem uma conta? <Link label="Registre-se" href="/register" />
          </s.Paragraph>
        </s.ButtonContainer>
      </s.MainContainer>
      <ToastContainer transition={Flip} />
    </s.FormContainer>
  );
};

export default FormLogin;
