import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import ButtonLogin from "../Button/ButtonLogin";
import Header from "../Header";
import Title from "../Title";
import ErrorMessage from "../ErrorMessage";
import LoadingButton from "./LoadingButton";

import * as s from "./styles";

const required = "Esse campo é obrigatório";

const FormRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("O email deve ser um email valido")
        .required(required),
      password: yup.string().required(required),
      confirmPassword: yup
        .string()
        .required(required)
        .oneOf([yup.ref("password"), ""], "As senha precisam ser iguais"),
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

  const successToast = (message: string) =>
    toast.success(message, {
      theme: "colored",
    });

  const handleClickRegister = (values: FormData) => {
    setIsLoading(true);
    axios
      .post("http://localhost:3001/register", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        successToast(response.data.msg);
        setIsRegister(true);
      })
      .catch((e) => {
        errorToast(e.response.data.msg);
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Header />
      <s.FormContainer onSubmit={handleSubmit(handleClickRegister)}>
        <Title
          title="Registre-se "
          subTitle="Digite seus dados para realizar seu registro"
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

        <s.InputContainer>
          <s.label>Confirme sua Senha</s.label>
          <s.Input
            type={isVisible ? "text" : "password"}
            placeholder="Digite sua senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message ? (
            <ErrorMessage message={`${errors.confirmPassword.message}`} />
          ) : null}
        </s.InputContainer>

        <s.ButtonContainer>
          {isLoading ? <LoadingButton /> : <ButtonLogin label="Enviar" />}
          {isRegister ? (
            <ButtonLogin
              label="ir para login"
              onClick={() => navigate("/login")}
            />
          ) : null}
        </s.ButtonContainer>
        <ToastContainer transition={Flip} />
      </s.FormContainer>
    </>
  );
};

export default FormRegister;
