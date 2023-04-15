import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TUserRegisterInfo } from "./types";
import { userRegisterService } from "../../../../service";

export default function useRegisterUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const errorToast = (message: string) =>
    toast.error(message, {
      theme: "colored",
    });

  const successToast = (message: string) =>
    toast.success(message, {
      theme: "colored",
    });
  const handleClickRegister = (values: TUserRegisterInfo) => {
    userRegisterService(values)
      .then((response) => {
        successToast(response.msg);
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
  return { isLoading, handleClickRegister, isRegister };
}
