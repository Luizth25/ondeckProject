import styled, { css } from "styled-components";

export const ButtonLogin = styled.button`
  ${({ theme }) => css`
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #e9d9c6;
    color: ${theme.colors.corDeTexto};
    background-color: ${theme.colors.background};
    font-size: 18px;
    cursor: pointer;
    &:hover {
      background-color: #e9d9c6;
      border: 2px solid ${theme.colors.background};
    }
  `}
`;
