import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #e9d9c6;
  border-radius: 10px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 512px;
  height: 512px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
`;

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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 5px;
`;

export const label = styled.label`
  font-weight: 500;
  size: 16px;
  font-family: "Poppins";
  color: ${({ theme }) => theme.colors.corTitulo};
`;
