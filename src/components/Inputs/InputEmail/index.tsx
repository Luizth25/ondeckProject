import * as s from "./styles";
import { TInputProps } from "./types";

const InputEmail = ({
  label,
  onChange,
  placeholder,
  type,
  value,
}: TInputProps) => {
  return (
    <s.InputContainer>
      <s.label>{label}</s.label>
      <s.IconContainer>
        <s.Input
          required={true}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
        <s.Icon size={24} />
      </s.IconContainer>
    </s.InputContainer>
  );
};

export default InputEmail;
