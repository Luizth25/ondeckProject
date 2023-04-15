import LoadingButton from "../LoadingButton";
import ButtonLogin from "../../../Button/ButtonLogin";
import Checkbox from "../../../Inputs/Checkbox";
import Link from "../../../Link";

import * as s from "./styles";
import * as t from "./types";

const LoginButton = ({ loading }: t.TLoginButtonProps) => {
  return (
    <>
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
    </>
  );
};

export default LoginButton;
