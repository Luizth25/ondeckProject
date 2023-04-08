import { TButtonProps } from "./types";
import * as s from "./styles";

const ButtonLogin = ({ disabled, label, onClick }: TButtonProps) => (
  <s.ButtonLogin disabled={disabled} onClick={onClick}>
    {label}
  </s.ButtonLogin>
);

export default ButtonLogin;
