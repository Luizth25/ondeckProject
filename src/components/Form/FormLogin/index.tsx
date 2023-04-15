import Form from "..";

import useLoginUser from "./hook";

const FormLogin = () => {
  const { handleClickLogin, isLoading } = useLoginUser();

  return (
    <Form
      loading={isLoading}
      isRegister={false}
      newUser={false}
      onSubmit={handleClickLogin}
    />
  );
};

export default FormLogin;
