import styled, { css } from "styled-components";

import {
  CiMail,
  CiRead as CiReadCI,
  CiUnread as CiUnreadCI,
} from "react-icons/ci";

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  flex: 2;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 14px;
  justify-content: center;
  align-items: center;
`;

export const ContainerCheckboxInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.corPrimaria};
  font-family: "Poppins";
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  font-family: "Poppins";
  color: red;
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

export const CiRead = styled(CiReadCI)`
  position: absolute;
  left: 85%;
  fill: ${({ theme }) => theme.colors.corPrimaria};
  cursor: pointer;
`;

export const CiUnread = styled(CiUnreadCI)`
  position: absolute;
  left: 85%;
  fill: ${({ theme }) => theme.colors.corPrimaria};
  cursor: pointer;
`;
