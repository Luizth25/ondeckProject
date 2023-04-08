import Header from "../../components/Header";
import FormLogin from "../../components/FormLogin";

import * as s from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <s.Container>
        <FormLogin />
      </s.Container>
    </>
  );
};

export default Login;
