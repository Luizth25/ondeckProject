import styled, { css } from "styled-components";

export const ButtonRegistrar = styled.button`
  ${({ theme }) => css`
    padding: 20px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    background-color: ${theme.colors.corBotaoPrimaria};
    font-size: 18px;
    &:hover {
      background: ${theme.colors.corBotaoSecundaria};
    }
  `}
`;
