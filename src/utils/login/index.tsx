import { TLoginProps } from "./types";

export const login = ({ email, password }: TLoginProps) => {
  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "password123" && !!email) {
        resolve({ message: "success" });
      }
      reject("e-mail ou senha incorretos");
    }, delay);
  });
};
