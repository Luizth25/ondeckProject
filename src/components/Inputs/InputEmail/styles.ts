import styled, { css } from "styled-components";
import { CiMail } from "react-icons/ci";

export const Input = styled.input`
  ${({ theme }) => css`
    width: 335px;
    height: 44px;
    border-radius: 4px;
    border: 1px solid #868686;
    font-size: 14px;
    font-weight: 400;
    background-color: transparent;
    padding: 10px;
    color: ${({ theme }) => theme.colors.corTitulo};
    outline: none;

    &:focus {
      border: 2px solid ${theme.colors.corPrimaria};
    }
  `}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(CiMail)`
  position: absolute;
  left: 85%;
  fill: ${({ theme }) => theme.colors.corPrimaria};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;

export const label = styled.label`
  font-weight: 500;
  size: 16px;
  font-family: "Poppins";
  color: ${({ theme }) => theme.colors.corTitulo};
`;
