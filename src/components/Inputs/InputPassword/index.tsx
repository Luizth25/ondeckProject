import { useState } from "react";
import * as s from "./styles";
import { TInputProps } from "./types";

const InputPassword = ({
  label,
  onChange,
  placeholder,
  value,
}: TInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <s.InputContainer>
      <s.label>{label}</s.label>
      <s.IconContainer>
        <s.Input
          required
          type={isVisible ? "text" : "password"}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          minLength={6}
        />
        {isVisible ? (
          <s.CiRead
            size={24}
            onClick={() => setIsVisible((prevState) => !prevState)}
          />
        ) : (
          <s.CiUnread
            size={24}
            onClick={() => setIsVisible((prevState) => !prevState)}
          />
        )}
      </s.IconContainer>
    </s.InputContainer>
  );
};

export default InputPassword;
