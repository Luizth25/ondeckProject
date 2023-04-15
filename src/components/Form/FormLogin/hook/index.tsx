import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { userLoginService } from "../../../../service";

import { TUserLoginInfo } from "./types";

export default function useLoginUser() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const errorToast = (message: string) =>
    toast.error(message, {
      theme: "colored",
    });

  const handleClickLogin = (values: TUserLoginInfo) => {
    userLoginService(values)
      .then((response) => {
        navigate("/home");
      })
      .catch((e) => {
        errorToast(e.response.data.msgError);
        errorToast(e.response.data.msg);
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return { isLoading, handleClickLogin };
}
