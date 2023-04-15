import { api } from "../api";

import { TPostResponse, TUserLoginInfo } from "./types";

export const userRegisterService = ({
  email,
  password,
}: TUserLoginInfo): Promise<TPostResponse> =>
  api
    .post<TPostResponse>("/register", {
      email: email,
      password: password,
    })
    .then((response) => {
      return {
        msg: response.data.msg,
      };
    });

export const userLoginService = ({
  email,
  password,
}: TUserLoginInfo): Promise<TPostResponse> =>
  api
    .post<TPostResponse>("/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      return {
        msg: response.data.msg,
        msgError: response.data.msgError,
      };
    });
