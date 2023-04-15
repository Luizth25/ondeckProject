import * as s from "./styles";
import { TErrorMessageProps } from "./types";

export const ErrorMessage = ({ message }: TErrorMessageProps) => (
  <s.ErrorMessage>{message}</s.ErrorMessage>
);

export default ErrorMessage;
