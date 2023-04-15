export type TFromProps = {
  onSubmit: (values: TUserLoginInfo) => void;
  newUser: boolean;
  loading: boolean;
  isRegister: boolean;
};
type TUserLoginInfo = {
  email: string;
  password: string;
};
