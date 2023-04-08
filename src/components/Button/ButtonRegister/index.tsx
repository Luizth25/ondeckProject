import { TButtonProps } from "./types";
import * as s from "./styles";
import { useNavigate } from "react-router-dom";

const ButtonRegistrar = ({ disabled, label }: TButtonProps) => {
  const navigate = useNavigate();
  return (
    <s.ButtonRegistrar
      disabled={disabled}
      onClick={() => navigate("/register")}
    >
      {label}
    </s.ButtonRegistrar>
  );
};

export default ButtonRegistrar;
