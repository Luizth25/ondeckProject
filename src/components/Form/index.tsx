import { useState } from "react";
import { useForm } from "react-hook-form";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import RegisterButton from "./components/RegisterButton";
import LoginButton from "./components/LoginButton";
import Header from "../Header";
import Title from "../Title";
import ErrorMessage from "../ErrorMessage";

import * as s from "./style";
import * as t from "./types";

const required = "Esse campo é obrigatório";

const Form = ({ newUser, onSubmit, loading, isRegister }: t.TFromProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const schema = yup.object({
    teste: yup.boolean(),
    email: yup
      .string()
      .email("O email deve ser um email valido")
      .required(required),
    password: yup.string().required(required),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "As senha precisam ser iguais"),
  });

  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Header />
      <s.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Title
          title={newUser ? "Registre-se" : "Faça seu Login"}
          subTitle={
            newUser
              ? "Digite seus dados para realizar seu registro"
              : "Entre com suas informações de cadastro"
          }
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
        {newUser ? (
          <s.InputContainer>
            <s.label>Confirme sua Senha</s.label>
            <s.Input
              type={isVisible ? "text" : "password"}
              placeholder="Digite sua senha"
              required={newUser}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message ? (
              <ErrorMessage message={`${errors.confirmPassword.message}`} />
            ) : null}
          </s.InputContainer>
        ) : null}
        {newUser ? (
          <RegisterButton
            isRegister={isRegister}
            loading={loading}
            newUser={newUser}
          />
        ) : (
          <LoginButton loading={loading} />
        )}

        <ToastContainer transition={Flip} />
      </s.FormContainer>
    </>
  );
};

export default Form;
