import Form from "..";
import useRegisterUser from "./hook";

const FormRegister = () => {
  const { isLoading, handleClickRegister, isRegister } = useRegisterUser();

  return (
    <Form
      isRegister={isRegister}
      loading={isLoading}
      newUser
      onSubmit={handleClickRegister}
    />
  );
};

export default FormRegister;
