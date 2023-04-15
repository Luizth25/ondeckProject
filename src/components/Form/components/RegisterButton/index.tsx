import { useNavigate } from "react-router-dom";

import LoadingButton from "../LoadingButton";
import ButtonLogin from "../../../Button/ButtonLogin";

import * as t from "./types";
import * as s from "./styles";

const RegisterButton = ({
  isRegister,
  loading,
  newUser,
}: t.TRegisterButtonProps) => {
  const navigate = useNavigate();
  return (
    <s.ButtonContainer>
      {loading ? <LoadingButton /> : <ButtonLogin label="Enviar" />}
      {isRegister && newUser ? (
        <ButtonLogin label="ir para login" onClick={() => navigate("/login")} />
      ) : null}
    </s.ButtonContainer>
  );
};

export default RegisterButton;
